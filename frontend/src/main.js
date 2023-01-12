import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from  'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Swiper, { Navigation, Virtual} from 'swiper';
import 'swiper/css';
import '@/assets/styles/scss/swiper.css';
import 'swiper/css/navigation';




const swiper = new Swiper('.swiper', {
  modules: [Navigation, Virtual],
});

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
