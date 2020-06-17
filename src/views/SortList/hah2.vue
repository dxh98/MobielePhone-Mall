<template>
  <div class="pr">
    <!-- 竖啊大大得到的adadadad啊大啊啊啊啊 啊 -->
    <div class="goodsList">
      <van-grid :column-num="2" :gutter="6">
        <van-grid-item
          :to="{
            name: 'Detail',
            query: {
              id: item._id,
            },
          }"
          v-for="item in Pd"
          :key="item.index"
        >
          <img :src="item.coverImg" />
          <p>{{ item.name | spliceStr }}</p>
          <h1>￥ {{ item.price }}</h1>
        </van-grid-item>
      </van-grid>
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
      prod: ""
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
    }
  },
  computed: {},
  filters: {
    spliceStr(str) {
      return str.length > 26 ? str.substr(0, 28) + "..." : str;
    }
  }
};
</script>
<style scoped>
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
