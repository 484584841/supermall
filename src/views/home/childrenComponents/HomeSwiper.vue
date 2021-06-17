<template>
     <swiper>
       <swiper-item v-for="item in banners" :key="item">
         <a :href="banners.link" >
           <img :src="item.image" alt="">
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
        return []
      }
    }
  },
   data () {
      return {

      };
   },

   components: {Swiper,SwiperItem},

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>

</style>