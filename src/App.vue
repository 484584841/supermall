<template>
  <div class="aa">
    <router-view></router-view>
    <main-tab-bar class="tabbar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar.vue"

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
.tabbar{
  z-index: 99;
 }
 
  @import "./assets/css/base.css"
</style>

