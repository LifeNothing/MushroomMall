<template>
<div>
  <div style="height: 30px"></div>
  <div class="userHead">
    <div class="headImg"></div>
    <div class="username">wangwei</div>
  </div>
</div>
</template>

<script>
export default {
  name: "HeadImg"
}
</script>

<style scoped>
.userHead{
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  height: 100px;
  border-radius: 5px;
  background-color: white;
}
.headImg{
  position: absolute;
  height: 50px;
  width: 50px;
  top: -25px;
  background-color: var(--color-tint);
  left: 50%;
  margin-left: -25px;
  border-radius: 25px;
  border: white solid 5px;
}
.username{
  position: absolute;
  top: 30px;
  text-align: center;
  width: 140px;
  left: 50%;
  margin-left: -70px;
  font-size: 18px;
}
</style>
