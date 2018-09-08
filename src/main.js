import Vue from 'vue'
import App from './App.vue'
import { Search,Switch  } from 'mint-ui'
import router from './router/index'
import './assets/global.css'
import moment from "moment";
import VueMomentJS from "vue-momentjs";
 
Vue.use(VueMomentJS, moment)

Vue.component(Search.name, Search);
Vue.component(Switch.name, Switch);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
