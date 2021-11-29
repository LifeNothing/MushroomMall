<template>
<div >
  <div v-for="(item,i) in this.$store.state.cartList" class="list-item" :key="i" >
    <div class="item-selector" >
      <select-button @click.native="Selected(item.sid,item.userid,item.active)"
                     :isActive="item.active" ></select-button>
    </div>
    <div class="item-img">
      <img :src="item.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">{{item.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{item.price}}</div>
        <div class="change-count">
          <div class="subtract" @click="subCount(item.iid,item.userid)">－</div>
          <div class="item-count">{{item.count}}</div>
          <div class="add" @click="addCount(item.iid,item.userid)">＋</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SelectButton from "../../../components/content/checkbutton/SelectButton";
import Scroll from "../../../components/common/scroll/Scroll";
import {getDetail} from "../../../network/detail";
import store from "../../../store/store";
export default {
  name: "CartList",
  components: {Scroll, SelectButton},
  data(){
    return{
      md: "",
      isActive: true,
      CartList: []
    }
  },


  created() {
    let userMessage=JSON.parse(window.sessionStorage.getItem('loginInfo'))
    this.$http.post("login",userMessage).then(res =>{
      if (res!=null){
    for (let item of res.data.cartList){
      let count=item.count
      let state=item.state
      let sid=item.sid
      let userid=item.userid
      this.iid=item.iid
      let iid=item.iid
      getDetail(this.iid).then(res => {
        const product ={}
        this.topImages=res.data.result.itemInfo.topImages;
        this.results=res.data.result;
        product.image=this.topImages[0]
        product.title=this.results.skuInfo.title
        product.price=this.results.itemInfo.lowPrice
        product.desc=this.results.detailInfo.desc
        product.count=count
        product.active=state
        product.sid=sid
        product.userid=userid
        product.iid=iid
        this.$store.state.cartList.unshift(product)
      })}
        this.$store.commit("copyList")
      }})
    // this.$store.state.cartList=JSON.parse(window.sessionStorage.getItem("cartList"))
  },
  methods: {
    async Selected(sid,userid,active){
      let state
      if (active==="1"){
        state="0"
      }else if (active==="0"){
        state="1"
      }
      await this.$http.put("updateState?sid="+sid+"&userid="+userid+"&state="+state).then(res =>{}
      )

      this.$http.post("getState?sid="+sid).then(res =>{
        const S={}
        S.sid=sid
        S.nState=res.data
        this.$store.commit("changeActive",S)
      })

    },
    subCount(iid,userid){
      let it =this.$store.state.cartList.find(item => item.iid===iid)
      if (it){
        if (it.count<= 1){
          it.count=1
        }else {
        it.count=(parseInt(it.count)-1)+""
        this.$http.put("updateCount?count="+it.count+"&iid="+iid+
          "&userid="+userid).then(res =>{
        })}
      }
    },
    addCount(iid,userid){
      let it =this.$store.state.cartList.find(item => item.iid===iid)
      if (it){
        it.count=(parseInt(it.count)+1)+""
        this.$http.put("updateCount?count="+it.count+"&iid="+iid+
          "&userid="+userid).then(res =>{})

      }
    }
  }

}
</script>

<style scoped>
.list-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
.item-count {
  font-size: 20px;
  flex: 1.5;
  text-align: center;
  width: 20px;
}
.add,.subtract{
  font-size: 20px;
  color: #8c939d;
  text-align: center;
  flex: 1;
}
.change-count{
  width: 60px;
  display: flex;
}
.blank{
  background-color: white;
  height: 89px;
}
</style>
