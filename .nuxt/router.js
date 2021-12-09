import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e433b93 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _a1e108b2 = () => interopDefault(import('../pages/articles.vue' /* webpackChunkName: "pages/articles" */))
const _9405e164 = () => interopDefault(import('../pages/authors.vue' /* webpackChunkName: "pages/authors" */))
const _2dfb1658 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _c47357f0 = () => interopDefault(import('../pages/hubs.vue' /* webpackChunkName: "pages/hubs" */))
const _10ba8d22 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0e433b93,
    name: "about___az"
  }, {
    path: "/articles",
    component: _a1e108b2,
    name: "articles___az"
  }, {
    path: "/authors",
    component: _9405e164,
    name: "authors___az"
  }, {
    path: "/en",
    component: _2dfb1658,
    name: "index___en"
  }, {
    path: "/hubs",
    component: _c47357f0,
    name: "hubs___az"
  }, {
    path: "/login",
    component: _10ba8d22,
    name: "login___az"
  }, {
    path: "/ru",
    component: _2dfb1658,
    name: "index___ru"
  }, {
    path: "/en/about",
    component: _0e433b93,
    name: "about___en"
  }, {
    path: "/en/articles",
    component: _a1e108b2,
    name: "articles___en"
  }, {
    path: "/en/authors",
    component: _9405e164,
    name: "authors___en"
  }, {
    path: "/en/hubs",
    component: _c47357f0,
    name: "hubs___en"
  }, {
    path: "/en/login",
    component: _10ba8d22,
    name: "login___en"
  }, {
    path: "/ru/about",
    component: _0e433b93,
    name: "about___ru"
  }, {
    path: "/ru/articles",
    component: _a1e108b2,
    name: "articles___ru"
  }, {
    path: "/ru/authors",
    component: _9405e164,
    name: "authors___ru"
  }, {
    path: "/ru/hubs",
    component: _c47357f0,
    name: "hubs___ru"
  }, {
    path: "/ru/login",
    component: _10ba8d22,
    name: "login___ru"
  }, {
    path: "/",
    component: _2dfb1658,
    name: "index___az"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
