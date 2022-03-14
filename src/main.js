import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// tailwind.css
// import '@/assets/css/tailwind.css'

// 在vue2中使用vue3语法的API
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

// 引入mock.js
import './mock/index.js'

// 引用element-ui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引用Axios请求库
import axios from 'axios'
// axios.defaults.baseURL = baseurl
Vue.prototype.$axios = axios

//引入公共的方法 
import tools from "./utils/tools"
Vue.mixin(tools)

// 阻止启动生产消息
Vue.config.productionTip = false

// 工具类
import XEUtils from 'xe-utils'

// 新接口
import Apis from './common/api.js'
// 格式化
import Format from './common/format.js'
// 工具类
import Util from './common/utils.js'
// 全局事件总线
import bus from './common/bus.js'
// 文本验证
import Rules from './common/rules'

Vue.prototype.$store = store
Vue.prototype.$apis = Apis
Vue.prototype.$Format = Format
Vue.prototype.$XEUtils = XEUtils
Vue.prototype.$Util = Util
Vue.prototype.$bus = bus
Vue.prototype.$Rules = Rules
Vue.prototype.$window = window

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
