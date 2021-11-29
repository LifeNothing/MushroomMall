<template>
  <div class="cart-bottom-bar">
    <div class="total-check">
      <!--      <img src="~assets/img/cart/tick.svg" alt="">-->
      <select-button @click.native="selectAll" :isActive="this.$store.state.allActive"></select-button>
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计：￥{{totalPrice}}</span>
    </div>
    <div class="calc">
      去结算({{calcCount}})
    </div>
  </div>
</template>

<script>
import SelectButton from "../../../components/content/checkbutton/SelectButton";
export default {
  name: "Settlement",
  components: {SelectButton},
  data(){
    return{
      s: this.$store.state.cartList,
      isActive: {
        type: Boolean
      },
    }
  },

  methods: {
    selectAll(){
      let it =this.$store.state.allActive
      if (it===true){
        this.$store.state.allActive=false
        this.$store.commit('unselectAll')
      }else {
        this.$store.state.allActive=true
        this.$store.commit('selectAll')
      }
    }
  },
  computed: {
    totalPrice() {
      return this.s.filter(item =>{return item.active==="1"}).reduce((prev,item) =>{
        return prev + item.price*item.count
      },0).toFixed(2)
      // return this.$store.state.cartList.filter(item =>{
      //   return item.active===true}).reduce((prev,item) =>{
      //     return prev + item.price*item.count
      //   },0).toFixed(2)
    },
    calcCount(){
      return this.s.filter(item =>{return item.active==="1"}).reduce((prev,item) =>{
        return prev + item.count*1
      },0)
      // return this.$store.state.cartList.filter(item =>{
      //   return item.active===true}).reduce((prev,item) =>{
      //   return prev + item.count
      // },0)
    }
  }

}
</script>

<style scoped>
.cart-bottom-bar {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 49px;
  background: #eeeeee;
  display: flex;
  line-height: 40px;
  text-align: center;
}
.total-check {
  width: 25%;
  display: flex;
  justify-content: center;
}
.total-price {
  width: 50%;
}
.calc {
  width: 25%;
  background-color: #ff5028;
  color:#fff;
}

</style>
