import Http from './http'
const api = {
  // Login: p => Http.post(`${WaUrl}/login`, p),
  GetName: p => Http.get('/hotproduct')
};

export default api;
