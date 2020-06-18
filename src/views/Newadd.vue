<template>
  <div class="newadd">
    <van-nav-bar title="收货地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      AddressInfo
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
import { Toast } from "vant";
import areaList from "../utils/area";
import { Addresses } from "../service/Goods";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      AddressInfo: ""
    };
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    async onSave(content) {
      const res = await Addresses({
        receiver: content.name, //   收货人姓名
        mobile: content.tel, // 手机号
        regions: content.province + content.city + content.county, //    地区信息(河南省-郑州市-二七区)
        address: content.addressDetail, //   详细地址(航海路1290号)
        idDefault: content.isDefault //是否默认(true/false)
      });

      console.log(res, content);

      Toast("保存成功");
      this.$router.push({
        name: "Address"
      });
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>
