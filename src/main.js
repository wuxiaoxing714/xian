import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Footer from './components/Footer.vue'
Vue.config.productionTip = false
// 引入axios
axios.defaults.baseURL = "http://127.0.0.1:3000"
Vue.prototype.axios = axios;
Vue.component('MyFooter', Footer);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
