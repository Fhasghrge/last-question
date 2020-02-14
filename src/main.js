import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios); // 全局使用axios

Vue.config.productionTip = false
Vue.prototype.$axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
