<template>
  <div class="help">
    <van-nav-bar
      title="帮助中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <p>关于介绍</p>
    <p>客服:XXX-XXX-XXX</p>
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
