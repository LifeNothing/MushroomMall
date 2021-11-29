<template>
  <mt-swipe :auto="4000" >
    <mt-swipe-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </mt-swipe-item>

  </mt-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from "vue";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import {getHomeMultidata} from "../../../network/home";

export default {
  name: "HomeSwiper",
  data(){
    return {
      banners: [],
      recommends: []}
  },created() {
    getHomeMultidata().then(res =>{
      this.banners=res.data.data.banner.list
      this.recommends=res.data.data.recommend.list

    })

  }

}
</script>

<style scoped>
  .mint-swipe{
    height: 150px;
}
  img{
    height: 100%;
    width: 100%;
}
</style>
