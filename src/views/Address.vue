<template>
  <div class="address">
    <van-nav-bar title="收货地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>
<script>
import { Toast } from "vant";
import { getAddresses } from "../service/Goods";
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onAdd() {
      this.$router.push({ name: "Newadd" });
    },
    onEdit(item) {
      this.$router.push({
        name: "RevisrAddress",
        query: {
          id: item.id
        }
      });
    }
  },
  // 获取收货地址
  async created() {
    const res = await getAddresses();
    let arr = res.data.addresses;
    let newlist = [];
    for (let i = 0; i < arr.length; i++) {
      let newArr = {
        id: arr[i]._id,
        name: arr[i].receiver,
        tel: arr[i].mobile,
        address: arr[i].regions + arr[i].address,
        isDefault: arr[i].isDefault
      };
      newlist.push(newArr);
    }
    this.list = newlist;
  }
};
</script>
