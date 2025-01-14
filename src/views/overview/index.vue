<template>
  <div class="wrap" ref="refWrap">
    <el-button @click="toFullFn">{{ statusWrap ? '退出全屏' : '全屏' }}</el-button>

    <div class="child one" ref="refOne">
      <el-button @click="toFullOneFn">{{ statusOne ? '退出全屏' : '全屏' }}</el-button>
    </div>

    <div class="child two" ref="refTwo">
      <el-button @click="toFullTwoFn">全屏</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const refWrap = ref()
const refOne = ref()
const refTwo = ref()

const statusWrap = ref(false)
const statusOne = ref(false)
const statusTwo = ref(false)

const toFullFn = () => {
  if (!statusWrap.value) {
    refWrap.value.requestFullscreen().then(() => {
      statusWrap.value = true
    })
  } else {
    document.exitFullscreen().then(() => {
      statusWrap.value = false
    })
  }

}

const toFullOneFn = () => {
  if (statusOne.value) {
    document.exitFullscreen().then(() => {
      statusOne.value = false
    })
  } else {
    refOne.value.requestFullscreen().then(() => {
      statusOne.value = true
    })
  }

}

const toFullTwoFn = () => {
  if (statusTwo.value) {
    document.exitFullscreen().then(() => {
      statusTwo.value = false
    })
  } else {
    refTwo.value.requestFullscreen().then(() => {
      statusTwo.value = true
    })
  }
}

document.addEventListener('fullscreenchange', (e) => {
  e.stopPropagation();
  console.log('字元素 changed')
})
</script>

<style lang="scss">
.wrap {
  height: 100vh;
  background-color: yellow;
}

.child {
  width: 300px;
  height: 300px;
  background: red;

  &:nth-child(2) {
    background-color: blue;
  }
}
</style>