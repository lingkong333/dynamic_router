import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 动态加载
import { staticRouter } from '../utils/data'//引入静态路由
const routes = staticRouter //静态路由保存

// 写死的方案
/* const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // 页面标题
    meta:{title:'hhh'}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path:'/one',
    name:'One',
    component:()=>import('../views/One.vue')
  },
  {
    path:'/two',
    name:'Two',
    component:()=>import('../views/Two.vue')
  },
  {
    path:'/three',
    name:'Three',
    component:()=>import('../views/Three.vue')
  },
  {
    path:'*',
    // redirect: '/',
    name:'404',
    // meta:{title:'页面错误'},
    component:()=>import('../views/404.vue')
  }
] */

const router = new VueRouter({
  routes
})

export default router
