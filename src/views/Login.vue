<template>
  <div>
    <van-popup class="msg" v-model="show" overlay>{{ text }}</van-popup>
    <img @click="Goback" class="goback" src="@/assets/icons/goback.png" />
    <div class="login">
      <h1>PhoneGo用户登录</h1>
      <img class="logo" src="@/assets/icons/Logo.png" alt />
      <input v-model="LoginForm.username" type="text" class="username" placeholder="请输入账号" />
      <input v-model="LoginForm.password" type="password" class="password" placeholder="请输入密码" />
      <button @click="Login">登录</button>
      <a href="#" @click="tabpage">没有账号，我要注册</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { post } from "../utils/request.js";
import { setToken } from "../utils/auth.js";
export default {
  name: "Login",
  data() {
    return {
      LoginForm: {
        username: "",
        password: ""
      },
      show: false,
      text: ""
    };
  },
  components: {},
  methods: {
    tabpage() {
      this.$router.push({
        name: "Reg"
      });
    },
    Goback() {
      this.$router.push({
        name: "Home"
      });
    },
    Login() {
      if (this.LoginForm.username == "" || this.LoginForm.password == "") {
        alert("账号密码不能为空");
      } else {
        post("/api/v1/auth/login", {
          userName: this.LoginForm.username,
          password: this.LoginForm.password
        }).then(res => {
          if (res.data.code == "success") {
            setToken(res.data.token);
            alert("登陆成功");
            this.$router
              .push({
                name: "Home"
              })
              .catch(() => {});
          } else {
            alert(res.data.message);
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.goback {
  width: 1.3rem;
  position: fixed;
  left: 18px;
  top: 28px;
}
.login h1 {
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  color: #707070;
  padding-bottom: 15px;
}
.login .logo {
  width: 7rem;
  border-radius: 50%;
}
.login input {
  margin-top: 1.3rem;
  padding: 0.5rem 0;
  width: 90%;
  height: 2rem;
  outline: none;
  border-bottom: 0.01rem solid #ccc;
}
.login input::-webkit-input-placeholder {
  color: #ccc;
  font-size: 35px;
  line-height: 50px;
}
.login button {
  width: 80%;
  height: 100px;
  font-size: 32px;
  border: 0;
  border-radius: 1.5rem;
  margin-top: 1.5rem;
  color: white;
  background-color: #fab3b3;
  cursor: pointer;
  outline: none;
}
.login a {
  margin-top: 70px;
  padding-left: 400px;
  font-size: 27px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
