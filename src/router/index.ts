import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/views/Layout/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Login/Index.vue"),
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Index.vue"),
  },
  {
    path: "/dashboard",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/DashBoard/Index.vue"),
        name: "Dashboard",
      },
    ],
  },
  {
    path: "/document",
    component: Layout,
    // redirect: "/document/index",
    children: [
      {
        path: "",
        component: () => import("@/views/Document/Index.vue"),
        name: "Document",
      },
    ],
  },
  {
    path: "/chart",
    component: Layout,
    // redirect: "/chart/index",
    children: [
      {
        path: "",
        component: () => import("@/views/Chart/Index.vue"),
        name: "Chart",
      },
    ],
  },
  {
    path: "/guide",
    component: Layout,
    // redirect: "/guide/index",
    children: [
      {
        path: "",
        component: () => import("@/views/Guide/Index.vue"),
        name: "Guide",
      },
    ],
  },
  {
    path: "/table",
    component: Layout,
    // redirect: "/table/index",
    children: [
      {
        path: "",
        component: () => import("@/views/Table/Index.vue"),
        name: "Table",
      },
    ],
  },
  {
    path: "/tab",
    component: Layout,
    // redirect: "/tab/index",
    children: [
      {
        path: "",
        component: () => import("@/views/Tab/Index.vue"),
        name: "Tab",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
