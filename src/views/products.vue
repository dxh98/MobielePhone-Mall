<template>
  <div class="pr">
    <div class="top">
      <p>{{Pd[0].productCategory.descriptions? Pd[0].productCategory.descriptions:' '}}</p>
      <span @click="btn">查看更多>></span>
    </div>
    <van-card
      class="cart"
      v-for="item in Pd"
      :key="item._id"
      :price="item.price"
      :title="item.name"
      currency="￥"
      :origin-price="item.price+20"
      :thumb="item.coverImg"
    >
      <!-- <template #tags>
        <van-tag plain type="danger">标签</van-tag>
      </template>-->
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
// import { eventBus } from "../router/firstChild/evevtBus";
import { addProduct } from "../secvice/Cart";
import { Products } from "../secvice/Goods";
export default {
  data() {
    return {
      prod: ""
      // allProducts: ""
      // Pid: ""
    };
  },
  props: ["Pd"],
  methods: {
    btn() {
      console.log(1);
    },
    // 加入购物车
    addCart(id) {
      console.log(id);
      addProduct(id, 1).then(res => {
        console.log(res);
      });
      // console.log(res);
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