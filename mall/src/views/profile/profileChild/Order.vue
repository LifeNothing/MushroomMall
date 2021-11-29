<template>
<div class="order">
  <div class="myLabel">
    <div>我的订单</div>
  </div>
  <div class="barContain">
  <bar-inactive @click.native="pendingPay(2)">
    <img slot="item-icon" src="../../../assets/img/profile/wallet.png">
    <div slot="item-text">待付款</div>
  </bar-inactive>
  <bar-inactive @click.native="pendingPay(3)">
    <img slot="item-icon" src="../../../assets/img/profile/tobeshipped.png">
    <div slot="item-text">待发货</div>
  </bar-inactive>
  <bar-inactive @click.native="pendingPay(4)">
    <img slot="item-icon" src="../../../assets/img/profile/goodstobereceieved.png">
    <div slot="item-text">待收货</div>
  </bar-inactive>
  <bar-inactive @click.native="pendingPay(5)">
    <img slot="item-icon" src="../../../assets/img/profile/evaluate.png">
    <div slot="item-text">评价</div>
  </bar-inactive>
  <bar-inactive @click.native="pendingPay(6)">
    <img slot="item-icon" src="../../../assets/img/profile/aftersale.png">
    <div slot="item-text">退款收货</div>
  </bar-inactive>
  </div>
</div>
</template>

<script>
import UserZone from "../../../components/content/userZone/UserZone";
import BarInactive from "../../../components/common/tabbarInactive/barInactive";
export default {
  name: "Order",
  components: {BarInactive, UserZone},
  data(){return{
     state: "1" ,

    }
  },
  methods: {
    pendingPay(id){
      this.$router.push("/orderManage/"+id)

    }
  }
}
</script>

<style scoped>
.order{
  margin-left: 20px;
  margin-right: 20px;
  height: 100px;
  border-radius: 5px;
  background-color: white;
  margin-top: 10px;
  padding-top: 5px;
}
.barContain{
  position: relative;
  display: flex;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
}
.myLabel{
  line-height: 40px;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 1px solid #efefef;
  font-size: 13px;
}
</style>
