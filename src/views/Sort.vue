<template>
  <div class="sort">
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    <div class="conter">
      <Sd :product="productList" class="sd"></Sd>
      <div class="list">
        <router-view></router-view>
        <!-- <products></products> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { get } from "../utils/request";
import Sd from "../components/list/Sidebar";
import { Products } from "../secvice/Goods";
// import products from "../views/products";
export default {
  name: "Sort",
  data() {
    return {
      value: "",
      productList: "",
      allProducts: ""
    };
  },
  components: {
    Sd
    // products
  },
  async created() {
    const res = await Products();
    // console.log(res.data.products);
    this.allProducts = res.data.products;
    this.sort();
  },
  // created() {
  //   sort();
  // },
  methods: {
    sort() {
      //获取所有商品
      // 然后遍历属性 形成新的商品列表对象 保存分类id
      // 再用分类id查找对应商品
      //遍历所有商品
      let arr = [];
      let b = this.allProducts;
      let obj = {};
      b.forEach((item, index) => {
        arr.push({
          listName: item.productCategory.descriptions,
          List_id: item.productCategory._id
        });
      });
      arr = arr.reduce(function(item, next) {
        obj[next.List_id] ? "" : (obj[next.List_id] = true && item.push(next));
        return item;
      }, []);
      this.productList = arr;
      console.log(arr);
    }
  }
};
</script>

<style scoped>
.sort {
  background-color: rgb(246, 246, 246);
}
.conter {
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  /* width: 100%;
  height: 100%; */
}
/* .sd {
  width: 35%;
} */
.list {
  /* flex: 1 */
  /* background-color: red; */
  width: 100%;
  /* height: 100%; */
  overflow: auto;
}
</style>
