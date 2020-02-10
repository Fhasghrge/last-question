import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
import qs from 'qs';
Vue.prototype.qs = qs;

Vue.config.productionTip = false
Vue.prototype.$axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
