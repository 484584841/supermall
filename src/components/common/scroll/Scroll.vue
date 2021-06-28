<template>
   <div ref="wrapper" class="wrapper">
     <div>
       <slot></slot>
     </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll';
import ObserveDom from '@better-scroll/observe-dom'
BScroll.use(ObserveDom)

export default {
   data () {
      return {
        bs:null
      };
   },
   props:{
     probeType:{
       type:Number,
       default:0
     },
     pullUpLode:{
       type:Boolean,
       default:false
     }
   },
   mounted(){
     this.bs = new BScroll(this.$refs.wrapper,{
       observeDOM:true,
       click:true,
       probeType:this.probeType,
       pullUpLoad:this.pullUpLode
     })
     this.bs.on('scroll',(position)=>{
       this.$emit('pscroll',position)
     })
     this.bs.on('pullingUp',()=>{
       this.$emit('scrollup')
     })
   },
   components: {},

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>

</style>