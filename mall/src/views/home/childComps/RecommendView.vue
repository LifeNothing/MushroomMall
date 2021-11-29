<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link" id="qqq">
        <img :src="item.image" alt="">
        <div class="recommend-title" id="123">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  padding-bottom: 40px;

}
.recommend-item{
  padding-top: 10px;
  flex: 1;
}
.recommend .recommend-item .recommend-title{
  color: var(--color-text);
  font-size: 14px;
  text-decoration: none;

}
  .recommend-item img{
    width: 60px;
    height: 60px;
  }
  #qqq{
    text-decoration: none;
  }
</style>
