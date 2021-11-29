<template>
  <div class="goodsList-item" @click="ToDetail">
    <img :src="goodsitem.show.img" alt="" >
    <div class="item-title">{{goodsitem.title}}</div>
    <div class="item-price">{{goodsitem.price}}</div>
  </div>
</template>

<script>
export default {
  name: "goodsListItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },methods: {
    ToDetail() {
      this.$router.push('/detail/'+this.goodsitem.iid)
    }

  }
}
</script>

<style scoped>
.goodsList-item{
  padding: 4px;
  width: 50%;
}
.goodsList-item img{
  width: 100%;
  border-radius: 5px;
}
.item-title{
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  white-space: nowrap;
  text-align: center;

}
.item-price{
  color: var(--color-tint);
  text-align: center;
}
</style>
