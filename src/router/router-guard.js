import NProgress from 'nprogress';
import router from './index';
import globalStore from '@/store/modules/global.js';
import skeleton from '@/utils/skeleton';
import preloadFn from './preload/index'

const whilteRouter = ['/login', '/skeleton']

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  const store = globalStore();
  const { path } = to;
  // 设置激活菜单
  store.activePath = path;
  // 预加载
  const isWhilte = whilteRouter.includes(path)
  if (isWhilte === false) {
    if (store.preload === false) {
      console.log('预加载')
      await preloadFn();
      store.preload = true;
      next({ path })
      return;
    }
  }
  next()
});

router.afterEach(() => {
  NProgress.done();
  skeleton.hide();
});
