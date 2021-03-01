import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  username: "巴巴鲁",
  count: 0
}
/**
 *  同步修改，mutations里面的参数，第一个默认为state，接下来的为自定义参数
 */
const mutations = {
  namechanged(state) {
    state.username = '哈哈哈'
  },
  addcount(state, num = 1) {
    return (state.count += num)
  },
  reducecount(state, num = 1) {
    return (state.count -= num)
  }
}
/**
 * actions是异步操作
 * 这里我在两个方法中使用了两个不同的参数
 * 一个是context，它是一个和store对象具有相同对象属性的参数
 * 在第二个函数中，我是直接使用了这个对象的commit的方法。
 */
const actions = {
  changename(obj) {
    // console.log(obj)
    obj.commit('namechanged')
  },
  actionsAddCount(context, n = 0) {
    console.log(context)
    return context.commit('addcount', n)
  },
  actionsReduceCount({ commit }, n = 0) {
    return commit('reducecount', n)
  }
}
/**
 * Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）
 * 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
 * Getter 接受 state 作为其第一个参数
 */
const getters = {
  getterCount(state, n = 10) {
    console.log(state.count)
    return state.count
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})
