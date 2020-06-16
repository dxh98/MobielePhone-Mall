<template>
  <div class="sort">
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    <div class="conter">
      <Sd></Sd>
      <div class="list">
        <router-view></router-view>
        <Products></Products>
      </div>
    </div>
  </div>
</template>

<script>
// import Products from "../views/products";
import Sd from "../components/list/Sidebar";
export default {
  name: "Sort",
  data() {
    return {
      value: ""
    };
  },
  components: {
    Sd
    // Products
  }
};
</script>

<style scoped>
.sort {
  background-color: rgb(246, 246, 246);
}
.conter {
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  /* width: 100%;
  height: 100%; */
}
.list {
  /* flex: 1 */
  /* background-color: red; */
  width: 100%;
  /* height: 100%; */
  overflow: auto;
}
</style>
