<template>
  <div id="app">
    <keep-alive exclude="CartList,Cart,Detail,orderManage,confirmOrder,List" >
      <router-view></router-view>
    </keep-alive>

    <TabBar>
      <TabBarItem path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem :path=this.$store.state.cart>
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem :path=this.$store.state.profile>
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBarItem from "./components/common/tabbar/TabBarItem";
import TabBar from "./components/common/tabbar/TabBar";
export default {
  name: 'App',
  provide(){
    return{
    }
  },
  components: {
    TabBar,
    TabBarItem
  },
  data(){
    return{
      pro: "/login",
    }
  },
  methods: {
  },
  create() {
    this.$store.state.profile=window.sessionStorage.getItem("profile")
  }
}
</script>

<style>
  @import "assets/css/base.css";
#app {

}
</style>
