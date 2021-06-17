<template>
   <div class="tab-bar-item" @click="btnClick">
    <slot v-if="!isactive" name="tabbar-img"></slot>
    <slot v-else name="tabbar-img-active"></slot>
    <div :class="{active:isactive}"><slot name="tabbar-text"></slot></div>
   </div>
</template>

<script>
export default {
   data () {
      return {
        // isactive:true
      };
   },
  props:{
    path:String
  },
   components: {},

   computed: {
     isactive(){
      //  判断当前路由的活跃地址是否与path相等
       return this.$route.path == this.path 
     }
   },

   methods: {
     btnClick(){
       this.$router.push(this.path).catch(error=>"")
     }
   }
}
</script>
<style lang='css' scoped>
  .tab-bar-item{
    flex: 1;
    /* justify-content: center; */
    text-align: center;
    height: 49px;
    font-size: 14px;
    /* line-height: 49px; */
  }
  .active{
    color: #ff5777;
  }
</style>