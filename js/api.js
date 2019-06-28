/**
 * 请求挂载到Vue原型链中
 */
Vue.prototype.$http = axios.create({
    baseURL: '/api/',
    timeout: 50000
});