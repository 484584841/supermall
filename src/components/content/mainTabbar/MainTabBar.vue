<template>
  <tab-bar>
    <tab-bar-item path="/home">
    <!-- 插槽的简写 直接一个# -->
      <template #tabbar-img >
        <img src="../../../assets/img/tabbar/home.svg" alt="">
      </template>
      <template #tabbar-img-active>
        <img src="../../../assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template #tabbar-text>
        <div slot:tabbar-text>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:tabbar-img >
        <img src="../../../assets/img/tabbar/category.svg" alt="">
      </template>
      <template v-slot:tabbar-img-active>
        <img src="../../../assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template v-slot:tabbar-text>
        <div slot:tabbar-text>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <template v-slot:tabbar-img >
        <img src="../../../assets/img/tabbar/shopcart.svg" alt="">
      </template>
      <template v-slot:tabbar-img-active>
        <img src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template v-slot:tabbar-text>
        <div slot:tabbar-text>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:tabbar-img >
        <img src="../../../assets/img/tabbar/profile.svg" alt="">
      </template>
      <template v-slot:tabbar-img-active>
        <img src="../../../assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template v-slot:tabbar-text>
        <div slot:tabbar-text>我的</div>
      </template>
    </tab-bar-item>
    <!-- <tab-bar-item path="/category">
      <img slot:tabbar-img src="../../../assets/img/tabbar/home_active.svg" alt="">
      <img slot:tabbar-img-active src="../../../assets/img/tabbar/home_active.svg" alt="">
      <div slot:tabbar-text>分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot:tabbar-img src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot:tabbar-img-active src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot:tabbar-text>购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot:tabbar-img src="~assets/img/tabbar/profile.svg" alt="">
      <img slot:tabbar-img-active src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot:tabbar-text>我的</div>
    </tab-bar-item> -->
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar.vue'
  import TabBarItem from '../../common/tabbar/TabBarItem.vue'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
.tab-bar-item img{
    height: 24px;
    width: 24px;
    /* 消除图片下方自带的3px */
    vertical-align: middle;
    margin-top: 4px;
    margin-bottom: 1px;
  }
</style>
