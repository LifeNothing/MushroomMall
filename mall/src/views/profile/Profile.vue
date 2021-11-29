<template>
<div class="profile">
  <head-img></head-img>
  <user-zone></user-zone>
  <order></order>
  <LoginSuccess @quitLogin="quitLogin"></LoginSuccess>
</div>
</template>

<script>
import LoginSuccess from "./LoginSuccess";
import HeadImg from "../../components/content/headImg/HeadImg";
import UserZone from "../../components/content/userZone/UserZone";
import Order from "./profileChild/Order";
export default {
  name: "Profile",
  components: {Order, UserZone, HeadImg, LoginSuccess},
  methods: {
    quitLogin() {
      window.sessionStorage.setItem("profile","/login")
      window.sessionStorage.removeItem("loginInfo")
      this.$router.push("/login")
      this.$store.state.profile="/login"
    }
  }
}
</script>

<style scoped>

.profile{
  background-color: #EEEEEEFF;
  height: 100vh;
}

</style>
