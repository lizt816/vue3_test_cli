import { createApp } from 'vue'
import App from './App.vue'
import route from './router/index'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersist)
app.use(pinia)
app.use(route)
app.mount('#app')
