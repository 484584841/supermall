import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventBus from 'vue3-eventbus'

const app = createApp(App)
app.use(eventBus)
app.use(store)
app.use(router).mount('#app')
