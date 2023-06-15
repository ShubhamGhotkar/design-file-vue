import Vue from "vue";
import VueRouter from "vue-router";
import TheHome from "../views/TheHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: TheHome,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
