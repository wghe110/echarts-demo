
export default (formData) => {
  var validatePass = (_, value, callback) => {
    const userName = localStorage.getItem("userName");

    if (value.includes(userName)) {
      callback(new Error('密码不能包含用户名'))
      return;
    }
    callback()
  };
  var validSameFn = (_, value, callback) => {
    if (formData.newPassword !== value) {
      callback(new Error('与新密码不一致'))
      return;
    }
    callback()
  };

  return {
    oldPassword: [
      { required: true, message: '请输入旧密码', trigger: 'blur' }
    ],
    newPassword: [
      { required: true, message: '请输入新密码', trigger: 'blur' },
      {
        pattern: /^[\S]{8,20}$/, message: "密码长度大于8小于20", trigger: "blur"
      },
      {
        pattern:
          /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[*?!&￥$%^#,./@";:><\[\]}{\-=+_\\|》《。，、？’‘“”~ `]).*$/,
        message: "要包括小写字母、大写字母、数字、特殊字符",
        trigger: "blur",
      },
      { validator: validatePass, trigger: "blur" },
    ],
    sureNewPassword: [
      { required: true, message: '请再次输入新密码', trigger: 'blur' },
      { validator: validSameFn, trigger: "blur" },
    ],
  }
}