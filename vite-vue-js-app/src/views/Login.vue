<template>
  <div class="login-body">
    <div class="login-container">
      <div class="head">
        <div class="name">
          <div class="title">yuzhilin-admin</div>
        </div>
      </div>
      <el-form
        label-position="top"
        :rules="rules"
        :model="ruleForm"
        ref="loginForm"
        class="login-form"
      >
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="submitForm">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import axios from "../plugins/axios.js";
import { ElMessage } from "element-plus";
export default {
  name: "Login",
  setup() {
    const loginForm = ref(null);
    const state = reactive({
      ruleForm: {
        username: "yuzhilin",
        password: "123456"
      },
      checked: true,
      rules: {
        username: [
          { required: "true", message: "账户不能为空", trigger: "blur" }
        ],
        password: [
          { required: "true", message: "密码不能为空", trigger: "blur" }
        ]
      }
    });
    const submitForm = async () => {
      console.log(state.ruleForm);
      loginForm.value.validate(valid => {
        if (valid) {
          axios
            .post("/api/user/login", {
              username: state.ruleForm.username,
              password: state.ruleForm.password
            })
            .then(res => {
              console.log(res);
              sessionStorage.setItem("token", res.data);
              ElMessage.success({
                message: "登陆成功",
                type: "success"
              });
              window.location.href = "/";
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    const logout = () => {
      axios.post("/api/user/logout").then(res => {
        if (res.code === 200) {
          console.log("logout");
          ElMessage.success({
            message: "已退出登陆",
            type: "success"
          });
        }
      });
    };
    return {
      ...toRefs(state),
      loginForm,
      submitForm,
      logout
    };
  }
};
</script>

<style scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background-color: #fff; */
  background-image: linear-gradient(25deg, #077f7c, #3aa693, #5ecfaa, #7ffac2);
}
.login-container {
  width: 420px;
  height: 400px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
}
.head img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.head .title {
  font-size: 28px;
  color: #1baeae;
  font-weight: bold;
}
.head .tips {
  font-size: 12px;
  color: #999;
}
.login-form {
  width: 70%;
  margin: 0 auto;
}
</style>
<style>
.el-form--label-top .el-form-item__label {
  padding: 0;
}
.login-form .el-form-item {
  margin-bottom: 12px;
}
</style>