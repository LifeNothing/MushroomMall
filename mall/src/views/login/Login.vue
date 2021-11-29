<template>
<div class="login">
  <nav-bar class="nav-bar">
    <div slot="left"><back-last></back-last></div>
    <div slot="center">账号登录</div>
  </nav-bar>
  <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px"
           :inline="true" class="demo-ruleForm">
    <el-form-item label="账号" prop="username">
      <el-input v-model="loginForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password" type="password"></el-input>
    </el-form-item>
  </el-form>
  <el-row class="button-container">
    <el-button round class="loginButton" @click="login">登录</el-button>
  </el-row>
</div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import BackLast from "../../components/common/backlast/BackLast";
import {getDetail} from "../../network/detail";
import CartList from "../cart/cartchild/CartList";

export default {
  name: "Login",
  components: {BackLast, NavBar},
  data() {
    return {
      results: {},
      topImages: [],
      CartList: [],
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ]}}},
  methods: {
    login(){
      this.$refs.loginForm.validate( valid =>{
        if (! valid) return;
        window.sessionStorage.setItem("loginInfo",JSON.stringify(this.loginForm))
        this.$http.post("login",this.loginForm).then(res =>{
          if (res!=null){
            let userMes = JSON.stringify(res)
            window.sessionStorage.setItem('UserMes',userMes)
            this.$store.state.profile="/profile"
            window.sessionStorage.setItem("profile","/profile")
            this.$router.push({path:"/profile"})

            // let userMessage=JSON.parse(window.sessionStorage.getItem('UserMes'))
            // for (let item of userMessage.data.cartList){
            //   let count=item.count
            //   let state=item.state
            //   let sid=item.sid
            //   let userid=item.userid
            //   this.iid=item.iid
            //
            //   getDetail(this.iid).then(res => {
            //     const product ={}
            //     this.topImages=res.data.result.itemInfo.topImages;
            //     this.results=res.data.result;
            //     product.image=this.topImages[0]
            //     product.title=this.results.skuInfo.title
            //     product.price=this.results.itemInfo.lowPrice
            //     product.desc=this.results.detailInfo.desc
            //     product.count=count
            //     product.active=state
            //     product.sid=sid
            //     product.userid=userid
            //     product.iid=this.iid
            //
            //     this.$store.state.cartList.unshift(product)
            //
            //   })
            // }
            // setTimeout(()=>{
            //   window.sessionStorage.setItem('cartList',JSON.stringify(this.$store.state.cartList))
            //
            //   console.log(JSON.parse(window.sessionStorage.getItem('cartList')));
            // },500)



          }
        })


      })
    }
  }
  }
</script>

<style scoped>
.login{

}
.nav-bar{
  border-bottom: #DCDCDEFF 1px solid;
}
.demo-ruleForm{
  margin-top: 120px;
  width: 100%;
}
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
