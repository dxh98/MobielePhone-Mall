<template>
  <div id="app">
    <router-view class="main"></router-view>
    <Nav v-show="!hideNav" />
  </div>
</template>

<script>
import products from "./views/products";
import Nav from "./components/Nav";
export default {
  data() {
    return {
      hideNav: false, //默认是显示的
    };
  },
  components: {
    Nav,
    products,
  },
  watch: {
    $route() {
      if (this.$route.meta.hideNav) {
        this.hideNav = true;
      } else {
        this.hideNav = false;
      }
    },
  },
};
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow: auto;
}
.main::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
</style>
