import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/navigation',
    name: 'home',
    component: home,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/'),
        meta:{
          keepAlive:true
        }
      },
      {
        path: 'text2',
        name: 'home',
        component: () => import('../views/ht/text2'),
        meta:{
          keepAlive:true
        }
      },
      {
        path: 'noteDetail',
        name: 'noteDetail',
        component: () => import('@/components/icc_note_detail.vue'),
        meta:{
          keepAlive:true
        }
      },
      {
        path: '/navigation',
        name: 'navigation',
        component: () => import('../views/nav/'),
        meta: {
          title: 'navigation'
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
        path: '/infinity',
        name: 'infinty',
        component: () => import('../views/infinity/infinity.vue'),
        meta: {
          title: 'infinty',
          keepAlive:true
        }
      },
      {
        path: '/beyond',
        name: 'beyond',
        component: () => import('../views/beyond/beyond.vue'),
        meta: {
          title: 'beyond',
          keepAlive:true
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/About/'),
        meta: {
          title: 'about'
        }
      },
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
  // {
  //   path: '/richtext',
  //   name: 'richtext',
  //   component: () => import('../views/richtext.vue')
  // },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title ? '巴巴鲁-' + to.meta.title : '巴巴鲁'
  next()
})

export default router
