// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui'
import "mint-ui/lib/style.css"
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Vuex from 'vuex'
import store from "./store/store";

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(ElementUi)
Vue.use(Vuex)
Vue.prototype.$http =axios
axios.defaults.baseURL="http://localhost:9000"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
