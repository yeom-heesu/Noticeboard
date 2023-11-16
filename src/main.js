import { createApp  } from 'vue'
import App from './App.vue'
import router from './routes'
import CoreuiVue from '@coreui/vue';
import stores from "@/stores";
// import {setupServer} from "msw/node";
// const {worker} = setupServer('./mocks/handlers');
// worker.start();


createApp(App).use(router).use(stores).use(CoreuiVue).mount('#app')
