import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import admin from '../pages/admin.vue'
import purchaseProcessing from '../pages/purchaseProcessing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/purchaseProcessing',
    name: 'purchaseProcessing',
    component: purchaseProcessing
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
