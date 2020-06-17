<template>
  <div class="order">
    <van-nav-bar
      title="我的订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <br>
    <van-tabs v-model="active" sticky>
      <van-tab title="全部">内容 1</van-tab>
      <van-tab title="待付款">内容 2</van-tab>
      <van-tab title="代发货">内容 3</van-tab>
      <van-tab title="待收货">内容 4</van-tab>
      <van-tab title="待评价">内容 5</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
    data() {
    return {
      active: this.$route.query.activeId,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<stylescoped>
van-tab{
  width:20%;
}
</style>