import Vue from 'vue'
import App from './App.vue'
// import { Search,Switch  } from 'mint-ui'
import router from './router/index'
import './assets/global.css'
import './plugins/element.js'
import { Pagination } from 'element-ui';
Vue.use(require('vue-moment'))

Vue.use(Pagination)




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
