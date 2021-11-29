<template>
  <div>
    <SideBar :leftBar="leftBar"></SideBar>
  </div>
</template>

<script>
import SideBar from "../../components/content/sidebar/SideBar";
import {getCategory} from "../../network/category";
export default {
  name: "Category",
  components: {SideBar},
  data(){
    return{
      leftBar: []
      // '正在流行','上衣','裤子','裙子','内衣','女鞋','男友',
      // '包包','运动','配饰','美妆','个护','家居','百货','母婴','食品'
    }
  },
  created() {
    getCategory().then(res => {
      console.log(res.data.data.category.list);
      for (let item of res.data.data.category.list){
        this.leftBar.push(item.title)
      }
    })
  }
}
</script>

<style scoped>

</style>
