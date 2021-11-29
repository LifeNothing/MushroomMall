<template>
  <div class="detail">
    <nav-bar>
      <back-last slot="left"></back-last>
      <navbar-detail slot="center" @tabClick="getIndex" :changeindex="this.value"
      ref="currentindex"></navbar-detail>
    </nav-bar>
    <scroll class="wrapper" ref="scroll" @backPosition="getScrollPosition">
    <common-swiper ref="swiper">
      <mt-swipe-item v-for="item in topImages" >
        <img :src="item" alt="">
      </mt-swipe-item>
    </common-swiper>
    <div class="product-detail">
      <div class="skuInfoTitle">{{this.goods.title}}</div>
      <div class="itemInfo">
        <div class="prices">
          <span class="lowNowPrice">￥{{this.goods.realPrice}}</span>
          <span class="lowPrice">￥{{this.goods.oldPrice}}</span>
          <span class="activityPrice">活动价</span>
        </div>
        <div class="columns" >
          <span class="columns-item" v-for="item in results.columns">{{item}}</span>
        </div>
      </div>
    </div>
    <detail-image ref="detailimag" :detailImage="this.goods.detailImage"></detail-image>
    <product-detail :productDetail="results" ref="product"></product-detail>
    </scroll>
    <cart-button-bar @addCart="addCart" class="detail-bottom-bar"></cart-button-bar>
    <div class="cartDrawer-container">
      <el-drawer :visible.sync="drawer" :direction="this.direction"
               class="cartDrawer" :modal-append-to-body="false" :close-on-press-escape="true"
               :close-on-click-modal="true" >
        <CartDrawer class="cartDrawer-item" :results="results" :topImage="this.topImages[0]"
          @AddCart="AddCart">
        </CartDrawer>
      </el-drawer>
    </div>
    <Toast :message="message" :isShow="isShow"></Toast>
  </div>
</template>

<script>
import Toast from "../../components/common/toast/Toast";
import NavBar from "../../components/common/navbar/NavBar";
import BackLast from "../../components/common/backlast/BackLast";
import NavbarDetail from "../../components/common/navbar/navbarDetail/NavbarDetail";


import {getDetail,Goods} from "../../network/detail";

import CommonSwiper from "../../components/common/swiper/CommonSwiper";
import ProductDetail from "../../components/content/productDetail/ProductDetail";
import Scroll from "../../components/common/scroll/Scroll";
import DetailImage from "./detailchild/detailImage";
import CartButtonBar from "./detailchild/CartButtonBar";
import CartDrawer from "./detailchild/CartDrawer";

export default {
  name: "Detail",
  components: {
    Toast,
    CartDrawer,
    CartButtonBar,
    DetailImage,
    Scroll,
    ProductDetail,
    CommonSwiper,
    NavbarDetail,
    BackLast,
    NavBar
  },
  data(){
    return {
      goods:{},
      a: "",
      iid: "",
      isShow: false,
      message: "添加购物车成功",
      direction: "btt",
      drawer: false,
      topImages: [],
      titles: [],
      value: null,
      getItemElement: null,
      swipePosition: null,
      detailimagePosition: null,
      positionY: null,
      title: "",
      results: {
        Type: Object,
        default(){
          return {}
        }
      }
    }
  },
  created() {
    this.iid=this.$route.params.iid;
    getDetail(this.iid).then(res => {
      this.goods=new Goods(res.data.result)
      this.topImages=this.goods.topImages;
      this.results=res.data.result;
    })

    },
  mounted() {
    try{this.$refs.scroll.scroll.refresh()}catch (e) {
    }

  }
  ,methods: {
    addCart(a){
      this.a=a
      this.drawer=true

    },
    AddCart(count) {
      // this.$store.commit('addCart',product)
      if (this.a==="1"){let userMessage=JSON.parse(window.sessionStorage.getItem('UserMes'))
        let oldProduct = this.$store.state.copyCartList.find(item => item.iid === this.iid)
        if (oldProduct){
          oldProduct.count=(parseInt(oldProduct.count)+1)+""
          this.$http.put("updateCount?count="+oldProduct.count+"&iid="+this.iid+
            "&userid="+(userMessage.data.id+"")).then(res =>{})
        }else {
          this.$http.post("addCart?iid="+this.iid+"&userid="+(userMessage.data.id+"")).then(res=>{
            if (res!=null){
            }
          })}}else if (this.a==="2"){
        const mes={}
        mes.count=count
        mes.iid=this.iid
        this.$router.push("/confirmOrder/"+JSON.stringify(mes))
      }

      this.drawer=false
      this.isShow=true
      setTimeout(() => {this.isShow=false},1000)},
    getScrollPosition(position){
      this.$nextTick(() => {
      setTimeout(() =>{
        if (-position.y<this.$refs.detailimag.$el.offsetTop) {
          this.value=0}
        else if (this.$refs.detailimag.$el.offsetTop<-position.y){
          this.value=1
      }
        this.$refs.currentindex.currentIndex=this.value
      },)})
    },
    getIndex(index){
      this.$nextTick(() => {
        setTimeout(() => {
          this.swipePosition=this.$refs.swiper;
          this.detailimagePosition=this.$refs.detailimag
          switch (index) {
            case 0:
              this.getItemElement = this.swipePosition;
              break
            case 1:
              this.getItemElement = this.detailimagePosition;
              break
          }
          this.$refs.scroll.scroll.scrollTo(0,(-this.getItemElement.$el.offsetTop)-44,200)
          },)
      })
    },
  }
}
</script>

<style scoped>
  img{
    width: 100%;
  }
  .product-detail{
    padding: 5px;
  }
  .skuInfoTitle{
    font-weight: bolder;
    font-size: 15px;
    color: #222;
  }
  .prices{
    margin-top: 10px;
  }
  .prices .lowNowPrice{
    font-size: 20px;
    color: var(--color-tint);
  }
  .prices .lowPrice{
    margin-left: 10px;
    font-size: 14px;
    text-decoration: line-through;
    color: #999;
  }
  .prices .activityPrice{
    height: 20px;
    margin-left: 10px;
    background-color: var(--color-tint);
    border-radius: 10px;
    color: white;
    font-size: 14px;
  }
  .columns{
    display: flex;
    margin-top: 20px;
  }
  .columns .columns-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
  }
  .detail{
    height: 100vh;
    z-index: 12;
    background-color: white;
    position: relative;
  }
  .wrapper{
    height: calc(100% - 44px);
  }
  .cartDrawer-container{
    height: 400px;
  }
  .cartDrawer{
    z-index: 100000;
    position: fixed;
    bottom: 0;

  }
  .cartDrawer-item{
  }

 .cartDrawer-container >>> .el-drawer.btt{
   height: 50%;
 }

</style>
