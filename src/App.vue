<template>
  <div class="aa">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
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
  position: relative;
  z-index: 8;
 }
 
  @import "./assets/css/base.css"
</style>

