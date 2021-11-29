<template>
    <mt-swipe :auto="4000" class="mint-swipe">
      <slot></slot>
    </mt-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from "vue";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import "mint-ui/lib/style.css"
export default {
  name: "CommonSwiper"
}
</script>

<style scoped>
.mint-swipe{
height: 300px;
}

</style>
