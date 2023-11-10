import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import CoreuiVue from '@coreui/vue';
import stores from "@/stores";

// import axios from "axios";

// import './assets/main.css'

// app.config.globalProperties.$axios = axios;
createApp(App).use(router).use(stores).use(CoreuiVue).mount('#app')
