<template>
  <div>
    <img @click="Goback" class="goback" src="@/assets/icons/goback.png" />
    <div class="reg">
      <h1>PhoneGo用户注册</h1>
      <input @change="fileSelected" type="file" ref="file" style="display:none" />
      <img @click="selImgHandle" :src="imgSrc" class="avatars" alt />
      <p class="point">请选择头像</p>
      <input v-model="RegForm.username" type="text" placeholder="请输入账号" />
      <input v-model="RegForm.nickName" type="text" placeholder="请输入昵称" />
      <input v-model="RegForm.password" type="password" placeholder="请输入密码" />
      <input v-model="confirmpassword" type="password" placeholder="确认密码" />
      <button @click="Reg">注册</button>

      <a href="#" @click="tabpage">已有账号，我要登录</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { post } from "@/utils/request.js";

export default {
  name: "",
  data() {
    return {
      RegForm: {
        username: "",
        password: "",
        avatar: "",
        nickName: ""
      },
      confirmpassword: "",
      imgSrc: require("@/assets/icons/avatars.png")
    };
  },
  components: {},
  methods: {
    tabpage() {
      this.$router.push({
        name: "Login"
      });
    },
    Goback() {
      this.$router.push({
        name: "Home"
      });
    },
    Reg() {
      if (this.RegForm.username == "" || this.RegForm.password == "") {
        alert("账号密码不能为空");
      } else {
        if (this.RegForm.password == this.confirmpassword) {
          post("/api/v1/auth/reg", {
            userName: this.RegForm.username,
            password: this.RegForm.password,
            avatar: this.RegForm.avatar,
            nickName: this.RegForm.nickName
          }).then(res => {
            if (res.data.code == "success") {
              alert("用户注册成功");
              this.$router.push({
                name: "Login"
              });
            }
          });
        } else {
          alert("密码不一致");
        }
      }
    },
    selImgHandle() {
      this.$refs.file.click();
    },
    fileSelected(e) {
      const formData = new FormData();
      formData.append("file", e.target.files[0]); // 获取当前的图片信息
      post("/api/v1/common/file_upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(res => {
        this.imgSrc = `http://106.14.70.106:3019` + res.data.info;
        this.RegForm.avatar = `http://106.14.70.106:3019` + res.data.info;
      });
    }
  }
};
</script>

<style scoped>
.goback {
  width: 1.3rem;
  position: fixed;
  left: 18px;
  top: 28px;
}
.reg {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.reg h1 {
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  color: #707070;
}
.reg img {
  width: 144px;
  margin-top: 64px;
}
.reg .point {
  color: #ccc;
  font-size: 10px;
  margin-top: 0.5rem;
}
.reg input::-webkit-input-placeholder {
  color: #ccc;
  font-size: 35px;
  line-height: 50px;
}
.reg input {
  margin-top: 1.3rem;
  padding: 0.5rem 0;
  width: 90%;
  height: 2rem;
  outline: none;
  border-bottom: 0.01rem solid #ccc;
}
.reg button {
  width: 80%;
  height: 100px;
  font-size: 32px;
  border: 0;
  border-radius: 1.5rem;
  margin-top: 1.5rem;
  color: white;
  background-color: #fab3b3;
}
.reg a {
  margin-top: 70px;
  padding-left: 400px;
  font-size: 27px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
