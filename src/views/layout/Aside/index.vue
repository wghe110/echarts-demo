<template>
  <aside class="wrap-aside">
    <el-scrollbar height="100%">
      <el-menu :default-active="activeMenu" :default-openeds="openedArr" router class="custom-menu">
        <MenuCom :list="menus" />
      </el-menu>
    </el-scrollbar>
  </aside>
</template>

<script setup>
import MenuCom from './Menus/Menu.jsx'
import { ref } from 'vue'
import globalStore from '@/store/modules/global.js'
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

const store = globalStore()
const menus = store.menus
const openedArr = ref([])
const activeMenu = ref('')

const route = useRoute()
activeMenu.value = route.path

onBeforeRouteUpdate((to) => {
  const { path } = to
  activeMenu.value = path
})
</script>

<style lang="scss" scoped>
.wrap-aside {
  width: 100%;
  height: 100%;
  overflow: auto;
  overscroll-behavior: contain;
  background-color: #eceff8;
}
</style>