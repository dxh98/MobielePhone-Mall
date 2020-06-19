<template>
  <div class>
    <van-nav-bar title="搜索" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-search placeholder="请输入搜索关键词" input-align="center" v-model="str" v-on:input="dis" />
    <ul v-for="(item) in searchResult" :key="item.index">
      <router-link :to="{name:'Detail',query:{id:item._id}}">
        <li :style="styleObj1">{{item.name|spliceStr}}</li>
      </router-link>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    // 用户输入的筛选条件
    str: "",
    list: [],
    searchResult: [],
    styleObj1: { display: "none" }
  }),
  filters: {
    spliceStr(str) {
      return str.length > 31 ? str.substr(0, 30) + "..." : str;
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    dis() {
      if (this.str == "") {
        this.styleObj1.display = "none";
      } else {
        this.styleObj1.display = "block";
      }
      this.searchResult = [];
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].name.search(this.str) != -1) {
          this.searchResult.push(this.list[i]);
        }
      }
    }
  },
  created() {
    axios.get("http://106.14.70.106:3019/api/v1/products").then(res => {
      this.list = res.data.products;
    });
  }
};
</script>
<style scoped>
ul li {
  margin-top: 2rem;
  text-align: center;
}
a {
  color: black;
}
li {
  /* display: none; */
}
</style>