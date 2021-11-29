<template>
  <div class="cart">
  <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
  <scroll class="wrapper">
    <cart-list></cart-list>
  </scroll>
    <settlement></settlement>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import Scroll from "../../components/common/scroll/Scroll";
import CartList from "./cartchild/CartList";
import Settlement from "./cartchild/Settlement";
export default {
  name: "Cart",
  components: {Settlement, CartList, Scroll, NavBar},
  beforeRouteLeave(to,from,next){
      this.$store.state.cartList=[]
      next()
  },
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
.wrapper{
  height: calc(100% - 129px);
}
</style>
