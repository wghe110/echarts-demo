import { defineStore } from 'pinia';

const globalStore = defineStore('global', {
  state() {
    return {
      activePath: '',
      menuList: [],
      menus: [],

      preload: false,
    };
  },
});

export default globalStore;
