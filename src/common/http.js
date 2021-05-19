import axios from 'axios'
// import XEUtils from 'xe-utils'
import Vue from 'vue'

// 添加请求拦截器，在发送请求之前做些什么(**具体查看axios文档**)--------------------------------------------
axios.interceptors.request.use(function (config) {
  console.log("请求：",config);
  // 显示loading
  return config
}, function (error) {
  // 请求错误时弹框提示，或做些其他事
  return Promise.reject(error)
})

// 添加响应拦截器(**具体查看axios文档**)----------------------------------------------------------------
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
  // 如果只需要返回体中数据，则如下，如果需要全部，则 return response 即可
  return response.data
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 封装数据返回失败提示函数---------------------------------------------------------------------------
function errorState (response) {
  // 隐藏loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    // 如果不需要除了data之外的数据，可以直接 return response.data
    return response
  } else {
    // alert('数据获取错误')
  }
}

// 封装数据返回成功提示函数---------------------------------------------------------------------------
function successState (res) {
  console.log("响应数据：",res);
  // 隐藏loading
  // 统一判断后端返回的错误码(错误码与后台协商而定)
  if (res.error === 0) {
    return res
  }else{
    console.error(res)
  }
}
// Cookies.get('baseURL') ? Cookies.get('baseURL') : window.baseurl
// 封装axios--------------------------------------------------------------------------------------
function apiAxios (method, url, params) {
  console.log(url);
  // 从state中取出token
  console.log("token:", Vue.prototype.$store.state.token)
  let headers = {}
  if(Vue.prototype.$store.state.token){
    headers.token = Vue.prototype.$store.state.token
    if (params) {
      params['token'] = Vue.prototype.$store.state.token
    } else {
      params = { token: Vue.prototype.$store.state.token }
    }
  } else {
    console.log('token为空')
  }

  if(url.indexOf("http") == -1){
    url = window.baseurl + url;
  }
  // eslint-disable-next-line prefer-const
  let httpDefault = {
    method: method,
    url: url,
    // `params` 是即将与请求一起发送的 URL 参数
    // `data` 是作为请求主体被发送的数据
    params: method === 'GET' ? params : null,
    data: method === 'POST' || method === 'PUT' || method === 'DELETE' ? params : null,
    headers: headers,
    timeout: 30000
  }
  
  
  // 注意**Promise**使用(Promise首字母大写)
  return new Promise((resolve, reject) => {
    axios(httpDefault).then((res) => {
      successState(res)
      resolve(res)
    }).catch((response) => {
      errorState(response)
      reject(response)
    })
  })
}
  
// 输出函数getAxios、postAxios、putAxios、delectAxios，供其他文件调用-----------------------------
// Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
export default {
  get: (url, params) => apiAxios('GET', url, params),
  post: (url, params) => apiAxios('POST', url, params),
  put: (url, params) => apiAxios('PUT', url, params),
  delete: (url, params) => apiAxios('DELETE', url, params)
}