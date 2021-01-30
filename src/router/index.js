import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // redirect:'/login',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('../views/reg.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/note',
    name: 'note',
    component: () => import('../views/note.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/blog.vue')
  },
  {
    path: '/rich',
    name: 'rich',
    component: () => import('../views/richtext.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
