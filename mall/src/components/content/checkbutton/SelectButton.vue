<template>
<div class="check-button" >
  <img src="../../../assets/img/cart/tick.svg" alt="" :class="{check: midActive}">
</div>
</template>

<script>
export default {
  name: "SelectButton",
  data(){
    return{
      state: {
        type: Boolean
      }
    }
  },

  props: {
    isActive: ""
  },
  computed: {
    midActive(){
      switch (this.isActive){
        case "0" :  this.state=false ;
          break;
        case "1" :  this.state=true ;
          break;
      }
      return this.state
    }
  }
  // methods: {
  //   changeActive(){
  //     this.isActive=!this.isActive
  //   }
  // }
}
</script>

<style scoped>
.check-button img{
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border:2px solid #c0c0c0;
  vertical-align: middle;
  margin-bottom: 6px;
}
.check {
  border:2px solid var(--color-tint) !important;
  background-color: var(--color-tint);

}
</style>
