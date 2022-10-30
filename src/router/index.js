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
            meta: { title: '產品入口網' },
            redirect: 'dashboard/dashboard',
            component: () => import('@/layouts/Layout'),
            children: [
                {
                    name: 'AllClass',
                    path: '/AllClass',
                    meta: { title: '產業創新知識庫' },
                    component: () => import('@/views/pages/Knowledge'),
                },
                {
                    name: 'Knowledge',
                    path: '/knowledge',
                    meta: { title: '產業創新知識庫' },
                    component: () => import('@/views/pages/Knowledge'),
                },
                {
                    name: 'Course',
                    path: '/Course/:Seq/:Unit',
                    meta: { title: '產業創新知識庫' },
                    component: () => import('@/views/pages/Course'),
                },
                {
                    name: 'ClassContent',
                    path: 'class-content',
                    meta: { title: '課程內容' },
                    component: () => import('@/views/pages/ClassContent'),
                },
                {
                    name: 'MyClass',
                    path: 'my-class',
                    meta: { title: '我的課程' },
                    component: () => import('@/views/pages/MyClass'),
                },
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
                    meta: { title: '產品入口網' },
                    component: () => import('@/views/dashboard/Dashboard'),
                },
                {
                    name: 'Video',
                    path: 'Video',
                    component: () => import('@/views/pages/Video'),
                },
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next()
});
export default router
