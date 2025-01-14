import axios from 'axios'
import { login } from './actions.js'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  timeout: 60000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  config.headers.Authorization = localStorage.getItem('token')
  return config;
});

// 响应拦截器
const specialApis = ['/api/catpcha/digitalCaptcha']; // 特殊请求，返回字段不规范
instance.interceptors.response.use((response) => {
  const { status, data } = response
  if (status === 200 || status === 201) {
    const isSpecial = specialApis.some(item => response.config.url.includes(item))
    if (isSpecial) {
      return Promise.resolve(data)
    }

    if (response.config.download) {
      //下载文件
      return Promise.resolve(data)
    }

    if (data.code === 0) {
      return Promise.resolve(data.data)
    } else {
      ElMessage.error(data.msg || '请求失败')
      Promise.reject(data);
    }
  }

  return Promise.reject(response);
}, (error) => {
  const { response = {} } = error;

  const isLogin = location.hash === '#/login' || location.hash === '#/target'
  if (response.status === 401) {
    if (isLogin) return Promise.reject(response);

    return login()
  }
  if (error.message.indexOf('timeout') != -1) {
    ElMessage.error('请求超时')
    return Promise.reject(response);
  }
  if (!isLogin) {
    ElMessage.error(response.data.message || '请求错误')
  }
  return Promise.reject(response);
})

export default instance;