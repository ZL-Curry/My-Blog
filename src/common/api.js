import Http from './http'
// const WaUrl = window.WaUrl // "http://192.168.1.111:8082" 

const api = {
  /** ---------------------登录----------------- */
  // 登录
  // Login: p => Http.post(`${WaUrl}/login`, p),

  GetName: p => Http.get('/hotproduct')
  
  // ...NotificationApi,
};

export default api;
