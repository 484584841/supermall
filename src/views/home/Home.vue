<template>
 <div id="home">
  <nav-bar class="home-nav">
    <template #center>购物街</template>
  </nav-bar>
  <scroll class="content" ref="scroll" :probe-type="3" @pscroll="pscroll" :pullUpLode="true" @scrollup="scrollup">
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <feature-view></feature-view>
    <tab-contral class="tab-contral" :title="['流行','新款','精选']"  @tabClick="tabClick(position)"></tab-contral>
    <goods-list :goods="goods[currentType].list" ></goods-list>
  </scroll>
  <back-top @click="backClick" v-show="isBackTop"></back-top>
 </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import HomeSwiper from './childrenComponents/HomeSwiper.vue';
import HomeRecommend from './childrenComponents/HomeRecommend.vue';
import FeatureView from './childrenComponents/FeatureView.vue';
import TabContral from '../../components/common/tabcontral/TabContral.vue';

import {getHomeMultiDate,getHomeData} from "network/home"
import GoodsList from '../../components/content/Goods/goodsList.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';
import BackTop from '../../components/content/backTop/backTop.vue';

export default {
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
        isBackTop:false
      };
   },

   components: {
     NavBar,HomeSwiper,
      HomeRecommend,
      FeatureView,
      TabContral,
      GoodsList,
      Scroll,
      BackTop
   },
  created(){
    this.getHomeMultiDate()
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
   computed: {},

   methods: {
     tabClick(index){
      //  console.log(index);
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
          this.goods[type].list.push(...res.data.list)
          // console.log(res);
          this.goods[type].page += 1
          this.$refs.scroll.bs.finishPullUp()
        })
     },
     backClick(){
       this.$refs.scroll.bs.scrollTo(0,0,500)
      },
      pscroll(position){
        this.isBackTop = position.y < -1000
      },
      scrollup(){
        this.getHomeData(this.currentType)
      }
   }
}
</script>
<style lang='css' scoped>
  #home{
    padding-top: 44px;
    padding-bottom: 49px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color:#fff;
    background-color: pink;
    z-index: 9;
  }
  .tab-contral{
    /* position: sticky; */
    top: 44px;
    z-index: 9;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>