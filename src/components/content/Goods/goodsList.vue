<template>
   <div class="goods">
     <goods-list-item v-for="item in goods" :key="item" :goods-item='item'></goods-list-item>
   </div>
</template>

<script>
import GoodsListItem from './goodsListItem.vue';
export default {
   data () {
      return {

      };
   },
   props:{
     goods:{
       type:Array,
       defalut(){
         return []
       }
     }
   },
   components: {GoodsListItem},

   computed: {
     
   },

   methods: {}
}
</script>
<style lang='css' scoped>

  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>