<template>
   <div class="toast" v-show="isshow">
       {{ismessage}}
   </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    ismessage: {
      type: String,
      default: ''
    },
    isshow: {
      type:Boolean,
      default: true
    }
  },
  data(){
    return{
      message: '',
      isShow: false
    }
  },
  // methods: {
  //   Show :function (message='默认文字',duration = 2000) {
  //     this.isshow = true;
  //     this.ismessage = message
  //     setTimeout(()=>{
  //       this.isshow = false;
  //       this.ismessage = ''
  //     },duration)
  //   }
  // }
}
</script>
<style lang='css' scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
    border-radius: 8px;
  }
</style>