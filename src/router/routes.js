import home from '../views/index.vue'
import routerMap from './routerMap'
const routes = [
  {
    path: '/',
    redirect:'/navigation',
    name: 'home',
    component: home,
    children: [...routerMap]
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
export default routes