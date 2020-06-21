import './assets/styles/main.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCarousel from 'vue-carousel'
import App from './App.vue'
import {routes} from './routes'
// import store from './store'

// Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueCarousel)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return  {selector: to.hash}
    }
    return {x:0,y:0}
  }
})

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
