<template>
  <div class="wrap">
    <aside class="menus" v-if="showMenu">
      <Menu></Menu>
    </aside>

    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script setup>
import Menu from './Menu/index.vue'
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const showMenu = ref(false)
const route = useRoute();
const { query: { hideMenu } } = route;
if (!hideMenu) showMenu.value = true;
</script>

<style lang="scss" scoped>
.wrap {
  height: 100vh;
  display: flex;

  >.menus {
    width: 320px;
  }

  >.content {
    flex: 1;
    min-width: 800px;
  }
}
</style>