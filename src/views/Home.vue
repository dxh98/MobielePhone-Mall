<template>
  <div class="home">
    <!-- 搜索框，点击跳转搜索页面 -->
    <van-sticky>
      <van-search shape="round" background="red" disabled placeholder="请输入搜索关键词" @click="searched" />
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
        <van-grid-item v-for="item in icons" :key="item.index" icon="photo-o" text="文字">
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
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">为你推荐</van-divider>
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
        "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/112923/23/10175/195622/5ee74c46Ec9d71a0e/3d171b7bf86815e3.jpg!q70.jpg.dpg",
        "https://imgcps.jd.com/ling4/100004323294/5omL5py66LSt5a6e5oOg/5aSH6LSn6LaF5YC8/p-5c122d3d82acdd181d18292c/4ab10a22/cr_1125x445_0_171/s1125x690/q70.jpg",
        "https://imgcps.jd.com/ling4/100004323294/5p6B5a6i5b-F5aSH/6L-95rGC5p6B6Ie055Sf5rS7/p-5d91a4f642dd5b7c7d52cbc8/2eac115e/cr/s1125x690/q70.jpg",
        "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/149442/5/354/189632/5ee0d26cE753c892c/dbbf3fd6716a78e2.jpg!cr_1125x445_0_171!q70.jpg.dpg"
      ],
      icons: [
        {
          url:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/139726/6/693/6411/5ee6de22E7c61a6c1/4867e73739d91c58.png.webp",
          text: "性价比"
        },
        {
          url:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/136744/4/2242/5766/5ee6de26E586b90de/f4059b653516adda.png.webp",
          text: "性能强"
        },
        {
          url:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/146378/21/730/6116/5ee6de2aE3ada7856/a5092102b03aec0d.png.webp",
          text: "音质美"
        },
        {
          url:
            "https:////m.360buyimg.com/mobilecms/s120x120_jfs/t1/111531/5/10210/6261/5ee6de2eE3c3de6ec/d0147a0ae1862ad7.png.webp",
          text: "爱拍照"
        },
        {
          url:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/131252/2/2265/6004/5ee6de37E8f96be14/544d5f586413ef14.png.webp",
          text: "售后好"
        },
        {
          url:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/115186/38/10174/5887/5ee6de3cEee1a71a1/887090da02570465.png.webp",
          text: "价格低"
        },
        {
          url:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/146401/17/702/6481/5ee6de41Ece4a5b4b/122924477363b145.png.webp",
          text: "可分期"
        },
        {
          url:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/122137/9/4957/6105/5ee6de45E08719845/c59c6d3f7527a97c.png.webp",
          text: "领券"
        },
        {
          url:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/129883/26/2314/6235/5ee6de4aEee55042e/56b1db7381386a95.png.webp",
          text: "赚钱"
        },
        {
          url:
            "https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/149526/40/723/5793/5ee6de52E3c744f46/5c0a32cb5db908f7.png.webp",
          text: "好机推荐"
        }
      ],
      products: [],
      spikeProducts: [],
      time: 30 * 60 * 60 * 1000
    };
  },
  filters: {
    spliceStr(str) {
      return str.length > 26 ? str.substr(0, 28) + "..." : str;
    }
  },
  components: {},
  methods: {
    loadData() {
      Products(50, 1).then(res => {
        this.products = res.data.products;
        let a = Math.floor(Math.random() * 10) + 1;
        this.spikeProducts.push(this.products.slice(a, a + 4));
      });
    },
    searched() {
      this.$router.push({ name: "sousuo" });
    }
  },
  created() {
    this.loadData();
  }
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
