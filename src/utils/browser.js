// 低端浏览器提示

import Bowser from 'bowser';
import { ElNotification } from 'element-plus';

const browser = Bowser.getParser(window.navigator.userAgent);
const isValidBrowser = browser.satisfies({
  chrome: '>101.0.4951.54',
  firefox: '>110',
});

if (!isValidBrowser) {
  ElNotification({
    title: '警告',
    message: '请使用最新的浏览器进行访问，推荐使用最新版的chrome浏览器',
    type: 'warning',
    duration: 0,
  });
}
