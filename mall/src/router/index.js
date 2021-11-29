import Vue from 'vue'
import Router from 'vue-router'

import Cart from "../views/cart/Cart";
import Category from "../views/category/Category";
import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";
import Detail from "../views/detail/Detail";
import Login from "../views/login/Login";
import orderManage from "../views/orderManage/orderManage";
import confirmOrder from "../views/orderManage/confirmOrder";
Vue.use(Router)

export default new Router(
  {
    routes: [
      {
        path: "/",
        redirect: "/home"
      },{
        path: "/home",
        component: Home
      },
      {
        path: "/category",
        component: Category
      },{
        path: "/cart",
        component: Cart
      },{
        path: "/profile",
        component: Profile
      },{
        path: "/detail/:iid",
        component: Detail
      },{
        path: "/login",
        component: Login
      },{
        path: "/orderManage/:id",
        component: orderManage
      },{
        path: "/confirmOrder/:mes",
        component: confirmOrder
      }
    ],
    mode: 'history'
  }
)
