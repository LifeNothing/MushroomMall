<template>

  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <scroll class="content" ref="scroll"
            @backPosition="backPosition" @pullingUp="loadMore">
      <home-swiper/>
      <RecommendView :recommends="recommends"></RecommendView>
      <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType].list" @toDetail="toDetail"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>

</template>
<script>


import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";

import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";
import Scroll from "../../components/common/scroll/Scroll";

import {getHomeMultidata,getHomeGoods} from "../../network/home";

import goodsList from "../../components/content/goods/goodsList";
import BackTop from "../../components/content/backtop/BackTop";

export default {
  name: "Home",
  components: {
    BackTop,
    Scroll,
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControl,
    goodsList,

  },data(){
    return {
      isShow: false,
      banners: [],
      recommends: [],
      goods:{
        'pop': {page: 0,list: []},
        'new': {page: 0,list: []},
        'sell': {page: 0,list:[]}
      },
      currentType: 'pop'
    }
  },created() {
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    getHomeMultidata().then(res =>{
      this.banners=res.data.data.banner.list
      this.recommends=res.data.data.recommend.list

    })

   },
  methods: {
    toDetail() {
      this.$emit('ToDetail')
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()

    },
    backPosition(position){
      this.isShow= (-position.y)>1000
    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    tabClick(index){
      switch (index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
              break
        case 2:
          this.currentType='sell'
          break
      }
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type ,page).then(res =>{
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page +=1
        this.$refs.scroll.scroll.finishPullUp()
      })
    }
  }

}

</script>

<style scoped>
  #home{
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
  .tab-control{
    position: sticky;
    top: 40px;
  }
  .blank{
    height: 1000px;
  }
  .content{
    height: calc(100% - 93px);
    overflow: hidden;
  }


</style>
