import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: 'dashboard/dashboard',
      component: () => import('@/layouts/Layout'),
      children: [
        {
          name: 'About',
          path: 'about',
          component: () => import('@/views/About'),
        },
        {
          name: 'Alert',
          path: 'pages/alerts',
          component: () => import('@/views/pages/Alerts'),
        },
        {
          name: 'Dashboard',
          path: 'dashboard/dashboard',
          component: () => import('@/views/dashboard/Dashboard'),
      },
      ]
    }
  ]
})

export default router
