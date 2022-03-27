import Http from './http'
const api = {
  GetName: p => Http.get('/hotproduct')
};

export default api;
