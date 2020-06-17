<template>
  <div class="product">
    <div class="top">
      <p>居家日用</p>
      <span>查看更多>></span>
    </div>
    <van-card
      v-for="item in product"
      :key="item._id"
      :price="item.price"
      :title="item.name"
      currency="￥"
      :origin-price="item.price+20"
      :thumb="item.coverImg"
    >
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">按钮</van-button>
      </template>
    </van-card>
  </div>
</template>
<script>
// import { eventBus } from "../router/firstChild/evevtBus";
import { Products } from "../secvice/Goods";
export default {
  data() {
    return {
      product: "",
      allProducts: ""
      // Pid: ""
    };
  },
  methods: {},
  async created() {
    const res = await Products();
    // console.log(res.data.products);
    this.allProducts = res.data.products;
    // console.log()
    // eventBus.$on("id", id => {
    //   this.Pid = id;
    // });
    // this.loading();
    // this.sort();
  },
  computed: {
    loading() {
      let arrP = [];
      const Pid = this.$route.params.id;
      const arr = this.allProducts;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].productCategory._id == Pid) {
          arrP.push(arr[i]);
        }
      }
      this.product = arrP;
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
</style>