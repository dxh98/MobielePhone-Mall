<template>
  <div class="Sidebar">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="居家日用" :to="{name:'Products',params:{id:'0'}}" />
      <van-sidebar-item title="美妆个户" :to="{name:'Products',params:{id:'1'}}" />
      <van-sidebar-item title="服装箱包" />
      <van-sidebar-item title="食品饮料" />
      <van-sidebar-item title="鞋包配饰" />
      <van-sidebar-item title="手机数码" />
      <van-sidebar-item title="家用电器" />
      <van-sidebar-item title="生鲜水果" />
    </van-sidebar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: 0
    };
  }
};
</script>