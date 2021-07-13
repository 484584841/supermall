<template>
   <div ref="wrapper">
     <div class="content">
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
     pullUpLoad:{
       type:Boolean,
       default:false
     }
   },
   mounted(){
     this.bs = new BScroll(this.$refs.wrapper,{
       observeDOM:true,
       click:true,
       probeType:this.probeType,
       pullUpLoad:this.pullUpLoad
       
     })

     if (this.probeType === 2 || this.probeType === 3) {
        this.bs.on('scroll', (position) => {
          this.$emit('pscroll', position)
        })
      }

      if (this.pullUpLoad) {
        this.bs.on('pullingUp', () => {
          this.$emit('scrollup')
        })
      }
      
   },
   components: {},

   computed: {},

   methods: {
     refresh(){
       this.scroll && this.scroll.refresh()
     },
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    }
    },
    // watch: {
    //   data() {
    //     setTimeout(this.refresh, 20)
    //   }
    // }
  }
</script>
<style lang='css' scoped>

</style>