<template>
  <div class="profile">
    <div v-for="(item,i) in list" :key="i" class="list">
      <div class="list-item" >
      <div class="item-img">
        <img :src="item.image" alt="商品图片">
      </div>
      <div class="item-info">
        <div class="item-title">{{item.title}}</div>
        <div class="item-desc">{{item.desc}}</div>
        <div class="info-bottom">
          <div class="item-price">￥{{item.price}}</div>
          <div class="change-count">
            <div class="item-count">x{{item.count}}</div>
          </div>
        </div>
      </div>
      </div>
      <div class="total-price"><span style="margin-left: 220px">包邮，总计:￥{{item.price*item.count}}</span></div>
      <div v-show="isShow" style="height: 30px">
        <el-row class="button-container">
          <el-button class="loginButton" @click="">付款</el-button>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    list: []
  },
  data(){
    return{
      isShow: false
    }
  },
  created() {
  }
}
</script>

<style scoped>
.profile{
  background-color: #EEEEEEFF;
}
.list{
  border-radius: 8px;
  background-color: white;
  margin-bottom: 5px;
}
.list-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-title, .item-desc {
  overflow: hidden;
  white-space: nowrap;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.item-title {
  font-size: 18px;
  margin-bottom: 4px;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color:#333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info, .item-desc {
  color: #666;
  font-size: 14px;
}
.item-desc {
  margin-top:15px;
}
.info-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.item-price {
  color: #ffb805;
  font-size: 20px;
}
.total-price{
  font-size: 16px;
  height: 30px;
  line-height: 30px;
}
.item-count {
  font-size: 20px;
  flex: 1.5;
  text-align: center;
  width: 20px;
}
.change-count{
  width: 60px;
  display: flex;
}
.button-container{
  text-align: center;
  width: 60px;
  padding: 0;
  height: 30px;
  margin-left: 300px;
}
.loginButton{
  background-color: var(--color-tint);
  color: white;
  height: 30px;
  line-height: 8px;
}
</style>
