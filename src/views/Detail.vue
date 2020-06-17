<template>
  <div class="detail">
    <!-- 返回图标 -->
    <div @click="goBack" class="goback">
      <img src="@/assets/icons/back.png" alt />
    </div>
    <!-- 主图 -->
    <img :src="this.product.coverImg" alt />
    <!-- 价格 -->
    <p>
      ￥
      <span>{{ this.product.price }}</span>.00
    </p>
    <!-- 图标和商品名 -->
    <h1>
      <img
        src="https://img12.360buyimg.com/img/s68x28_jfs/t1/124423/31/2193/1569/5ec39d2cE97103d62/fa0f0561379c2462.png"
        alt
      />
      <img
        src="https://img11.360buyimg.com/jdphoto/s48x28_jfs/t1/69566/30/15738/1062/5dd3abb6Ea8fd7aa3/57c6a72435905414.png"
        alt
      />
      {{ this.product.name }}
    </h1>
    <!-- 放心购 -->
    <h1>
      <img src="@/assets/icons/Buywithconfidence.png" alt />
      <span>免举证退换货，原厂维修</span>
    </h1>
    <!-- 底部操作栏 -->
    <van-goods-action class="operationBar">
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button color="#7232dd" type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from "vant";
import { GetOne } from "@/service/Goods.js";
export default {
  name: "",
  data() {
    return {
      product: {}
    };
  },
  components: {},
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  async created() {
    // console.log(this.$route.params.id)
    const res = await GetOne(this.$route.query.id);
    this.product = res.data;
  }
};
</script>

<style scoped>
.detail {
  background: #e6e6e6;
}
/* .goback > img {
  width: 40px;
} */
.detail .goback {
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background: rgba(5, 5, 5, 0.5);
  position: fixed;
  left: 30px;
  top: 30px;
}
.detail img {
  width: 100%;
  display: block;
}
.detail > p {
  width: 100%;
  padding: 20px 0 20px 20px;
  background: white;
  color: red;
  font-weight: bold;
}
.detail > p > span {
  font-weight: bold;
  font-size: 50px;
}
.detail > h1:nth-child(4) {
  width: 690px;
  background: white;
  padding: 30px 30px;
  font-weight: bold;
  line-height: 45px;
}
.detail > h1:nth-child(4) > img {
  display: inline-block;
  width: 50px;
  height: 30px;
}
.detail > h1:nth-child(4) > img:nth-child(1) {
  margin: 0 10px 0 10px;
}
.detail > h1:nth-child(4) > img:nth-child(2) {
  margin-right: 10px;
}
.detail > h1:nth-child(5) {
  width: 100%;
  background: #fbf0fd;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  line-height: 70px;
  color: red;
  font-size: 25px;
  overflow: hidden;
  height: 70px;
  display: flex;
}
.detail > h1:nth-child(5) > img {
  width: 220px;
  height: 30px;
  margin: 8px 20px 0 20px;
  padding-top: 10px;
}
</style>
