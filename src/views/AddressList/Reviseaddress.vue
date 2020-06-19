<template>
  <div class="revise">
    <van-nav-bar title="修改地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="conent">
      <!-- 输入任意文本 -->
      <van-field v-model="record.receiver" label="姓名" placeholder="收货人姓名" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="record.mobile" type="tel" label="手机号" placeholder="收货人手机号" />
      <van-field v-model="record.regions" type="text" label="地区" placeholder="收货人地址" />
      <van-field v-model="record.address" label="详细地址" placeholder="收货人详细地址" />
    </div>
    <div class="bottom">
      <van-cell center title="是否默认收货地址">
        <template #right-icon>
          <van-switch v-model="record.idDefault" @change="PPP" size="24" />
        </template>
      </van-cell>
    </div>
    <div class="btn">
      <van-button class="btn1" type="danger" round block @click="revise">保存</van-button>
      <van-button class="btn1" @click="deleteadd" type="default" round block>删除</van-button>
    </div>
  </div>
</template>
<script>
import {
  reviseAddresses,
  deleteAddresses,
  oneAddresses
} from "../../service/Goods";
import { Toast } from "vant";
export default {
  data() {
    return {
      record: {
        receiver: "", //    收货人姓名
        mobile: "", // 手机号
        regions: "", //地区信息(河南省-郑州市-二七区)
        address: "", // 详细地址(航海路1290号)
        isDefault: "" //是否默认(true/false)
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    PPP(checked) {
      // console.log(checked);
      this.record.isDefault = checked;
    },
    // 删除
    async deleteadd() {
      const res = await deleteAddresses(this.$route.query.id);
      Toast("删除成功1秒后自动返回");
      setTimeout(() => {
        this.$router.go(-1);
      }, 1000);
    },
    // 保存修改
    async revise() {
      const res = await reviseAddresses(this.$route.query.id, this.record);
      Toast("修改成功,一秒后自动返回");
      setTimeout(() => {
        this.$router.go(-1);
      }, 1000);
    }
  },
  async created() {
    const res = await oneAddresses(this.$route.query.id);
    // console.log(res.data);
    const arr = res.data;
    this.record = res.data;
    // this.record = {
    //   receiver: arr.receiver, //    收货人姓名
    //   mobile: arr.mobile, // 手机号
    //   regions: arr.regions, //地区信息(河南省-郑州市-二七区)
    //   address: arr.address, // 详细地址(航海路1290号)
    //   idDefault: arr.idDefault //是否默认(true/false)
    // };
  }
};
</script>
<style scoped>
.revise {
  background-color: #c3c3c3;
}
.conent,
.bottom {
  /* font-size: 18px; */
  margin: 0 30px;
  margin-top: 80px;
}
.btn {
  margin: 0 30px;
  margin-top: 40px;
}
.btn1 {
  margin-top: 20px;
}
</style>