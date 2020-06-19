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
      <van-dropdown-menu class="menu">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" @change="Px" />
      </van-dropdown-menu>
    </van-sticky>

    <!-- 商品 -->
    <div class="content">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
        <HAH :Pd="pd" v-show="isShow"></HAH>
        <HAH2 :Pd="pd" v-show="!isShow"></HAH2>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import HAH from "./hah";
import HAH2 from "./hah2";
import { Products } from "@/service/Goods.js";
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
      isShow: true,
      HS: true,
      allProducts: "",
      value: "",
      priceUP: "",
      pd: "",
      pd1: "",
      value1: 0,
      value2: "a",
      option1: [
        { text: "综合推荐", value: 0 },
        { text: "评论从高到低", value: 1 }
      ],
      option2: [
        { text: "价格", value: "a" },
        { text: "价格高到低", value: "b" },
        { text: "价格低到高", value: "c" }
      ]
    };
  },
  components: {
    HAH,
    HAH2
  },
  methods: {
    // 排序
    Px(value2 = "a") {
      if (value2 === "a") {
        this.pd = this.pd1;
      } else if (value2 === "b") {
        this.pd = this.pd1.sort((a, b) => {
          return b.price - a.price;
        });
      } else {
        this.pd = this.pd1.sort((a, b) => {
          return a.price - b.price;
        });
      }
    },
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.loading(this.$route.query.listId);
        this.count++;
      }, 1000);
    },
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
      const arr = this.allProducts;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].productCategory._id == Pid) {
          arrP.push(arr[i]);
        }
      }
      this.pd1 = arrP;
    }
  },
  async created() {
    const res = await Products(50, 1);
    this.allProducts = res.data.products;
    this.loading(this.$route.query.listId);
    this.Px();
  },
  watch: {}
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
/* .menu {
  background-color: #fff;
  display: flex;
  justify-content: space-;
  align-items: center;
} */
</style>