<template>
     <swiper>
       <swiper-item v-for="item in banners" :key="item">
         <a :href="banners.link" >
           <img :src="item.image" alt="" @load="imgLode">
         </a>
       </swiper-item>
    </swiper>
</template>

<script>

import {Swiper,SwiperItem} from "components/common/swiper"

export default {
  props:{
    banners:{
      type:Array,
      default(){
        return [];
      }
    }
  },
   data () {
      return {
        isLode:false
      };
   },

   components: {Swiper,SwiperItem},

   computed: {},

   methods: {
     imgLode(){
       if(!this.isLode){
         this.$emit("swiperImgLode")
         this.isLode = true
       }
     }
   }
}
</script>
<style lang='css' scoped>

</style>