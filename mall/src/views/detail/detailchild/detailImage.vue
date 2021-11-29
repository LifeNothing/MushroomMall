<template>
<div class="detail-image">
  <div v-for="item in detailImage">
    <div v-for="smallItem in item.list">
      <img :src="smallItem" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "detailImage",
  props: {
    detailImage: {}
  },
  created() {

  }
}
</script>

<style scoped>
img{
  width: 100%;
}
</style>
