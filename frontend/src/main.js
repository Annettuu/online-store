import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from  'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap-vue/dist/bootstrap-vue.css'
import  '@/assets/styles/scss/custom.css'
import  '@/assets/styles/scss/main-color.scss'

Vue.use(VueRouter)


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
