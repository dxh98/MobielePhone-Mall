<template>
  <div class="sort">
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    <div class="conter">
      <!-- 侧边栏 -->
      <van-sidebar v-model="activeKey" class="sd">
        <van-sidebar-item
          v-for="item in productList"
          :key="item.List_id"
          :title="item.listName"
          :to="{name:'Products',params:{id:item.List_id,list:item.listName}}"
          @click="kind(item.List_id)"
        />
      </van-sidebar>
      <!-- 右边内容 -->
      <div class="list">
        <products :Pd="pd"></products>
      </div>
    </div>
  </div>
</template>

<script>
import { Products } from "../service/Goods";
import products from "../views/products";
import { addCart } from "../service/Goods.js";
export default {
  name: "Sort",
  data() {
    return {
      activeKey: 0,
      value: "",
      productList: "",
      allProducts: "",
      pd: "",
      productListId: "5ee38fb99543ab2ed26b4cc6"
    };
  },
  components: {
    // Sd,
    products
  },

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
    },
    loading(Pid = this.productListId) {
      let arrP = [];
      const arr = this.allProducts;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].productCategory._id == Pid) {
          arrP.push(arr[i]);
        }
      }
      this.pd = arrP;
    },
    kind(Pid) {
      this.loading(Pid);
    }
    // 加入购物车
  },
  async created() {
    const res = await Products(50);
    this.allProducts = res.data.products;
    this.sort();
    this.loading();
  },
  watch: {}
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
}

.list {
  width: 100%;
  overflow: auto;
}
.sd {
  width: 250px;
}
</style>