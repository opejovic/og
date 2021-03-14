<template>
  <div id="nav" class="flex justify-between items-center py-8">
    <div class="flex items-center">
      <DfcLogo />
      <h4 class="ml-1 text-4xl tracking-tighter font-bold">og.</h4>
    </div>

    <div class="flex items-center space-x-10 text-nav tracking-nav font-normal">
      <router-link to="/">· home</router-link>
      <router-link to="/about">· about</router-link>
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DfcLogo from "./DfcLogo.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";

export default defineComponent({
  components: {
    DfcLogo,
    ThemeSwitcher,
  },
  name: "NavigationComponent",
  setup() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  a {
    &.router-link-exact-active {
      color: #8467d7;
    }
  }
}
</style>
