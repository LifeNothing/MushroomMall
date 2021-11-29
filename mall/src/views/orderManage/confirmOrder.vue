<template>
<div style="height: 100vh">
  <nav-bar class="home-nav">
    <div slot="left"><back-last></back-last></div>
    <div slot="center">确认订单</div>
  </nav-bar>
  <list :list="this.$store.state.myOrder"></list>
  <place-order class="placeOrder" :totalPrice="this.totalPrice" :count="this.count" @placeOrder="placeOrder"></place-order>
  <div class="cartDrawer-container">
    <el-drawer title="收银台" :visible.sync="drawer" :direction="`btt`"
               class="cartDrawer" :modal-append-to-body="false" :close-on-press-escape="true"
               :close-on-click-modal="true" @close="Close">
      <div>
        <el-row class="button-container">
          <el-button class="loginButton" @click="confirmPayment">确认支付</el-button>
        </el-row>
      </div>
    </el-drawer>
  </div>
</div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import List from "./list/List";
import PlaceOrder from "./placeOrder/placeOrder";
import BackLast from "../../components/common/backlast/BackLast";
import {getDetail} from "../../network/detail";
import async from "async";
export default {
  name: "confirmOrder",
  data(){
    return{
      direction: "btt",
      drawer: false,
      count: 1,
      totalPrice: 100,
      userid: (JSON.parse(window.sessionStorage.getItem("UserMes"))).data.id
    }
  },
  components: {BackLast, PlaceOrder, List, NavBar},
  created() {
    this.getCurrentTime()
    const mes=JSON.parse(this.$route.params.mes)
    getDetail(mes.iid).then(res => {
      const product ={}
      this.topImages=res.data.result.itemInfo.topImages;
      this.results=res.data.result;
      product.image=this.topImages[0]
      product.title=this.results.skuInfo.title
      product.price=this.results.itemInfo.lowNowPrice
      product.desc=this.results.detailInfo.desc
      product.count=mes.count
      product.iid=mes.iid
      this.count=mes.count
      this.iid=mes.iid
      this.price=product.price
      // product.state=state
      this.totalPrice=product.count*product.price
      this.$store.state.myOrder.unshift(product)
    })
    if(window.sessionStorage.getItem("drawer")==="1"){
      this.drawer=true
    }
  },
  methods: {
    getCurrentTime() {
      //获取当前时间并打印
      const _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy+'/'+mm+'/'+dd+' '+hh+':'+mf+':'+ss;
      console.log(_this.gettime)
    },
    async confirmPayment(){
      await this.$http.post("addOrder?userid="+this.userid+"&iid="+this.iid+"&count="+this.count+
      "&price="+this.price+"&state="+"2"+"&time=2021/10/26/19:46")
      await this.$router.push("/orderManage/3")
      window.sessionStorage.removeItem("drawer")
    },
    async Close(){
      window.sessionStorage.removeItem("drawer")
       await this.$http.post("addOrder?userid="+this.userid+"&iid="+this.iid+"&count="+this.count+
        "&price="+this.price+"&state="+"1"+"&time=2021/10/26/19:46")
      await this.$router.push("/orderManage/2")
    },
    placeOrder(){
      this.drawer=true
      window.sessionStorage.setItem("drawer","1")
  }
  },
  beforeRouteLeave(to,from,next){
    this.$store.state.myOrder=[]
    next()
  },
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
.cartDrawer-container{
  height: 100vh;
}
.cartDrawer{
  z-index: 100000;
  position: fixed;
  bottom: 0;

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
.placeOrder{
  position: fixed;
  bottom: 0;
  z-index: 10;
}
</style>
