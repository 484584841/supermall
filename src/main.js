import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventBus from 'vue3-eventbus'
// import toast from "./components/common/toast"

createApp(App).use(router).use(store).use(eventBus).mount('#app')
