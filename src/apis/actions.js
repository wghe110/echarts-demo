import router from '@/router/index';
import { ElMessage } from 'element-plus'

let timer = null;
export const login = () => {
  router.push({ path: '/login' });

  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    ElMessage.error('登录失效');
  }, 500);
};
