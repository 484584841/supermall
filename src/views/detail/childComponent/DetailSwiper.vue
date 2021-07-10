<template>
   <div class="detail-swiper">
     <swiper class="swiperHight">
       <swiper-item v-for="item in topImages" :key="item">
         <img :src="item" alt="">
       </swiper-item>
     </swiper>
   </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"

export default {
   data () {
      return {

      };
   },
   props:{
     topImages:{
       type:Array,
       default(){
         return []
       }
     }
   },
   components: {
     Swiper,SwiperItem
   },

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
  .swiperHight{
    height: 350px;
  }
  .swiperHight img{
    height: 350px;
  }
</style>