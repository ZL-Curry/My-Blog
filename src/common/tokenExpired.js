/**
 * token定时刷新程序
 * 依赖XEUtils库，api.js
 */
/* eslint-disable */
// import XEUtils from 'xe-utils'
import apis from './api.js'
import Vue from 'vue'

// 定时任务
let interval;

// 获取刷新状态
const getInterval = async () => {
  return interval;
}

// 立即刷新token
const refreshToken = async () => {
  console.log('重新获取Token')
  const result = await apis.TokenRefresh()
  console.log("刷新TOKEN", result)
  if (result.error == 0) {
    // 存入cookies
    // XEUtils.cookie('token', result.token)
    Vue.prototype.$store.commit('setToken', result.data)
    return result.data;
  } else {
    return false;
  }
}

// 开启刷新
const start = async () => {
  console.log('开启Token刷新');
  // 进入刷新令牌
  // await refreshToken();
  // 定时轮询刷新token， 1分钟检测一次
  interval = setInterval(async () => {
    let second = (new Date().getTime() - Vue.prototype.$store.state.tokenTime) / 1000
    console.log("定时刷新toekn,token有效期:", second + '秒')
    if (second > 1800) {
      Vue.prototype.$alert('登录已过期，请重新登录', '提示', {
        confirmButtonText: '确定',
        callback: () => {
          Vue.prototype.$router.replace('/')
        }
      });
    } else if (second > 1500) {
      await refreshToken()
      console.log("已经刷新了token")
    } else {
      console.log("无需刷新token")
    }
  }, 60000);
}

// 关闭刷新
const stop = async () => {
  if (interval) {
    clearInterval(interval);
    interval = null
  }
}

export default {
  start,
  stop,
  refreshToken,
  getInterval
}
