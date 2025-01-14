import instance from '@/apis/index'

export default {
  // 获取验证码
  getCode: () => instance.post('/api/catpcha/digitalCaptcha'),
  login: (data, headers) => instance.post('/api/login/login', data, {
    headers
  }),
  logout: (params) => instance.post('/api/system/logout', {}, { params })
}