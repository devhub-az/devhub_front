import Vue from 'vue'
import store from '@/store/index'
import VueRouter from 'vue-router'
import auth from '@/middleware/auth'
import admin from '@/middleware/admin'
import guest from '@/middleware/guest'
import middlewarePipeline from '@/router/middlewarePipeline'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {middleware: [guest]},
        component: () => import('../views/Home'),
    },
    {
        path: '/',
        name: 'articles',
        meta: {middleware: [guest]},
        component: () => import('../views/Home'),
    },
    {
        path: '/1',
        name: 'hubs',
        meta: {middleware: [guest]},
        component: () => import('../views/Home'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {middleware: [auth]},
        component: () =>
            import('../views/Dashboard'),
    },
    {
        path: '/user',
        name: 'user',
        meta: {middleware: [auth]},
        component: () => import('../views/User'),
    },
    {
        path: '/users',
        name: 'users',
        meta: {middleware: [auth, admin]},
        component: () =>
            import('../views/Users'),
    },
    {
        path: '/login',
        name: 'login',
        meta: {middleware: [guest]},
        component: () =>
            import('../views/Login'),
    },
    {
        path: '/register',
        name: 'register',
        meta: {middleware: [guest]},
        component: () =>
            import('../views/Register'),
    },
    {
        path: '/reset-password',
        name: 'resetPassword',
        meta: {middleware: [guest]},
        component: () =>
            import(
                '../views/ResetPassword'
                ),
    },
    {
        path: '/forgot-password',
        name: 'forgotPassword',
        meta: {middleware: [guest]},
        component: () =>
            import(
                '../views/ForgotPassword'
                ),
    },
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: () =>
            import('../views/NotFound'),
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    },
})

router.beforeEach((to, from, next) => {
    const middleware = to.meta.middleware
    const context = {to, from, next, store}

    if (!middleware) {
        return next()
    }

    middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1),
    })
})

export default router
