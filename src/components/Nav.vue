<template>
  <div class="nav">
    <ul>
      <li @click="tabpage(0,'Home')">
        <img :src="homeicon" alt />
        <span :class="{active:isSel == 0}">首页</span>
      </li>
      <li @click="tabpage(1,'Sort')">
        <img :src="sorticon" alt />
        <span :class="{active:isSel == 1}">分类</span>
      </li>
      <li @click="tabpage(2,'Cart')">
        <img :src="carticon" alt />
        <span :class="{active:isSel == 2}">购物车</span>
      </li>
      <li @click="tabpage(3,'User')">
        <img :src="usericon" alt />
        <span :class="{active:isSel == 3}">我的</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Nav",
  data() {
    return {
      isSel: 0,
      imageUrl: {
        homepage: require("../assets/icons/home.png"),
        homepage_sel: require("../assets/icons/home-sel.png"),
        listpage: require("../assets/icons/sort.png"),
        listpage_sel: require("../assets/icons/sort-sel.png"),
        cartpage: require("../assets/icons/cart.png"),
        cartpage_sel: require("../assets/icons/cart-sel.png"),
        userpage: require("../assets/icons/user.png"),
        userpage_sel: require("../assets/icons/user-sel.png")
      }
    };
  },
  computed: {
    homeicon() {
      return this.isSel == 0
        ? this.imageUrl.homepage_sel
        : this.imageUrl.homepage;
    },
    sorticon() {
      return this.isSel == 1
        ? this.imageUrl.listpage_sel
        : this.imageUrl.listpage;
    },
    carticon() {
      return this.isSel == 2
        ? this.imageUrl.cartpage_sel
        : this.imageUrl.cartpage;
    },
    usericon() {
      return this.isSel == 3
        ? this.imageUrl.userpage_sel
        : this.imageUrl.userpage;
    }
  },
  components: {},
  methods: {
    tabpage(index, name) {
      this.isSel = index;
      this.$router
        .push({
          name: name
        })
        .catch(err => {});
    }
  },
  created() {
    if (window.location.hash.indexOf("sort") > -1) {
      this.isSel = 1;
    }
    if (window.location.hash.indexOf("cart") > -1) {
      this.isSel = 2;
    }
    if (window.location.hash.indexOf("user") > -1) {
      this.isSel = 3;
    }
  }
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 8%;
  /* background: red; */
  border-top: 1px solid #ccc;
}
.nav ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-items: center; */
}
.nav ul li .active {
  color: #f51609;
}
.nav ul li img {
  width: 1.6rem;
}
.nav ul li span {
  font-size: 12px;
  color: #707070;
}
</style>
