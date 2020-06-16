<template>
  <div>
    <h1>个人中心页面</h1>
    <div class="top">
      <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <h3>用户名字</h3>
    </div>
    <div class="center">
      <van-cell title="收货地址" is-link icon="location-o" />
      <van-cell title="关于" is-link />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "User",
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style scoped>
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #ccc;
  padding: 1rem 0;
  border-bottom: 0.01rem solid #999;
  box-shadow: 0px 6px 7px #333;
  margin: 0 1rem;
}
.center {
  margin: 1rem 0;
  /* background-color: #ccc; */
}
</style>
