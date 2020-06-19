<template>
  <div class="pr">
    <div class="heng">
      <van-card
        class="cart"
        v-for="item in Pd"
        :key="item._id"
        :price="item.price"
        :title="item.name"
        currency="￥"
        :origin-price="item.price + 20"
        :thumb="item.coverImg"
        @click-thumb="detail(item._id)"
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
  </div>
</template>
<script>
// import { eventBus } from "../router/firstChild/evevtBus";
import { Toast } from "vant";
import { addProduct } from "@/service/Cart";
import { Products } from "@/service/Goods";
export default {
  name: "",
  data() {
    return {
      prod: "",
      PD: ""
      // allProducts: ""
      // Pid: ""
    };
  },
  props: ["Pd"],
  methods: {
    // 商品详请
    detail(id) {
      this.$router.push({
        name: "Detail",
        query: {
          id
        }
      });
    },

    // 加入购物车
    addCart(id) {
      addProduct(id, 1).then(res => {
        Toast.success("加入购物车成功");
      });
    }
  },
  filters: {
    spliceStr(str) {
      return str.length > 26 ? str.substr(0, 28) + "..." : str;
    }
  }
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
