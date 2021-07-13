<template>
  <div class="car-list">
    <scroll class="content" ref="betterScroll">
      <car-list-item v-for="(item,index) in $store.state.carList" :key="index" :product="item"></car-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll.vue';
import CarListItem from './CarListItem.vue';

export default {
   data () {
      return {

      };
   },
  activated(){
    this.$refs.betterScroll.refresh()
   },
   components: {
     Scroll, 
     CarListItem
     },

   computed: {},

   methods: {},
   
}
</script>
<style lang='css' scoped>
  .car-list{
    position: relative;
    height:  calc(100vh - 49px - 44px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>