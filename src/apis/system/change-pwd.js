import instance from '../index'

export default {
  // 获取密码规则
  getPwdRule: () => instance.get('/api/system/cscpUserPasswordRule'),
  // 更新密码
  updatePwd: (data) => instance.put('/api/system/cscpUserPassword', data),
}