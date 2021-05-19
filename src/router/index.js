import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title ? '巴巴鲁-' + to.meta.title : '巴巴鲁'
  next()
})

export default router
