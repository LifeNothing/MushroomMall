<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{active: isActive}"><slot  name="item-text"></slot></div>
  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data() {
    return {
      pathIntermediary: this.path
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    if (this.path === "/cart"){
      // this.$store.state.cart="/login"
    }
    },

  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin-top: 4px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;

}
.active{
  color: red;
}
</style>
