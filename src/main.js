import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//组件的引入
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';



const app = createApp(App)


app.use(ArcoVue)

app.use(router)

app.mount('#app')
