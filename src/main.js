import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import routes from './router/index'

// const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
// app.use(router)

new Vue({
  routes,
  render: h => h(App),
}).$mount('#app')
