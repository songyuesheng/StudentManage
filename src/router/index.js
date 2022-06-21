//引入vue
import Vue from 'vue';
//引入vue-index
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引入Login页面
import Loin from '../views/Login.vue'
import StudentList from '../views/StudentList'
import main from '../views/main'
import Login2 from '../views/Login2.vue'


//定义routes路由的集合，数组类型
const routes = [
    //单个路由均为对象类型，path代表的是路径，component代表组件
    { path: '/login', component: Loin },
    { path: '/StudentList', component: StudentList },
    { path: '/index', component: main },
    { path: '/login2', component: Login2 }
]

const router = new VueRouter({
    routes
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') {
//         next();
//     } else {
//         let token = localStorage.getItem('token');
//         if (token === null || token === '') {
//             next('/login');
//         } else {
//             next();
//         }
//     }
// })
//抛出这个这个实例对象方便外部读取以及访问
export default router