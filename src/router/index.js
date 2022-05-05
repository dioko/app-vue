import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthRoutes from '@/modules/auth/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/auth/login',
    meta: {layout: 'auth'},
  },
    ...AuthRoutes,
  {
    path: '**',
    redirect: '/auth/login',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
