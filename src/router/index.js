import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { isLogined } from "../utils/auth.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sort",
    name: "Sort",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Sort.vue"),
    children: [
      {
        path: "products/:id",
        name: "Products",
        component: () => import("../views/products"),
      },
    ],
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    meta: {
      needLogin: true,
    },
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
    meta: {
      needLogin: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      hideNav: true,
    },
  },
  {
    path: "/reg",
    name: "Reg",
    component: () => import("../views/Reg.vue"),
    meta: {
      hideNav: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  if (to.meta.needLogin) {
    //判断是否登录
    if (isLogined()) {
      next();
    } else {
      next({
        name: "Login",
      });
    }
  } else {
    next();
  }
});

export default router;
