<template>
   <div id="detail">
     <detail-nav-bar class="detail-nav" @titleClick='titleClick' ref="nav"></detail-nav-bar>
     <scroll class="content" :pullUpLoad="true" ref="scroll" :probeType='3' @pscroll="pscroll">
         <detail-swiper :topImages="topImages"></detail-swiper>
         <detail-base-info :goods="goods"></detail-base-info>
         <detail-shop-info :shop="shop"></detail-shop-info>
         <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
         <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
         <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
         <goods-list :goods='recommend' ref="recommend"></goods-list>
     </scroll>
     <detail-bottom-bar @addGoods="addGoods"></detail-bottom-bar>
     <back-top @click.native="backClick" v-show="isBackTop"></back-top>
   </div>
</template>

<script>
import DetailNavBar from './childComponent/DetailNavBar.vue';
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail.js"
import DetailSwiper from './childComponent/DetailSwiper.vue';
import DetailBaseInfo from './childComponent/DetailBaseInfo.vue';
import DetailShopInfo from './childComponent/DetailShopInfo.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';
import DetailGoodsInfo from './childComponent/DetailGoodsInfo.vue';
import DetailParamInfo from './childComponent/DetailParamInfo.vue';
import DetailCommentInfo from './childComponent/DetailCommentInfo.vue';
import GoodsList from '../../components/content/Goods/goodsList.vue';
import {debounce} from "components/common/utils.js"
import DetailBottomBar from './childComponent/DetailBottomBar.vue';
import BackTop from '../../components/content/backTop/backTop.vue';

export default {
  name:"Detail",
   data () {
      return {
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommend:[],
        TopY:[],
        debounceF:null,
        positionY:0,
        currentIndex:0,
        isBackTop:false
      };
   },
   created(){
     this.iid = this.$route.params.iid

     getDetail(this.iid).then(res=>{
       const data = res.result
       // 获取轮播图数据
       this.topImages = data.itemInfo.topImages
       // 获取商品数据,调用封装的ES6的class
       this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
       // 获取店铺数据
       this.shop = new Shop(data.shopInfo)
       // 获取下面的图片展示数据
       this.detailInfo = data.detailInfo
       // 获取尺寸数据
       this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
       // 获取评论数据
       if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0] || {};
       }
     })

     getRecommend().then(res => {
       this.recommend = res.data.list
     })
     this.debounceF = debounce(()=>{
       this.TopY = []
       this.TopY.push(0)
       this.TopY.push(this.$refs.param.$el.offsetTop)
       this.TopY.push(this.$refs.comment.$el.offsetTop)
       this.TopY.push(this.$refs.recommend.$el.offsetTop)
       this.TopY.push(Number.MAX_VALUE)
     },500)
   },
   components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      BackTop
   },

   computed: {},

   methods: {
     backClick(){
       this.$refs.scroll.bs && this.$refs.scroll.bs.scrollTo(0,0,500)
     },

     titleClick(index){
      //  console.log(index);
      this.$refs.scroll.bs.scrollTo(0,-this.TopY[index],1000)
     },
     imageLoad(){
       this.debounceF()
     },
     pscroll(position){
      //  console.log(position);
       this.isBackTop = (-position.y) > 1000
       this.positionY = -position.y
        for (let i = 0; i < this.TopY.length-1; i++) {
          if(this.currentIndex !== i && (this.positionY >= this.TopY[i] && this.positionY <this.TopY[i+1] )){
            this.currentIndex = i
            // console.log(this.currentIndex);
            this.$refs.nav.currentIndex = this.currentIndex
          } 
        }
     },
     addGoods(){
       let product = {}
      //  console.log(this.goods);
       product.price = this.goods.realPrice
       product.image = this.topImages[0]
       product.title = this.goods.title
       product.desc = this.goods.desc
       product.iid = this.iid

       this.$store.commit('addCarList',product)
     }
   }
}
</script>
<style lang='css' scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    /* padding-bottom: 58px; */
    height: 100vh;
  }
  .content{
    background-color: #fff;
    height: calc(100% - 58px - 44px);

    /* overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0; */
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>