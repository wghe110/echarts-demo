<template>
  <div class="wrap-layout">
    <header class="header">
      <HeaderCom></HeaderCom>
    </header>
    <aside class="aside">
      <AsideCom></AsideCom>
    </aside>

    <section class="content">
      <router-view v-slot="{ Component }">
        <transition name="router">
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
  </div>
</template>

<script setup>
import HeaderCom from './Header/index.vue'
import AsideCom from './Aside/index.vue'
</script>

<style lang="scss" scope>
$aside_width: 224px;
$header_height: 64px;

.wrap-layout {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;

  >.header {
    height: $header_height;
    width: 100vw;
  }

  >.aside {
    width: $aside_width;
    height: calc(100vh - $header_height);
  }

  >.content {
    height: calc(100vh - $header_height);
    width: calc(100vw - $aside_width);
    background-color: #f6f7f9;
    overflow: auto;
    position: relative;
    overscroll-behavior: contain;
  }
}
</style>