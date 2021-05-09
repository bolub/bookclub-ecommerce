import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import middlewarePipeline from "./kernel/middlewarePipeline";
import guest from "./middleware/guest";
import publicRoutes from "../views/public/router";

Vue.use(VueRouter);

const routes = [...publicRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    store,
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
