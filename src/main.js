import Toast from 'vue-toastification';
import { createApp } from 'vue'
import App from './App.vue';
import router from './router/router.js';
import './views/index.css';
import "vue-toastification/dist/index.css";
import store from './store/index';
import toastPlugin from './plugins/toastPlugin';


const app = createApp(App);
app
.use(router)
.use(store)
.use(Toast)
.use(toastPlugin)
.mount('#app');
