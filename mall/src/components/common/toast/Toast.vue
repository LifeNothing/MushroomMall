<template>
<div class="toast" v-show="isShow">
  <div>{{this.message}}</div>
</div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: "",
    isShow: false
  },data(){
    return{
    }
  },
  created() {

  }

}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;bottom: 50%;
  left: 50%;margin-left: -75px;
  text-align: center;
  color: white;
  background-color: var(--color-tint);
  z-index: 10000000;
  line-height: 25px;
  height: 25px;
  width: 150px;
}
</style>
