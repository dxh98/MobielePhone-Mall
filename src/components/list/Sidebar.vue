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
  methods: {}
};
</script>
<style scoped>
.sd {
  width: 5.8rem;
}
</style>>
  
