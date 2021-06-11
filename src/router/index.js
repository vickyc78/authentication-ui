import Vue from "vue";
import VueRouter from "vue-router";

import AuthLayout from "../layouts/AuthLayout.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import ErrorLayout from "../layouts/ErrorLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login",
    name: "AuthLayout",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("../views/Auth/Login.vue"),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: "/register",
        name: "register",
        component: () => import("../views/Auth/Register.vue")
      },
      {
        path: "/forgot-password",
        name: "forgot-password",
        component: () => import("../views/Auth/ForgotPassword.vue")
      }
    ]
  },
  {
    path: "/",
    component: ErrorLayout,
    children: []
  },
  {
    path: "/",
    name: "DefaultLayout",
    component: DefaultLayout,
    children: [
      {
        path: "/user-dashboard",
        name: "dashboard",
        component: () => import("../views/User-Dashboard.vue"),
        meta: {
          requiresAuth: true,
          accessLevel: ["User"]
        }
      },
      {
        path: "/owner-dashboard",
        name: "dashboard",
        component: () => import("../views/Owner-Dashboard.vue"),
        meta: {
          requiresAuth: true,
          accessLevel: ["Owner"]
        }
      },
      {
        path: "/admin-dashboard",
        name: "dashboard",
        component: () => import("../views/Admin-Dashboard.vue"),
        meta: {
          requiresAuth: true,
          accessLevel: ["Admin", "Owner"]
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
