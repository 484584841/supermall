<template>
   <div class="tab-contral">
     <div class="tab-contral-item" 
     v-for="(item,index) in title" 
     :key="item" 
     @click="btnclick(index)"
     :class="{active:index===isactive}">
       <span>{{title[index]}}</span>
     </div>
   </div>
</template>

<script>
export default {
   data () {
      return {
        isactive:0
      };
   },
  props:{
    title:{
      type:Array,
      defalte(){
        return []
      }
    }
  },
   components: {},

   computed: {},

   methods: {
     btnclick(index){
       this.isactive = index;
       this.$emit("tabClick",index)
     }
   }
}

</script>
<style lang='css' scoped>
  .active{
    color: #ff5777;   
  }
  .active span{
    border-bottom:3px solid #ff5777;
  }
  .tab-contral{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-contral-item{
    flex: 1;
  }
  .tab-contral-item span{
    padding: 5px;

  }
</style>
