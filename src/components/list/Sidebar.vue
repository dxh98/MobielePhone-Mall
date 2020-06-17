<template>
  <div class="Sidebar">
    <van-sidebar v-model="activeKey" class="sd">
      <van-sidebar-item
        class="sd"
        v-for="item in product"
        :key="item.List_id"
        :title="item.listName"
        :to="{name:'Products',params:{id:item.List_id}}"
      />
    </van-sidebar>
  </div>
</template>
<script>
import { evevtBus } from "../../router/firstChild/evevtBus";

export default {
  data() {
    return {
      activeKey: 0
    };
  },
  props: ["product"],
  methods: {
    //获取所有商品
    // 然后遍历属性 形成新的商品列表对象 保存分类id
    // 再用分类id查找对应商品
    //遍历所有商品
    // 事件总线
    // putPid(id) {
    //   evevtBus.$emit("pid");
    // }
  }
  // created() {
  //   this.sort();
  // }
  // async created() {
  //   const res = await sort();
  //   console.log(res);
  // }
};
</script>
<style scoped>
.sd {
  width: 5.8rem;
}
</style>>
  
