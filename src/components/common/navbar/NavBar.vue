<template>
   <div class="nav-bar">
     <div class="left"><slot name="left"></slot></div>
     <div class="center"><slot name="center"></slot></div>
     <div class="right"><slot name="right"></slot></div>
   </div>
</template>

<script>
export default {
   data () {
      return {

      };
   },

   components: {},

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
 .nav-bar{
   display: flex;
   height: 44px;
   line-height: 44px;
 }
 .left , .right{
   width: 60px;
   /* background-color: yellow; */
 }
 .center{
   flex: 1;
   text-align: center;
 }
</style>