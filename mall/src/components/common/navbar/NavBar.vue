<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

  </div>
</template>

<script>
import NavbarDetail from "./navbarDetail/NavbarDetail";
import BackLast from "../backlast/BackLast";
export default {
  name: "NavBar",
  components: {
    NavbarDetail,
    BackLast
  }
}
</script>

<style scoped>
  .nav-bar{
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 2;
  }
  .left,.right{
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .center{
    flex: 1;
  }

</style>
