<template>
  <div>
    <div class="top"></div>
    <div class="bottom">
      <div class="user">
        <img :src="avatar" alt="" />
        <a href="#"
          ><p>{{ nickName }}</p>
          <van-icon name="edit"
        /></a>
        <a href="#">
          <van-icon class="icon" name="chat-o" dot />
        </a>
      </div>

      <div class="dingdan">
        <p>我的订单</p>
        <p>查看全部订单></p>
      </div>

      <div class="ddnav">
        <van-grid :column-num="5" style="justify-content: space-between;">
          <router-link :to="{ name: 'Login' }"
            ><van-grid-item icon="paid" text="待付款"
          /></router-link>
          <router-link :to="{ name: 'Login' }"
            ><van-grid-item icon="tosend" text="代发货"
          /></router-link>
          <router-link :to="{ name: 'Login' }"
            ><van-grid-item icon="logistics" text="待收货"
          /></router-link>
          <router-link :to="{ name: 'Login' }"
            ><van-grid-item icon="records" text="待评价"
          /></router-link>
          <router-link :to="{ name: 'Home' }"
            ><van-grid-item icon="service" text="退款/售后"
          /></router-link>
        </van-grid>
      </div>
      <div class="nav1">
        <p>地址管理</p>
        <p>></p>
      </div>
      <div class="nav2">
        <p>我的收藏</p>
        <p>></p>
      </div>
      <div class="nav3">
        <p>帮助中心</p>
        <p>></p>
      </div>
      <div class="nav4">
        <p>意见反馈</p>
        <p>></p>
      </div>
      <div class="nav5">
        <p>关于我们</p>
        <p>></p>
      </div>
      <van-button @click="logOut" round type="info" size="large" class="selbtn"
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { get, post } from "../utils/request.js";
import { getToken,delToken } from "../utils/auth.js";
export default {
  name: "User",
  data() {
    return {
      nickName:'',
      avatar:''
    };
  },
  components: {},
  methods: {
   logOut(){
     delToken()
     this.$router.push('/')
   },
   User(){
     get("/api/v1/users/info",{
       headers:{
         authorization:'beaer'+ getToken(),
       }
     }).then((res)=>{
      //  console.log(res)
       this.nickName = res.data.nickName
       this.avatar = res.data.avatar

     })
    //  .then((res)=>console.log(data))
    //  .then((res)=>console.log(err))
   }
  },
  created(){
    this.User()
  }
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 20%;
  background-color: rgba(93, 175, 225, 100);
}
.bottom {
  width: 100%;
  height: 80%;
  background-color: rgb(243, 243, 243);
}
.bottom .user {
  width: 90%;
  height: 23%;
  background-color: rgba(255, 255, 255, 100);
  position: relative;
  top: -12%;
  left: 5%;
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.user img {
  width: 6rem;
  float: left;
  border-radius: 14%;
  margin-left: 0.4rem;
}
.user p {
  float: left;
  margin-left: 1rem;
  margin-bottom: 4rem;
}
.user .icon {
  position: absolute;
  width: 1.6rem;
  right: 4%;
  top: 10%;
}

.bottom .dingdan {
  width: 90%;
  height: 6%;
  background-color: rgba(255, 255, 255, 100);
  position: relative;
  top: -10%;
  left: 5%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.1rem;
}
.dingdan p {
  margin: 0 1px;
  margin: 0px 12px;
}

.ddnav {
  width: 90%;
  height: 6%;
  position: relative;
  top: -9%;
  left: 5%;
}

a {
  justify-content: space-between;
}

.nav1,
.nav2,
.nav3,
.nav4,
.nav5 {
  width: 90%;
  height: 6%;
  background-color: rgba(255, 255, 255, 100);
  position: relative;
  top: 4%;
  left: 5%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.1rem;
  margin-top: 0.2rem;
}

.nav1 p,
.nav2 p,
.nav3 p,
.nav4 p,
.nav5 p {
  margin: 0 1px;
  margin: 0px 12px;
}

.selbtn {
  width: 80%;
  height: 4%;
  position: relative;
  margin: 0 10%;
  top: 3rem;
}
</style>
