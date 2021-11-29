<template>
<div class="sideBar">
  <div @click="changeBar(index)" :class="{active: index===currentIndex}" class="sideBar-item"
  v-for="(item,index) in leftBar">{{item}}</div>
</div>
</template>

<script>
export default {
  name: "SideBar",
  data(){
    return{
      isActive: false,
      currentIndex: 0
    }
  },
  props:{
    leftBar: []
  },
  methods: {
    changeBar(index){
      this.currentIndex=index
    }
  }
}
</script>

<style scoped>
.sideBar{
  font-size: 16px;
  width: 100px;
  background-color: #F6F5F5FF;
}
.sideBar-item{
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;

}
.active{
  color: var(--color-tint);
  border-left: var(--color-tint) solid 5px;
  background-color: white;
}
</style>
