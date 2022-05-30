import { createRouter, createWebHistory } from "vue-router";

const home = () => import("../views/dashboard.vue");
const portfolio = () => import("../views/customer/customer-porfolio.vue");
const stocks = () => import("../views/market/stocks.vue");

const routes = [{ path: "/home", name: 'home', component: home}];

const router = createRouter({routes, history: createWebHistory(process.env.BASE_URL)})

export default router;