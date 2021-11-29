<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data(){
    return{
      scroll: null
    }
  },
  mounted() {
    this.scroll=new BScroll(this.$refs.wrapper,{
      mouseWheel: true,
      click: true,
      tap: true,
      disableMouse: false,
      disableTouch: false,
      observeDOM: true,
      probeType: 3,
      pullUpLoad: {
        threshold: 15
      }
    })
    this.scroll.on('scroll',(position) => {
      this.$emit('backPosition',position)
    })
    this.scroll.on("pullingUp",() =>{
      this.$emit('pullingUp')
    })
  },
}
</script>

<style scoped>
.wrapper{

}
.content{

}
</style>
