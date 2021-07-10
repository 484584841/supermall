import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: "/",
    redirect: "/home"
  }, {
    path: "/home",
    component: () => import("../views/home/Home.vue")
  }, {
    path: "/category",
    component: () => import("../views/category/Category.vue")
  }, {
    path: "/profile",
    component: () => import("../views/profile/Profile.vue")
  }, {
    path: "/shopcart",
    component: () => import("../views/shopcart/Shopcart.vue")
  }, {
    path: "/detail/:iid",
    component: () => import("../views/detail/Detail.vue")
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
