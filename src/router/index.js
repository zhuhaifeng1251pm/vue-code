import VueRouter from "vue-router"; //导入vue-router包
import Home from "../components/Home";//导入相应的组件
import Article from '../components/Article'
// import Post from "../components/Post";//导入相应的组件
import Vue from "vue";//导入vue
Vue.use(VueRouter)
const routes = [
    { path: '/', component: Home },
    { path:'/topic/:id',component:Article}

]
const router = new VueRouter({
    mode: 'history',//去掉模拟的/#/
    routes
})
export default router