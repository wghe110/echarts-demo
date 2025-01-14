<template>
  <div class="wrap-fullscreen">
    <el-tooltip content="全屏" v-if="fullscreen === false">
      <el-icon class="icon" @click="enterFn">
        <FullScreen />
      </el-icon>
    </el-tooltip>

    <el-tooltip content="退出全屏" v-else>
      <el-icon class="icon" @click="exitFn">
        <ScaleToOriginal />
      </el-icon>
    </el-tooltip>
  </div>
</template>

<script setup>
import { FullScreen, ScaleToOriginal } from '@element-plus/icons-vue'
import { onBeforeUnmount, ref } from 'vue';

const fullscreen = ref(false)

const enterFn = () => {
  document.body.requestFullscreen()
}
const exitFn = () => {
  document.exitFullscreen()
}
const fullChangeFn = () => {
  const ele = document.fullscreenElement;
  if (ele === document.body) fullscreen.value = true;
  if (ele === null) fullscreen.value = false;
}

document.addEventListener('fullscreenchange', fullChangeFn)
onBeforeUnmount(() => {
  document.removeEventListener('fullscreenchange', fullChangeFn)
})
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
  font-size: 18px;
  color: #7F8288;
  position: relative;
  top: 2px;
  user-select: none;
}
</style>