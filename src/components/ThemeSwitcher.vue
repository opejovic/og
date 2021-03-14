<template>
  <button
    class="mr-2 border border-dfc-dark dark:border-white p-2 rounded-full"
    @click.prevent="toggleTheme"
  >
    <svg
      class="icon icon--theme"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      fill="currentColor"
    >
      <path
        d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"
      ></path>
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const toggleTheme = () => {
      const toggled = document.documentElement.classList.toggle("dark");
      const theme = toggled ? "dark" : "light";

      localStorage.setItem("theme", theme);
    };

    return {
      toggleTheme,
    };
  },
});
</script>

<style scoped>
</style>