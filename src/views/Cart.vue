<template>
  <div class="cart">
    <h1>购物车</h1>
    <!-- 购物车商品卡片 -->

    <div class="goodscard" v-for="item in products" :key="item._id">
      <div class="check">
        <van-checkbox icon-size="18px" checked-color="red" v-model="checked"></van-checkbox>
      </div>
      <div class="goods">
        <van-swipe-cell>
          <van-card
            :num="item.quantity"
            :price="item.product.price"
            :title="item.product.name"
            class="goods-card"
            :thumb="item.product.coverImg"
          ></van-card>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
          <van-button
            class="move"
            color="white"
            icon="https://ae01.alicdn.com/kf/H0ebf1cf953aa415db3303be2b0460ccdT.jpg"
            size="mini"
          ></van-button>
          <van-button
            class="add"
            color="white"
            icon="https://ae01.alicdn.com/kf/H2efff12d538c4806a3ef9612a22146afF.jpg"
            size="mini"
          >+</van-button>
        </van-swipe-cell>
      </div>
    </div>

    <!-- 为你推荐 -->
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">猜你喜欢</van-divider>

    <!-- <van-grid :border="false" :column-num="2" :gutter="10">
      <van-grid-item v-for="item in guessLikeList[0]" :key="item._id">
        <van-image :src="item.coverImg" />
        <h1 class="productName">{{item.name | spliceStr}}</h1>
        <p>￥ {{item.price}}</p>
      </van-grid-item>
    </van-grid>-->
    <div class="goodsList">
      <van-grid :column-num="2" :gutter="10">
        <van-grid-item
          :to="{
            name: 'Detail',
            query: {
              id: item._id,
            },
          }"
          v-for="item in guessLikeList[0]"
          :key="item._id"
        >
          <img :src="item.coverImg" />
          <p>{{ item.name | spliceStr }}</p>
          <h1>￥ {{ item.price }}</h1>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 商品结算 -->
    <van-submit-bar class="settingtotal" :price="3050" button-text="去结算" @submit="onSubmit">
      <van-checkbox checked-color="red" v-model="checked">全选</van-checkbox>
    </van-submit-bar>

    <!-- 没有更多了 -->
    <div class="bottomImage">
      <img src="@/assets/bottomimage.png" alt />
      <p></p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getCartList, delCartOne, Products } from "@/service/Goods.js";
export default {
  name: "Cart",
  data() {
    return {
      checked: "",
      products: [],
      guessLikeList: []
    };
  },
  filters: {
    spliceStr(str) {
      return str.length > 26 ? str.substr(0, 28) + "..." : str;
    }
  },
  components: {},
  methods: {
    onSubmit() {},
    getData() {
      getCartList().then(res => {
        this.products = res.data;
        // console.log(this.products);
      });
      Products(50, 1).then(res => {
        let a = Math.floor(Math.random() * 20) + 1;
        console.log(a);
        this.guessLikeList.push(res.data.products.slice(a, a + 10));
        console.log(this.guessLikeList);
      });
    }
    // delOne() {
    //   delCartOne().then(res => {
    //     console.log(res);
    //   });
    // }
  },
  created() {
    this.getData();
    // this.delOne();
  }
};
</script>

<style scoped>
.cart {
  background: #e6e6e6;
  display: flex;
  flex-direction: column;
}
.cart h1 {
  height: 100px;
  width: 100%;
  background: red;
  text-align: center;
  line-height: 100px;
  background: white;
  margin-bottom: 10px;
  font-size: 34px;
  color: #707070;
}
.goodscard {
  width: 95%;
  background: white;
  margin: 0 auto;
  display: flex;
  border-radius: 20px;
  margin-top: 10px;
}
.check {
  width: 44px;
  margin-top: 86px;
  margin-left: 25px;
  overflow: hidden;
}
.goods {
  width: 615px;
}
.goods-card {
  width: 90%;
  overflow: hidden;
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 80%;
  margin-top: 20px;
}
.move {
  position: absolute;
  right: 138px;
  bottom: 18px;
}
.add {
  position: absolute;
  right: -18px;
  bottom: 18px;
}
.settingtotal {
  bottom: 109px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.bottomImage img {
  width: 100%;
  margin-top: 30px;
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
</style>
