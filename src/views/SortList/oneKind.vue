<template>
  <div>
    <!-- 顶部搜索框 -->
    <div class="topSearch">
      <div class="back" @click="goBack">
        <van-icon name="arrow-left" size="24" />
      </div>
      <div class="search">
        <van-search v-model="value" background="#999" placeholder="请输入搜索关键词" />
      </div>
      <div class="listStyle" @click="op">
        <van-icon :name="HS?'bars':'pause'" size="24" />
      </div>
    </div>
    <!-- 商品分页 -->
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </van-sticky>

    <!-- 商品 -->
    <div class="content">
      <HAH :Pd="pd" v-show="isShow"></HAH>
      <HAH2 :Pd="pd" v-show="!isShow"></HAH2>
    </div>
  </div>
</template>
<script>
import HAH from "./hah";
import HAH2 from "./hah2";
import { Products } from "@/service/Goods.js";
export default {
  data() {
    return {
      isShow: true,
      HS: true,
      allProducts: "",
      value: "",
      pd: "",
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ]
    };
  },
  components: {
    HAH,
    HAH2
  },
  methods: {
    //切换 列表样式
    op() {
      this.HS = !this.HS;
      this.isShow = !this.isShow;
    },
    //返回上一页
    goBack() {
      this.$router.go(-1);
    },
    // 加载同类商品
    loading(Pid) {
      let arrP = [];
      // console.log(Pid);
      const arr = this.allProducts;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].productCategory._id == Pid) {
          arrP.push(arr[i]);
        }
      }
      this.pd = arrP;
    }
  },
  async created() {
    const res = await Products(50, 1);
    this.allProducts = res.data.products;
    this.loading(this.$route.query.listId);
  }
};
</script>
<style scoped>
.topSearch {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  background-color: #999;
  margin-bottom: 1px;
}
.search {
  flex: 1;
}
</style>