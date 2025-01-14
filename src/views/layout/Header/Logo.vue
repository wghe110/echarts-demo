<template>
  <div class="wrap-logo">
    <img src="/logo.png" class="logo" alt="">
    <h1 class="logo-name">示例项目</h1>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.wrap-logo {
  display: flex;
  align-items: center;

  >.logo {
    width: 36px;
  }

  >.logo-name {
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    margin-left: 12px;
  }
}
</style>