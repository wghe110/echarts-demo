<template>
  <header class="wrap-header">
    <Logo></Logo>
    <div class="right-item">
      <Fullscreen></Fullscreen>
      <User></User>
    </div>
  </header>
</template>

<script setup>
import Logo from './Logo.vue'
import User from './User.vue'
import Fullscreen from './Fullscreen.vue'
</script>

<style lang="scss" scoped>
.wrap-header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eceff8;
  padding: 0 24px;

  >.right-item {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}
</style>