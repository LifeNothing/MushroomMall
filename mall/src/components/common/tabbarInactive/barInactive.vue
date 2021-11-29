<template>
  <div class="tab-bar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "barInactive"
}
</script>

<style scoped>
.tab-bar-item{
  font-size: 13px;
  flex: 1;
  text-align: center;
  height: 49px;
  margin-top: 4px;
}
</style>
