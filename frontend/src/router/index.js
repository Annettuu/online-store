import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import admin from '../pages/admin/adminPage.vue'
import purchaseProcessingPage from '../pages/purchase-processing/purchaseProcessingPage.vue'
import CardProduct from '../components/CardProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    component: purchaseProcessingPage
  },
  {
    path: '/CardProduct',
    name: 'CardProduct',
    component: CardProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
