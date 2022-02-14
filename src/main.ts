import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:windi.css'

const myApp=createApp(App)
const pinia=createPinia()
myApp
.use(router)
.use(pinia)
.mount('#app')
    