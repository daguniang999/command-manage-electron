import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/common.css'
import svgIcon from "./components/common/svg/index.vue"
import 'virtual:svg-icons-register'
import 'ant-design-vue/dist/antd.css'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.component('svg-icon', svgIcon)
app.mount('#app')

