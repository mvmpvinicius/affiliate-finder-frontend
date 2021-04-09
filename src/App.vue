<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar-component/NavBarComponent.vue";

export default {
  name: "AffiliateFinder",

  components: {
    NavBar,
  }
}
</script>

<style lang="scss">
body {
  background-color: #FAFAFA !important;
}
</style>
