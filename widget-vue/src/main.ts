import './assets/main.css'
import { ChoochooWidget } from '@choochoohq/widget-vue';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(ChoochooWidget)
app.use(router)

app.mount('#app')
