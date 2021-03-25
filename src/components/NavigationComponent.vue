<template>
  <div id="nav" class="flex justify-between items-center py-8">
    <div class="flex items-center">
      <DfcLogo />
      <h4 class="ml-1 text-4xl tracking-tighter font-bold">og.</h4>
    </div>

    <div
      class="hidden md:flex items-center space-x-10 text-nav tracking-nav font-normal"
    >
      <router-link to="/" class="font-mono text-sm"
        ><span>01.</span> home</router-link
      >
      <router-link to="/about" class="font-mono text-sm"
        ><span>02.</span> about</router-link
      >
      <ThemeSwitcher />
    </div>

    <div class="block md:hidden">
      <button
        class="focus:outline-none outline-none relative z-50"
        @click="toggleMenu"
      >
        <svg
          id="menuIcon"
          class="duration-150"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2C0 0.895431 0.895431 0 2 0H8C9.10457 0 10 0.895431 10 2V8C10 9.10457 9.10457 10 8 10H2C0.895431 10 0 9.10457 0 8V2Z"
            fill="currentColor"
          />
          <path
            d="M12 2C12 0.895431 12.8954 0 14 0H20C21.1046 0 22 0.895431 22 2V8C22 9.10457 21.1046 10 20 10H14C12.8954 10 12 9.10457 12 8V2Z"
            fill="currentColor"
          />
          <path
            d="M0 14C0 12.8954 0.895431 12 2 12H8C9.10457 12 10 12.8954 10 14V20C10 21.1046 9.10457 22 8 22H2C0.895431 22 0 21.1046 0 20V14Z"
            fill="currentColor"
          />
          <path
            d="M12 14C12 12.8954 12.8954 12 14 12H20C21.1046 12 22 12.8954 22 14V20C22 21.1046 21.1046 22 20 22H14C12.8954 22 12 21.1046 12 20V14Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>

    <div
      v-show="show"
      class="absolute bg-dfc-light dark:bg-dfc-dark z-40 w-full p-10 inset-0 overflow-hidden"
    >
      <ul class="pt-10">
        <li @click="toggleMenu"><router-link to="/">· home</router-link></li>
        <li @click="toggleMenu">
          <router-link to="/about">· about</router-link>
        </li>
        <li><ThemeSwitcher /></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";
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
    const state = reactive({
      show: false,
    });

    const toggleMenu = () => {
      state.show = !state.show;
      const menuIcon = document.getElementById("menuIcon");
      menuIcon?.classList.toggle("rotate45");
    };

    return {
      ...toRefs(state),
      toggleMenu,
    };
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

.rotate45 {
  transform: rotate(45deg);
}
</style>