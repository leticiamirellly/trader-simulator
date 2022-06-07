import { createRouter, createWebHistory } from "vue-router";

const home = () => import("../views/dashboard.vue");
const portfolio = () => import("../views/customer/wallet.vue");
const stocks = () => import("../views/market/stocks.vue");

const routes = [
  { path: "/", name: "home", component: home },
  { path: "/portfolio", name: "portfolio", component: portfolio },
  { path: "/stocks", name: "stocks", component: stocks },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "is-active",
  linkActiveClass: "router-link-active",
});

export default router;
