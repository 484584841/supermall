<template>
   <div>
      <nav-bar>
        <template #left>
          <img src="~assets/img/common/back.svg" alt="返回" class="back" @click="backClick">
        </template>
        <template #center>
          <div class="title">
            <div v-for="(item,index) in title" :key="index" class="title-item" @click="btnClick(index)" :class="{active:index === currentIndex}">{{item}}</div>  
          </div>
        </template>
      </nav-bar>
   </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue';
export default {
   data () {
      return {
        title:['商品','参数','评论','推荐'],
        currentIndex:0,
      };
   },

   components: {NavBar},

   computed: {},

   methods: {
     btnClick(index){
       this.currentIndex = index;
       this.$emit('titleClick',index)
     },
     backClick(){
       this.$router.go(-1)
     }
   }
}
</script>
<style lang='css' scoped>
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
    font-size: 15px;
  }
  .active{
    color: #ff5777;
  }
  .back{
    margin-left: 15px;
    margin-top: 12px;
  }
</style>