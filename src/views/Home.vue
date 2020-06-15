<template>
  <div class="home">
    <van-search v-model="value" placeholder="请输入搜索关键词123" input-align="center" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=821849062,3391714652&fm=26&gp=0.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=821849062,3391714652&fm=26&gp=0.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=821849062,3391714652&fm=26&gp=0.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=821849062,3391714652&fm=26&gp=0.jpg"
          alt
        />
      </van-swipe-item>
    </van-swipe>
    <div class="out" v-for="item in remai" :key="item._id">
      <router-link :to="{name:'details',query:{
          id:item._id
        }}">
        <div class="topo">
          <p>{{item.name|spliceStr}}</p>Now:
          <span class="sp">{{item.createdAt|spliceStr}}</span>
        </div>
        <img :src="item.coverImg" alt="asd" />
        <div class="qian">
          <span>￥</span>
          <p>{{item.price}}</p>元
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      value: "",
      remai: []
    };
  },
  filters: {
    spliceStr(str) {
      return str.length > 10 ? str.substr(0, 12) + "..." : str;
    }
  },
  components: {},
  methods: {
    loadData() {
      axios.get("http://106.14.70.106:3019/api/v1/products").then(res => {
        // console.log(res.data.products);
        this.remai = res.data.products;
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {}
  },
  created() {
    this.loadData();
  }
};
</script>

<style scoped>
.van-search {
  position: fixed;
  top: 0;
  width: 100%;
  /* margin-top: 3rem; */
  z-index: 5;
}
.van-swipe-item img {
  display: block;
  width: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  margin-top: 4rem;
}
.topo p {
  padding: 0.5rem 0;
}
.sp {
  color: silver;
}
.van-nav-bar {
  position: fixed;
  width: 100%;
}
html,
body {
  padding: 0;
  margin: 0;
}
.out p {
  font-size: 1rem;
}

.qian p {
  display: inline-block;
  color: red;
  font-size: 2rem;
}
.out {
  width: 45%;
  box-shadow: 1px 11px 8px #ccc;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  display: inline-block;
  padding: 0 0.5rem;
}
.qian {
  margin: 0 auto;
  width: 60%;
}
img {
  width: 100%;
}
.topo {
  width: 90%;
  margin: 0 auto;
  /* margin-top: 1rem; */
  padding: 0.5rem 0;
}
a {
  color: black;
}
</style>
