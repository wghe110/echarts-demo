<template>
  <c-dialog v-model="visible" title="修改密码" size="mini">
    <el-form :model="formData" :rules="rules" ref="formRef" label-width="80px">
      <el-form-item label="原密码" prop="oldPassword">
        <el-input type="password" v-model="formData.oldPassword" style="width: 100%" placeholder="请输入旧密码" show-password
          clearable></el-input>
      </el-form-item>

      <el-form-item label="新密码" prop="newPassword">
        <el-input type="password" v-model="formData.newPassword" placeholder="请输入新密码" show-password style="width: 100%"
          clearable maxlength="20"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="sureNewPassword">
        <el-input type="password" v-model="formData.sureNewPassword" placeholder="请再次输入新密码" show-password
          style="width: 100%" clearable></el-input>
      </el-form-item>
    </el-form>

    <el-alert title="密码长度大于8小于20;需要包括小写字母、大写字母、数字、特殊字符.不能包含用户名" :closable="false" type="warning" show-icon
      style="position: relative; top: 10px" />

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" :disabled="loading" :loading="loading" @click="submitFn">确 定</el-button>
      </span>
    </template>
  </c-dialog>
</template>

<script setup>
import { ref, reactive, toRaw, watch, nextTick } from 'vue';
import getRuleFn from './rule'
import { encryptPassword } from "@/utils/tool";
import api from '@/apis/system/change-pwd'
import { ElMessage } from 'element-plus';

const visible = ref(false)
const formData = reactive({})
const rules = getRuleFn(formData)
const loading = ref(false)
const formRef = ref()

const submitFn = () => {
  formRef.value.validate((valid) => {
    if (valid) querySaveFn()
  })
}
const querySaveFn = () => {
  const msg = ElMessage({
    message: '修改密码中...',
    duration: 0
  })

  const params = getParamsFn()
  api.updatePwd(params).then(res => {
    const { token, msg } = res
    if (token) {
      ElMessage.success('修改密码成功')
      visible.value = false
    } else {
      ElMessage.error(msg || '修改密码失败')
    }
  }).finally(() => {
    msg.close()
  })
}
const getParamsFn = () => {
  const { oldPassword, newPassword } = toRaw(formData)
  const params = {
    oldPassword: encryptPassword(oldPassword),
    newPassword: encryptPassword(newPassword),
    tenantAccount: localStorage.getItem('tenantAccount'),
    userName: localStorage.getItem('userName')
  }

  return params
}
const resetFn = () => {
  formRef.value.resetFields()
}

watch(() => visible.value, (val) => {
  if (val) nextTick(resetFn)
})

defineExpose({
  visible,
  resetFn
})
</script>

<style></style>