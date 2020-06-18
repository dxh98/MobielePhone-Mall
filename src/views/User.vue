<template>
  <div class="user">
    <!-- 用户信息展示 -->
    <div class="userInfo">
      <img :src="avatar" alt />
      <a href="#">
        <h1>{{ username }}</h1>
        <p>昵称:{{ nickName }}</p>
      </a>
    </div>
    <!-- 消息页面 -->
    <router-link :to="{ name: 'News' }">
      <van-icon class="icon" name="chat-o" dot />
    </router-link>
    <!-- 会员中心卡片 -->
    <div class="memberCard">
      <ul>
        <li>
          <h1>
            <p>会员中心</p>
            <p>全品类95折</p>
          </h1>
          <img src="@/assets/icons/member.png" alt />
        </li>
        <li>
          <h1>
            <p>积分中心</p>
            <p>做任务赚积分</p>
          </h1>
          <img src="@/assets/icons/integral.png" alt />
        </li>
      </ul>
    </div>
    <!-- 我的订单 -->
    <div class="order">
      <div class="ordertop">
        <h1>我的订单</h1>
        <router-link :to="{ name: 'Order', query: { activeId: 0 } }">
          <p>查看全部订单 ></p>
        </router-link>
      </div>
      <!-- 订单状态卡片 -->
      <div class="ordercard">
        <van-grid :column-num="5" :gutter="12">
          <router-link :to="{ name: 'Order', query: { activeId: 1 } }">
            <van-grid-item
              icon="https://ae01.alicdn.com/kf/H81280b4d31014e7c82e138cc64be9100p.jpg"
              text="待付款"
            />
          </router-link>
          <router-link :to="{ name: 'Order', query: { activeId: 2 } }">
            <van-grid-item
              icon="https://ae01.alicdn.com/kf/Ha9a453a8b3cb42e88c6871cd609b23c7k.jpg"
              text="代发货"
            />
          </router-link>
          <router-link :to="{ name: 'Order', query: { activeId: 3 } }">
            <van-grid-item
              icon="https://ae01.alicdn.com/kf/Hc980e8402983460dafd7453b90584259p.jpg"
              text="待收货"
            />
          </router-link>
          <router-link :to="{ name: 'Order', query: { activeId: 4 } }">
            <van-grid-item
              icon="https://ae01.alicdn.com/kf/Hbd18f704264d4dd89760b59f366dfac3u.jpg"
              text="待评价"
            />
          </router-link>
          <router-link :to="{ name: 'Refund' }">
            <van-grid-item
              icon="https://ae01.alicdn.com/kf/H5d64c899ec484bbd9eec51e4e47431f3J.jpg"
              text="退款/售后"
            />
          </router-link>
        </van-grid>
      </div>
    </div>
    <div class="add">
      <!-- 下方操作栏 -->
      <ul>
        <router-link class="nav1" :to="{ name: 'Address' }">
          <li>
            <p>地址管理</p>
            <img src="@/assets/icons/right.png" alt />
          </li>
        </router-link>
        <router-link class="nav2" :to="{ name: 'Collect' }">
          <li>
            <p>我的收藏</p>
            <img src="@/assets/icons/right.png" alt />
          </li>
        </router-link>
        <router-link class="nav3" :to="{ name: 'Help' }">
          <li>
            <p>帮助中心</p>
            <img src="@/assets/icons/right.png" alt />
          </li>
        </router-link>
        <router-link class="nav4" :to="{ name: 'Feedback' }">
          <li>
            <p>意见反馈</p>
            <img src="@/assets/icons/right.png" alt />
          </li>
        </router-link>
        <router-link class="nav5" :to="{ name: 'About' }">
          <li>
            <p>关于我们</p>
            <img src="@/assets/icons/right.png" alt />
          </li>
        </router-link>
      </ul>
    </div>
    <!-- 退出登录按钮 -->
    <van-button @click="logOut" round type="info" size="large" class="logOutBtn">退出登录</van-button>
  </div>
</template>

<script type="text/ecmascript-6">
import { get, post } from "../utils/request.js";
import { getToken, delToken } from "../utils/auth.js";
export default {
  name: "User",
  data() {
    return {
      nickName: "",
      avatar: "",
      username: ""
    };
  },
  components: {},
  methods: {
    logOut() {
      if (confirm("确认退出登录吗？")) {
        delToken();
        this.$router.push("/");
      } else {
      }
    },
    User() {
      get("/api/v1/users/info", {
        headers: {
          authorization: "beaer" + getToken()
        }
      }).then(res => {
        //  console.log(res)
        this.nickName = res.data.nickName;
        this.avatar = res.data.avatar;
        this.username = res.data.userName;
      });
    }
  },
  created() {
    this.User();
  }
};
</script>

<style scoped>
.user {
  background: #e6e6e6;
}
.userInfo {
  width: 100%;
  height: 300px;
  background: #f04a43;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.userInfo > img {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin: 0 30px 20px 40px;
}
.userInfo > a > h1 {
  color: black;
  font-weight: bolder;
  font-size: 40px;
  margin-bottom: 15px;
}
.userInfo > a > p {
  color: #fabbb7;
  font-size: 25px;
}
.icon {
  position: fixed;
  right: 40px;
  top: 40px;
}
.memberCard {
  width: 700px;
  height: 160px;
  margin: -50px auto;
  background: white;
  border-radius: 30px;
  overflow: hidden;
}
.memberCard > ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.memberCard > ul > li {
  display: flex;
  height: 70%;
  align-items: center;
  width: 350px;
}
.memberCard > ul > li:nth-child(1) {
  border-right: 1px solid #ccc;
}
.memberCard > ul > li > h1 {
  margin: 0 30px;
}
.memberCard > ul > li > h1 > p:nth-child(1) {
  font-weight: bolder;
}
.memberCard > ul > li > h1 > p:nth-child(2) {
  font-size: 26px;
  color: #d81e06;
  margin-top: 15px;
}
.order {
  width: 700px;
  margin: 0 auto;
  background: white;
  overflow: hidden;
  margin-top: 80px;
  border-radius: 30px;
}
.ordertop {
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 90px;
  border-bottom: 1px solid #ccc;
}
.ordertop > h1 {
  font-weight: bolder;
  margin-left: 30px;
  font-size: 30px;
}
.ordertop p {
  font-size: 24px;
  margin-right: 15px;
}
.add {
  width: 700px;
  background: white;
  margin: 30px auto;
  border-radius: 30px;
}
.add > ul {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.add > ul li {
  width: 90%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
}
.add > ul li img {
  width: 32px;
  height: 32px;
}
.add > ul li p {
  color: black;
}
.logOutBtn {
  width: 80%;
  height: 90px;
  margin-left: 70px;
  background: rgba(255, 0, 0, 0.5);
  border: 0;
}
/* .top {
  width: 100%;
  height: 20%;
  background-color: #f51609;
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
} */
/* .user img {
  width: 6rem;
  float: left;
  border-radius: 14%;
  margin-left: 0.4rem;
}
.user p {
  margin-left: 1rem;
}
.user .icon {
  position: absolute;
  width: 1.6rem;
  right: 4%;
  top: 10%;
} */
/* .bottom .dingdan {
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
} */
/* a {
  justify-content: space-between;
  color: black;
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
} */
/* .nav1 p,
.nav2 p,
.nav3 p,
.nav4 p,
.nav5 p {
  margin: 0 1px;
  margin: 0px 12px;
} */
/* .selbtn {
  width: 80%;
  height: 4%;
  position: relative;
  margin: 0 10%;
  top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f51609;
} */
</style>