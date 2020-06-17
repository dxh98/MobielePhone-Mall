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
    path: "/sousuo",
    name: "sousuo",
    component: () => import("../views/sousuo.vue"),
    meta: {
      hideNav: true,
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
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue"),
    meta: {
      hideNav: true,
    },
  },
  {
    path: "/refund",
    name: "Refund",
    component: () => import("../views/Refund.vue"),
    meta: {
      hideNav: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      hideNav: true,
    },
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: () => import("../views/Feedback.vue"),
    meta: {
      hideNav: true,
    },
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("../views/Help.vue"),
    meta: {
      hideNav: true,
    },
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/Order.vue"),
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
