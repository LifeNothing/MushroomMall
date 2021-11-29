<template>
<div class="orderManage">
  <nav-bar class="home-nav">
    <div slot="left"></div>
    <div slot="center">订单列表</div>
  </nav-bar>
  <mt-navbar v-model="selected">
    <mt-tab-item id="1">全部</mt-tab-item>
    <mt-tab-item id="2">待付款</mt-tab-item>
    <mt-tab-item id="3">待发货</mt-tab-item>
    <mt-tab-item id="4">待收货</mt-tab-item>
    <mt-tab-item id="5">待评价</mt-tab-item>
    <mt-tab-item id="6">售后</mt-tab-item>
  </mt-navbar>
  <!-- tab-container -->
  <mt-tab-container v-model="selected" class="mt-tab-container">
    <mt-tab-container-item id="1">
      <list :list="this.$store.state.orderList"></list>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
      <list :list="this.$store.state.orderList.filter(item=>{return item.state===`1`})"></list>
    </mt-tab-container-item>
    <mt-tab-container-item id="3">
      <list :list="this.$store.state.orderList.filter(item=>{return item.state===`2`})"></list>
    </mt-tab-container-item>
    <mt-tab-container-item id="4">
      <mt-cell v-for="n in 10" :title="'内容 ' + n" />
    </mt-tab-container-item>
    <mt-tab-container-item id="5">
      <mt-cell v-for="n in 4" :title="'测试 ' + n" />
    </mt-tab-container-item>
    <mt-tab-container-item id="6">
      <mt-cell v-for="n in 6" :title="'选项 ' + n" />
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>

<script>
import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
import { Navbar, TabItem } from 'mint-ui';
import Vue from "vue";
import NavBar from "../../components/common/navbar/NavBar";
import BackLast from "../../components/common/backlast/BackLast";
import {getDetail} from "../../network/detail";
import List from "./list/List";
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
export default {
  name: "orderManage",
  components: {List, BackLast, NavBar},
  data(){
    return{
      selected: "1",
      userid: (JSON.parse(window.sessionStorage.getItem("UserMes"))).data.id
    }
  },
  beforeRouteLeave(to,from,next){
    this.$store.state.orderList=[]
    next()
  },
  created() {
    this.selected=this.$route.params.id+""
    this.$http.post("getPending?userid="+(this.userid+"")).then(res=>{
      if (res!=null){
        for (let item of res.data){
          let id=item.id
          let count=item.count
          let price=item.price
          let state=item.state
          let sid=item.sid
          this.iid=item.iid
          let iid=item.iid
          getDetail(this.iid).then(res => {
            const product ={}
            this.topImages=res.data.result.itemInfo.topImages;
            this.results=res.data.result;
            product.image=this.topImages[0]
            product.title=this.results.skuInfo.title
            product.price=price
            product.desc=this.results.detailInfo.desc
            product.count=count
            product.state=state
            product.sid=sid
            product.iid=iid
            product.id=id
            this.$store.state.orderList.unshift(product)
          })}}
    })
  }
}
</script>

<style scoped>
.orderManage {
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
.mt-tab-container{
  margin-top: 5px;
}


</style>
