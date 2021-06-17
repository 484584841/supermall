<template>
   <div class="recommend">
     <div v-for="item in recommends" :key="item" class="recommend-item">
       <a :href="item.link">
         <img :src="item.image" alt="">
         <p>{{item.title}}</p>
       </a>
     </div>
   </div>
</template>

<script>
export default {
  props:{
    recommends:{
      type:Array,
    }
  },
   data () {
      return {

      };
   },

   components: {},

   computed: {},

   methods: {}
}
</script>
<style lang='css'>
  .recommend{
    display: flex;
    text-align: center;
    padding: 10px 0 20px 0;
    border-bottom: 8px solid #eee;
    font-size: 14px;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>