import instance from '../index'

export default {
  // 获取菜单
  getMenus: () => instance.get('/api/system/cscpMenus'),
  // 获取菜单
  getUser: () => instance.post('/api/sys/emp/user/queryCurrentUser'),
}