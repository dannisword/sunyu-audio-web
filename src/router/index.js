import Vue from "vue";
import VueRouter from "vue-router";

import { isExpiry } from "@/unit/verify";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      meta: { title: "產品入口網" },
      redirect: "/AllClass",
      component: () => import("@/layouts/Layout"),
      children: [
        {
          name: "AllClass",
          path: "/AllClass/:account/:password",
          meta: { title: "產業創新知識庫" },
          component: () => import("@/views/pages/AllClass"),
        },
        {
          name: "AllClass",
          path: "/AllClass",
          meta: { title: "產業創新知識庫" },
          component: () => import("@/views/pages/AllClass"),
        },
        {
          name: "Course",
          path: "/Course/:Seq",
          meta: { title: "產業創新知識庫" },
          component: () => import("@/views/pages/Course"),
        },
        {
          name: "ClassContent",
          path: "class-content",
          meta: { title: "課程內容" },
          component: () => import("@/views/pages/ClassContent"),
        },
        {
          name: "MyClass",
          path: "MyClass",
          meta: { title: "我的課程" },
          component: () => import("@/views/pages/MyClass"),
        },
        {
          name: "Dashboard",
          path: "dashboard",
          meta: { title: "產品入口網" },
          component: () => import("@/views/dashboard/Dashboard"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  //
  //console.log(to);
  /*
  const exp = isExpiry();
  if (exp == true) {
    //next(`/AllClass?redirect=${to.path}`);
    //next();
    //window.location.href = "https://google.com/contact";
    //return;
    //console.log('dashboard');
    //next("/Dashboard");
  }else{
    next();
  }*/
  next();
});
export default router;
