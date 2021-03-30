import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/navigation',
    component: home,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/home/'),
        meta:{
          keepAlive:true
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/About/'),
        meta: {
          title: '关于'
        }
      },
      {
        path: '/note',
        name: 'note',
        component: () => import('../views/note/note.vue'),
        meta: {
          title: '笔记',
          keepAlive:true
        }
      },
      {
        path: '/navigation',
        name: '导航',
        component: () => import('../views/nav/'),
        meta: {
          title: '导航'
        }
      }
    ]
  },

  {
    path: '/reg',
    name: 'reg',
    component: () => import('../views/user/reg.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/user/login.vue')
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title ? '巴巴鲁-' + to.meta.title : '巴巴鲁'
  next()
})

export default router
