import Vue from 'vue'
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store =new Vuex.Store({
    state: {
      myOrder:[],
      orderList: [],
     copyCartList: [],
      cartList: [],
      allActive: {
        type: Boolean,
        default: false
      },
      profile: window.sessionStorage.getItem("profile") || "login",
      cart: "/cart",
    },
     getters: {

    },
    mutations: {
      copyList(state){
        state.copyCartList=state.cartList
      },
      stay(state){
        if (window.sessionStorage.getItem("key")){
        state.cartList=JSON.parse(window.sessionStorage.getItem("cartList"))}
        // state=JSON.parse(window.sessionStorage.getItem("store"))
      },
      addCart(state,payload){
        let oldProduct = state.cartList.find(item => item.iid === payload.iid)
        if (oldProduct){
          oldProduct.count+=1
        }else {
          payload.count=1
          payload.active=true
          state.cartList.push(payload)
        }
    },
      updateCount(state,){

      }
      ,
      changeActive(state,S){
        let it = state.cartList.find(item => item.sid === S.sid)
        if (it){
          it.active=S.nState+""
          // switch (it.active){
          //   case "0" :  it.active="1" ;
          //     break;
          //   case "1" :  it.active="0" ;
          //     break;}
        }
      },
      selectAll(state){
        for (let item of state.cartList){
          item.active=true
        }
      },
      unselectAll(state){
        for (let item of state.cartList){
          item.active=false
        }
      }
  },
  }
)

export default store
