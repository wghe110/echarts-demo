import api from '@/apis/system/preload'
import { arrayToTreeFn } from './tool'
import { cloneDeep } from 'lodash'
import router from '@/router/index'
import NotFound from '@/views/system/404.vue'
import globalStore from '@/store/modules/global.js'

const modules = import.meta.glob('../../views/**/*.vue')

const initRouteFn = (item) => {
  const { title, url, component, ...others } = item
  const route = {
    path: url,
    meta: {
      name: title,
      ...others
    }
  }
  if (typeof component === 'string' && component) {
    const spath = component.replace(/\/views\/|views\//g, '../../views/')
    route.component = modules[spath] || NotFound
    route.meta.path = component
  }

  return route
}

const arrAdded = []
const loadMenus = () => {
  const store = globalStore()
  return new Promise((resolve, reject) => {
    api.getMenus().then(res => {
      store.menuList = res

      const arr = cloneDeep(res)
      const aMenus = arr.filter(item => ['menu1', 'menu2', 'menu2-sp'].includes(item.type))
      const menus = arrayToTreeFn(aMenus || [])
      store.menus = menus
      // console.log('====', menus)

      const arr2 = cloneDeep(res)
      const aMenus2 = arr2.filter(item => ['menu1', 'menu2', 'menu2-sp', 'non-menu'].includes(item.type))
      const aRoutes = aMenus2.map(item => initRouteFn(item))

      // 清空路由
      arrAdded.forEach(item => {
        item()
      })

      aRoutes.forEach(item => {
        const oRoute = router.addRoute('main', item)
        arrAdded.push(oRoute)
      })
      resolve(res)
    }, reject)
  })
}

export default loadMenus;