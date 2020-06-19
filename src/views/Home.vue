<template>
  <div class="home">
    <!-- 搜索框，点击跳转搜索页面 -->
    <van-sticky>
      <van-search
        shape="round"
        background="white"
        disabled
        placeholder="请输入搜索关键词"
        @click="searched"
      />
    </van-sticky>

    <!-- 轮播图 -->
    <div class="bannerImage">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="swiperimage" :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 功能分类导航 -->
    <div class="sortBar">
      <van-grid :column-num="5">
        <van-grid-item
          v-for="item in icons"
          :key="item.index"
          icon="photo-o"
          text="文字"
        >
          <img class="sortIcons" :src="item.url" />
          <h1 class="sortText">{{ item.text }}</h1>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 秒杀栏 -->
    <div class="spikeBar">
      <!-- 栏头 -->
      <div class="spikeBarTop">
        <p>优惠限时秒杀</p>
        <van-count-down class="spikemodule" :time="time">
          <template v-slot="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
        <div class="spikeicon">
          <span>更多秒杀</span>
          <img src="@/assets/icons/seckill-more-icon.png" alt />
        </div>
      </div>
      <!-- 商品卡片 -->
      <div class="spikeGoods">
        <van-grid :column-num="4">
          <van-grid-item
            :to="{
              name: 'Detail',
              query: {
                id: item._id,
              },
            }"
            v-for="item in spikeProducts[0]"
            :key="item.index"
          >
            <img class="spikeGoodsList" :src="item.coverImg" />
            <h1 class="spikeGoodsText">￥ {{ item.price }}</h1>
          </van-grid-item>
        </van-grid>
      </div>
    </div>

    <!-- 好机推荐 -->
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >为你推荐</van-divider
    >
    <div class="goodsList">
      <van-grid :column-num="2" :gutter="6">
        <van-grid-item
          :to="{
            name: 'Detail',
            query: {
              id: item._id,
            },
          }"
          v-for="item in products"
          :key="item.index"
        >
          <img :src="item.coverImg" />
          <p>{{ item.name | spliceStr }}</p>
          <h1>￥ {{ item.price }}</h1>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="bottomImage">
      <img src="@/assets/bottomimage.png" alt />
      <p></p>
    </div>
  </div>
</template>

<script>
import { Products } from "@/service/Goods.js";
export default {
  name: "Home",
  data() {
    return {
      images: [
        require("@/assets/banner1.jpg"),
        require("@/assets/banner2.jpg"),
        require("@/assets/banner3.jpg"),
        require("@/assets/banner4.jpg"),
      ],
      icons: [
        {
          url: require("@/assets/icon1.png"),
          text: "性价比",
        },
        {
          url: require("@/assets/icon2.jpg"),
          text: "性能强",
        },
        {
          url: require("@/assets/icon3.jpg"),
          text: "音质美",
        },
        {
          url: require("@/assets/icon4.jpg"),
          text: "爱拍照",
        },
        {
          url: require("@/assets/icon5.jpg"),
          text: "售后好",
        },
        {
          url: require("@/assets/icon6.jpg"),
          text: "价格低",
        },
        {
          url: require("@/assets/icon7.jpg"),
          text: "可分期",
        },
        {
          url: require("@/assets/icon8.jpg"),
          text: "领券",
        },
        {
          url: require("@/assets/icon9.jpg"),
          text: "赚钱",
        },
        {
          url: require("@/assets/icon10.jpg"),
          text: "好机推荐",
        },
      ],
      products: [],
      spikeProducts: [],
      time: 30 * 60 * 60 * 1000,
    };
  },
  filters: {
    spliceStr(str) {
      return str.length > 26 ? str.substr(0, 28) + "..." : str;
    },
  },
  components: {},
  methods: {
    loadData() {
      Products(50, 1).then((res) => {
        this.products = res.data.products;
        let a = Math.floor(Math.random() * 10) + 1;
        this.spikeProducts.push(this.products.slice(a, a + 4));
      });
    },
    searched() {
      this.$router.push({ name: "sousuo" });
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style scoped>
.home {
  background: #e6e6e6;
}
.bannerImage {
  width: 95%;
  margin: 0 auto;
  height: 268px;
  border-radius: 20px;
  background: red;
  overflow: hidden;
  margin-top: 15px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 10px;
  text-align: center;
  background-color: #39a9ed;
}
.swiperimage {
  width: 100%;
}
.sortBar {
  width: 95%;
  margin: 0 auto;
  border-radius: 30px;
  overflow: hidden;
  margin-top: 20px;
}
.sortIcons {
  width: 80px;
}
.sortText {
  margin-top: 25px;
  font-size: 12px;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 45px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.spikeBar {
  width: 95%;
  margin: 0 auto;
  background: white;
  margin-top: 20px;
  border-radius: 30px;
  overflow: hidden;
}
.spikeBarTop {
  display: flex;
  align-items: center;
  height: 70px;
}
.spikeBarTop > p {
  margin-left: 25px;
  font-size: 28px;
}
.spikemodule {
  margin-left: 20px;
}
.spikeicon {
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-left: 180px;
}
.spikeicon > span {
  font-size: 12px;
  color: red;
}
.spikeicon > img {
  width: 25px;
  margin-left: 5px;
}
.spikeGoods {
  overflow-x: auto;
}
.spikeGoodsList {
  width: 140px;
}
.spikeGoodsText {
  margin-top: 25px;
  font-size: 30px;
  color: red;
}
.goodsList img {
  width: 200px;
}
.goodsList p {
  font-size: 30px;
  margin-top: 20px;
}
.goodsList h1 {
  margin-top: 25px;
  font-size: 30px;
  color: red;
}
.bottomImage img {
  width: 100%;
  margin-top: 30px;
}
</style>
