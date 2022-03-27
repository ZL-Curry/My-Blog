import home from '../views/index.vue'
import routerMap from './routerMap'
const routes = [
  {
    path: '/',
    redirect:'/',
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
]
export default routes