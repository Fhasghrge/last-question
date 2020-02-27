import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'
import animated from 'animate.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(animated)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
