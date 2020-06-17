<template>
  <div class="refund">
    <van-nav-bar
      title="退款售后"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
