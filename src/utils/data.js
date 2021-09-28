export const staticRouter = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "*",
    // redirect: '/',
    name: "404",
    // meta:{title:'页面错误'},
    component: () => import("../views/404.vue"),
  },
];

export const dynamincRouter = [
  {
    path: "/one",
    component:"/One.vue",
  },
  {
    path: "/two",
    component: "/Two.vue",
  },
  {
    path: "/three",
    component:"/Three.vue",
  },
];
