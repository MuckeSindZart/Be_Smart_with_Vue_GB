import Vue from "vue";
import App from "./App.vue";
import routes from "@/router";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({ mode: "history", routes });

router.beforeEach((to, from, next) => {
  /* must call `next` */
  console.log("beforeEach:", "to:", to.path, ", from:", from.path);
  next();
});

new Vue({ render: (h) => h(App), router }).$mount("#app");
