<template>
  <div id="app">
    <router-view class="main"></router-view>
    <Nav v-show="!hideNav" />
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  data() {
    return {
      hideNav: false, //默认是显示的
    };
  },
  components: {
    Nav,
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
#app {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow: auto;
  color: red;
}
</style>
