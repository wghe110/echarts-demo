<template>
  <div class="wrap-user">
    <el-dropdown @command="commandFn">
      <div class="content">
        <img src="/user.png" alt="user">
        <span>{{ uname }}</span>
        <el-icon class="el-icon--right" color="#7F8288">
          <ArrowDown />
        </el-icon>
      </div>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="change-info">个人信息</el-dropdown-item>
          <el-dropdown-item command="change-pwd">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>

  <DialogPwd ref="pwdRef" />
</template>

<script setup>
import api from '@/apis/system/login'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router';
import DialogPwd from './ChangePwd/index.vue'
import { ref } from 'vue'
import globalStore from '@/store/modules/global.js';
import { ArrowDown } from '@element-plus/icons-vue'

const router = useRouter()
const uname = localStorage.getItem('userName') || '--'
const pwdRef = ref()

const logoutFn = () => {
  const params = {
    access_token: localStorage.getItem('token')
  }

  api.logout(params).then(() => {
    ElNotification({
      title: '退出成功',
      type: 'success',
    })

    localStorage.clear()

    const store = globalStore()
    store.inited = false

    router.push('/login')
  })
}

const commandFn = (val) => {
  switch (val) {
    case 'logout':
      logoutFn()
      break;
    case 'change-pwd':
      pwdRef.value.visible = true
      break;
    default:
      break;
  }
}
</script>

<style lang="scss" scoped>
.wrap-user {
  .content {
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;

    >img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      margin-right: 4px;
    }

    >span {
      font-size: 14px;
      font-family: PingFang SC, PingFang SC;
      font-weight: 400;
      color: #404548;
      line-height: 14px;
      margin-right: 4px;
    }
  }
}
</style>