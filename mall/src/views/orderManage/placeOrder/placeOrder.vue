<template>
<div>
  <div class="placeOrder">
    <div style="flex: 1">总价:</div>
    <div class="lowNowPrice">${{totalPrice}}</div>
    <div style="flex: 1"></div>
    <div class="lowPrice">共{{count}}件商品</div>
    <el-row class="button-container">
      <el-button class="loginButton" @click="placeOrder">提交订单</el-button>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
  name: "placeOrder",
  props: {
    totalPrice: null,
    count: null,
  },
  methods: {
    placeOrder(){
      this.$emit("placeOrder")
    }
  }
}
</script>

<style scoped>
.placeOrder{
  display: flex;
  line-height: 50px;
  text-align: center;
  height: 50px;
  width: 100%;
  background-color: white;
}
.button-container{
  flex: 1.5;
  text-align: center;
}
.loginButton{
  height: 50px;
  width:100px;
  background-color: var(--color-tint);
  color: white;
}
.lowNowPrice{
  flex: 1;
  font-size: 20px;
  color: var(--color-tint);
}
.lowPrice{
  flex: 1;
  font-size: 14px;
  color: #999;
}

</style>
