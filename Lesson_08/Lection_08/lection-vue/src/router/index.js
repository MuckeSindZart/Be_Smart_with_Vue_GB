import Vue from "vue";
import Router from "vue-router";
import DashboardComp from "@/pages/DashboardComp.vue";
import AboutComp from "@/pages/AboutComp.vue";
import NotFound from "@/pages/NotFound.vue";

Vue.use(Router);
export default new Router({
  //
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardComp,
    },
    {
      path: "/about*",
      name: "about",
      component: AboutComp,
    },
    {
      path: "/404",
      name: "NOTFOUND404",
      component: NotFound,
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
});
