<template>
  <div id="nav" class="flex justify-between items-center py-8">
    <div class="flex items-center">
      <DfcLogo />
      <h4 class="ml-1 text-4xl tracking-tighter font-bold font-aktifo-semibold">
        og.
      </h4>
    </div>

    <div class="hidden md:flex items-center space-x-10 text-nav tracking-nav">
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
        class="focus:outline-none outline-none relative z-50 mr-4 mt-2"
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
      class="bg-dfc-light dark:bg-dfc-dark z-40 w-full p-10 h-screen inset-0 fixed flex items-center justify-center"
    >
      <ul class="block font-mono  text-md sm:text-2xl w-full text-center">
        <li @click="toggleMenu" class="py-2">
          <router-link to="/">01. home</router-link>
        </li>
        <li @click="toggleMenu" class="py-2">
          <router-link to="/about">02. about</router-link>
        </li>
        <li class="py-4">
          <svg
            class="mx-auto"
            width="361"
            height="16"
            viewBox="0 0 361 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L12.1675 9.88321C18.4758 14.9012 27.441 14.7991 33.6335 9.63875L34.623 8.81413C40.2269 4.14424 48.1854 3.56999 54.4017 7.38698L63.5253 12.9892C69.0236 16.3654 75.9593 16.3379 81.4308 12.9183L91.0546 6.90341C96.7907 3.3183 104.107 3.47509 109.684 7.30265L115.867 11.5461C121.915 15.6965 129.943 15.5 135.78 11.0584L138.352 9.10199C144.599 4.34853 153.289 4.49092 159.377 9.44652L160.233 10.1429C166.27 15.0572 174.874 15.2426 181.118 10.5931L184.055 8.40571C189.981 3.99308 198.078 3.91277 204.09 8.20698L208.41 11.293C214.422 15.5872 222.519 15.5069 228.445 11.0943L231.846 8.56113C237.872 4.07411 246.128 4.07411 252.154 8.56113L255.139 10.7843C261.183 15.2856 269.55 14.956 275.222 9.99319L275.789 9.49712C281.382 4.60318 289.704 4.50294 295.413 9.26073L297.392 10.91C302.488 15.1571 310.024 14.6461 314.5 9.75V9.75C318.976 4.85387 326.512 4.34294 331.608 8.58997L333.081 9.81722C338.935 14.6962 347.576 14.1769 352.804 8.63175L360 1"
              stroke="#B8B8B8"
              stroke-width="0.6"
            />
          </svg>
        </li>
        <li class="py-2">
          <a href="https://github.com/opejovic" target="_blank">Github</a>
        </li>
        <li class="py-2">
          <a href="https://twitter.com/opejovic" target="_blank">Twitter</a>
        </li>
        <li class="pt-2 pb-4">
          <a
            href="https://www.linkedin.com/in/ognjen-pejovic-831a191b/"
            target="_blank"
            >LinkedIn</a
          >
        </li>
        <li class="pt-2 pb-4">
          <a
            href="https://www.youtube.com/channel/UC-61NDn69uOsnVkXePclebg"
            target="_blank"
            >Youtube</a
          >
        </li>
        <li class="py-4">
          <svg
            class="mx-auto"
            width="361"
            height="16"
            viewBox="0 0 361 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L12.1675 9.88321C18.4758 14.9012 27.441 14.7991 33.6335 9.63875L34.623 8.81413C40.2269 4.14424 48.1854 3.56999 54.4017 7.38698L63.5253 12.9892C69.0236 16.3654 75.9593 16.3379 81.4308 12.9183L91.0546 6.90341C96.7907 3.3183 104.107 3.47509 109.684 7.30265L115.867 11.5461C121.915 15.6965 129.943 15.5 135.78 11.0584L138.352 9.10199C144.599 4.34853 153.289 4.49092 159.377 9.44652L160.233 10.1429C166.27 15.0572 174.874 15.2426 181.118 10.5931L184.055 8.40571C189.981 3.99308 198.078 3.91277 204.09 8.20698L208.41 11.293C214.422 15.5872 222.519 15.5069 228.445 11.0943L231.846 8.56113C237.872 4.07411 246.128 4.07411 252.154 8.56113L255.139 10.7843C261.183 15.2856 269.55 14.956 275.222 9.99319L275.789 9.49712C281.382 4.60318 289.704 4.50294 295.413 9.26073L297.392 10.91C302.488 15.1571 310.024 14.6461 314.5 9.75V9.75C318.976 4.85387 326.512 4.34294 331.608 8.58997L333.081 9.81722C338.935 14.6962 347.576 14.1769 352.804 8.63175L360 1"
              stroke="#B8B8B8"
              stroke-width="0.6"
            />
          </svg>
        </li>
        <li>
          <ThemeSwitcher :showIcon="false" />
        </li>
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

      document.body.classList.remove("overflow-hidden");

      if (state.show) {
        document.body.classList.add("overflow-hidden");
      }

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