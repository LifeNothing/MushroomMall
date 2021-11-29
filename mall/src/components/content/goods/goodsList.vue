<template>
  <div class="goods" >
      <goods-list-item v-for="item in goods" :goodsitem="item" class="goods-item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./goodsListItem";
export default {
  name: "goodsList",
  components: {GoodsListItem},
  data(){
    return{

    }
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    },
  },
  }

</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

</style>
