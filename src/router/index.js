import Vue from 'vue'
import VueRouter from 'vue-router'
import routerData from './config'
import tokenUtils from '../utils/cookieToken'

Vue.use(VueRouter)
const routes = [
  ...routerData
]
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (tokenUtils.getCookieSelf('token')) {
      next()
    } else {
      next({
        path: '/sign-in'
      })
    }
  } else {
    next()
  }
})
export default router
