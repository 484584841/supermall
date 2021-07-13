<template>
   <div class="cart">
     <nav-bar class="cart-nav">
       <template #center>购物车({{$store.state.carList.length}})</template>
     </nav-bar>
     <car-list></car-list>
     <car-bottom-nav></car-bottom-nav>
   </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue';
import CarBottomNav from './childComponents/CarBottomNav.vue';
import CarList from './childComponents/CarList.vue';

export default {
   data () {
      return {

      };
   },

   components: {
     NavBar,
      CarList,
      CarBottomNav
   },

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
  .cart-nav{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>