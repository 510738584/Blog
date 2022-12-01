import Vue from 'vue'
import VueRouter from 'vue-router'


import BlogContent from '@/components/BlogContent'
import BlogAdd from '@/components/BlogAdd'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/blog'
  },
  {
    name:'blog',
    path:'/blog',
    component: BlogContent,
  },
  {
    name:'add',
    path:'/add',
    component:BlogAdd
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'myActive'
})

export default router
