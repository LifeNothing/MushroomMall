<template>
<div class="userZone">
    <div class="tab-bar-item"></div>
    <div class="tab-bar-item">
      <img class="item-icon" src="../../../assets/img/profile/home.png">
      <div class="item-text">我的主页</div>
    </div>
    <div class="tab-bar-item">
      <img class="item-icon" src="../../../assets/img/profile/message.png">
      <div class="item-text">消息</div>
    </div>
    <div class="tab-bar-item">
      <img class="item-icon" src="../../../assets/img/profile/collection.png">
      <div class="item-text">收藏</div>
    </div>
    <div class="tab-bar-item">
      <img class="item-icon" src="../../../assets/img/profile/concern.png">
      <div class="item-text">关注</div>
    </div>
</div>
</template>

<script>

export default {
  name: "UserZone",
  components: {
  },
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin-top: 4px;
}
.item-icon{
  width: 24px;
  height: 24px;

}
.userZone{
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  height: 60px;
  border-radius: 5px;
  background-color: white;
  margin-top: 10px;
  display: flex;
  padding-top: 5px;
}
</style>
