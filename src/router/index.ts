// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/show/:id",
    name: "Show",
    component: () => import("@/views/ShowView.vue"),
  },
  {
    path: "/search",
    name: "Search",
    params: true,
    component: () => import("@/views/SearchView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
