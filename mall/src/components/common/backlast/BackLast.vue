<template>
<div class="back-last" @click="backLast">
  <img src="../../../assets/img/common/back.svg" alt="">
</div>
</template>

<script>
export default {
  name: "BackLast",
  methods: {
    backLast(){
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>
.back-last{
  padding-top: 7px;
}
  .back-last img{
    object-fit: fill;
  }
</style>
