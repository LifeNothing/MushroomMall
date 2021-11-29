<template>
  <div class="navbar-detail">
      <div v-for="(item,index) in titles" class="tab-control-item"
           :class="{active: index === currentIndex}" @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    changeindex: null,

  },
  data() {
    return{
      currentIndex: 0,
      titles: ['商品','参数','评论','推荐'],
    }
  },
  name: "NavbarDetail",
  methods: {
    itemClick(index){
      this.currentIndex=index
      this.$emit('tabClick',index)
    },
  }


}
</script>

<style scoped>
.navbar-detail{
  display: flex;
  text-align: center;
  font-size: 15px;
}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: var(--color-tint);

}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>
