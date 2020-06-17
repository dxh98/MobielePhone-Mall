<template>
  <div class="pr">
    <div class="top">
      <p>{{this.$route.params.list}}</p>
      <span @click="btn">查看更多>></span>
    </div>
    <van-card
      class="cart"
      v-for="item in Pd"
      :key="item._id"
      :price="item.price"
      :title="item.name"
      currency="￥"
      :origin-price="item.price + 20"
      :thumb="item.coverImg"
    >
      <template #bottom>
        <div class="lookIcon">
          <div class="looks">
            <p>12314浏览</p>
          </div>
          <div class="cartIcon">
            <van-icon @click="addCart(item._id)" size="30" color="red" name="shopping-cart-o" />
          </div>
        </div>
      </template>
    </van-card>
  </div>
</template>
<script>
import { Products, addCart } from "../service/Goods";
export default {
  data() {
    return {
      prod: ""
    };
  },
  props: ["Pd"],
  methods: {
    btn() {},
    // 加入购物车
    addCart(id) {
      addCart(id, 1).then(res => {
        alert(res.data.message);
      });
    }
  },
  computed: {},
  watch: {}
};
</script>
<style scoped>
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2rem 0.5rem;
}
.van-card__price-integer,
.van-card__price-currency {
  color: red;
}
.lookIcon {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.looks p {
  font-size: 18px;
  color: #999;
}
</style>
