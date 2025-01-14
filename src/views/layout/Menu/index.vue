<template>
  <div class="wrap-menu">
    <el-menu router default-active="/intro" style="height: 100%">
      <el-menu-item index="/intro">介绍</el-menu-item>
      <el-menu-item index="/line">折线图</el-menu-item>
      <el-menu-item index="/bar">柱状图</el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.wrap-menu {
  height: 100%;
}
</style>