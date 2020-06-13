<template>
  <div id="app">
    <router-view class="main"></router-view>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  components: {
    Nav
  }
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
}
</style>
