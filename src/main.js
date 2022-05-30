import { createApp } from 'vue'
import App from './App.vue';
import router from './router/router.js';
import './views/index.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
