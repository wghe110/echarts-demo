import Dialog from './Dialog/index.vue'

const customPlus = {
  install(Vue, options) {
    // 组件
    Vue.component('c-dialog', Dialog);
  },
};

export default customPlus;
