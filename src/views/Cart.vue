<template>
  <div class="cart">
    <h1>购物车</h1>
    <!-- 购物车商品卡片 -->
    <div class="goodscard">
      <div class="check">
        <van-checkbox icon-size="18px" checked-color="red" v-model="checked"></van-checkbox>
      </div>
      <div class="goods">
        <van-swipe-cell>
          <van-card
            num="10"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            thumb="https://img.yzcdn.cn/vant/cat.jpeg"
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
    <div class="goodscard">
      <div class="check">
        <van-checkbox icon-size="18px" checked-color="red" v-model="checked"></van-checkbox>
      </div>
      <div class="goods">
        <van-swipe-cell>
          <van-card
            num="10"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            thumb="https://img.yzcdn.cn/vant/cat.jpeg"
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
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">为你推荐</van-divider>

    <van-grid :border="false" :column-num="2" :gutter="10">
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <h1>商品名</h1>
        <p>￥ 1000.00</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <h1>商品名</h1>
        <p>￥ 1000.00</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <h1>商品名</h1>
        <p>￥ 1000.00</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <h1>商品名</h1>
        <p>￥ 1000.00</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <h1>商品名</h1>
        <p>￥ 1000.00</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <h1>商品名</h1>
        <p>￥ 1000.00</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <h1>商品名</h1>
        <p>￥ 1000.00</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <h1>商品名</h1>
        <p>￥ 1000.00</p>
      </van-grid-item>
    </van-grid>

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
export default {
  name: "Cart",
  data() {
    return {
      checked: ""
    };
  },
  components: {},
  methods: {
    onSubmit() {}
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
</style>
