<template>
<div>
  <el-row class="button-container">
    <el-button round class="loginButton" @click="quitLogin">退出登录</el-button>
  </el-row>
</div>
</template>

<script>
export default {
  name: "LoginSuccess",

  methods: {
    quitLogin(){
      this.$emit("quitLogin")
    }
  },
}
</script>

<style scoped>
.button-container{
  text-align: center;
}
.loginButton{
  margin-top: 20px;
  width: 200px;
  background-color: var(--color-tint);
  color: white;
}
</style>
