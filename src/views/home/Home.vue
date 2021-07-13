<template>
 <div id="home">
  <nav-bar class="home-nav">
    <template #center>购物街</template>
  </nav-bar>
  <tab-contral 
      class="tab-contral-show" 
      :title="['流行','新款','精选']"  
      @tabClick="tabClick" 
      ref="tabContral1" 
      v-show="isTabContralShow"></tab-contral>
  <scroll 
      class="content" 
      ref="scroll" 
      :probe-type="3"  
      @pscroll="pscroll" 
      :pullUpLoad="true" 
      @scrollup="scrollup">
    <home-swiper :banners="banners" @swiperImgLode="swiperImgLode"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <feature-view></feature-view>
    <tab-contral  :title="['流行','新款','精选']"  @tabClick="tabClick" ref="tabContral2" ></tab-contral>
    <goods-list :goods="goods[currentType].list" ></goods-list>
  </scroll>
  <!-- <back-top @click.native="backClick" v-show="isBackTop"></back-top> -->
 </div>
</template>

<script>
import bus from 'vue3-eventbus'

import NavBar from "components/common/navbar/NavBar"

import HomeSwiper from './childrenComponents/HomeSwiper.vue';
import HomeRecommend from './childrenComponents/HomeRecommend.vue';
import FeatureView from './childrenComponents/FeatureView.vue';
import TabContral from '../../components/common/tabcontral/TabContral.vue';

import {getHomeMultiDate,getHomeData} from "network/home"
import GoodsList from '../../components/content/Goods/goodsList.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';
// import BackTop from '../../components/content/backTop/backTop.vue';
import {debounce} from "components/common/utils.js"
export default {
  name:"Home",
   data () {
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        // isBackTop:false,
        tabOffsetTop:0,
        isTabContralShow:false,
        saveY:0
      };
   },
   components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      FeatureView,
      TabContral,
      GoodsList,
      Scroll,
      // BackTop
   },
  created(){
    this.getHomeMultiDate()
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,500)
    bus.on('imgLode',()=>{
     refresh();
    })
  },
  activated(){
    // setTimeout(()=>{
      this.$refs.scroll.bs.scrollTo(0,this.saveY,10)
    // },120)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.bs.y
  },
   computed: {},

   methods: {
     tabClick(index){
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabContral1.isactive = index;
      this.$refs.tabContral2.isactive = index;
     },
     getHomeMultiDate(){
       getHomeMultiDate().then(res=>{
      this.banners = res.data.banner.list,
      this.recommends = res.data.recommend.list
      })
     },
     getHomeData(type){
       let page = this.goods[type].page + 1
       getHomeData(type,page).then(res=>{
        //  console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
          this.$refs.scroll.refresh()
        })
     },
    //  backClick(){
    //    console.log(1);
    //    this.$refs.scroll && this.$refs.scroll.scrollTo(0,0,500)
    //  },
     pscroll(position){
        this.isBackTop = (-position.y) > 1000
        this.isTabContralShow = (-position.y) > this.tabOffsetTop
     },
     scrollup(){
      //  console.log(11111);
        this.getHomeData(this.currentType)
        this.$refs.scroll.refresh()
     },
     swiperImgLode(){
        this.tabOffsetTop = this.$refs.tabContral2.$el.offsetTop
        // return true
     }
    }
   }

</script>
<style lang='css' scoped>
  #home {
    /* height: calc(100vh - 58px - 44px);
    position: relative; */
    position: relative;
		height: 100vh;
  }

  .content {   
    /* overflow: hidden;
    height: 100%; */
    overflow: hidden;
		position: absolute;
		left: 0;
		right: 0;
		top: 44px;
		bottom: 49px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    overflow: hidden;
    /* 在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/ 
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }


  .tab-contral-show {
    position: relative;
    z-index: 99;
  }

</style>