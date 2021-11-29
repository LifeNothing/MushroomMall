<template>
<div>
  <div class="detail-container">
    <img :src="topImage" alt="" >
    <div class="item-price">￥{{this.order.price}}</div>
  </div>
  <div class="info-bottom">
    <div class="change-count">
      <div class="subtract" @click="subCount">－</div>
      <div class="item-count">{{this.order.count}}</div>
      <div class="add" @click="addCount">＋</div>
    </div>
  </div>
  <el-row class="button-container">
    <el-button class="loginButton" @click="AddCart">确认</el-button>
  </el-row>
</div>
</template>

<script>
export default {
  name: "CartDrawer",
  props: {
    results: {},
    topImage: null
  },data(){
    return{
      order: {
        price: this.results.itemInfo.lowNowPrice,
        count: 1
      }
    }
  },
  methods: {
    AddCart() {
      this.$emit("AddCart",this.order.count)
    },
    addCount(){
      this.order.count+=1
    },
    subCount(){
      if (this.order.count<=1){
        this.order.count=1
      }else {
        this.order.count-=1
      }
    }

  },
  created() {
  }
}
</script>

<style scoped>
.detail-container img{
  width: 80px;
  height: 100px;
  position: fixed;
  bottom: 150px;
  left: 20px;
}
.button-container{
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

}
.loginButton{
  width: 100%;
  background-color: var(--color-tint);
  color: white;
}
.info-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.item-price {
  color: #ffb805;
  font-size: 20px;
  position: fixed;
  bottom: 170px;
  left: 110px;
}
.item-count {
  font-size: 20px;
  flex: 1.5;
  text-align: center;
  width: 20px;
}
.add,.subtract{
  font-size: 20px;
  color: #8c939d;
  text-align: center;
  flex: 1;
}
.change-count{
  width: 60px;
  display: flex;
}

</style>
