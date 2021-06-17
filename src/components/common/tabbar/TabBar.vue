<template>
   <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
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
    #tab-bar{
    display: flex;
    background-color: rgb(216, 213, 213);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 2px rgba(136, 134, 134, 0.2);
  }
</style>