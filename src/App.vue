<template>
  <div class="min-h-screen">
    <!-- Container -->
    <div class="mx-auto container xl:max-w-screen-dfc 2xl:max-w-screen-2xl">
      <div>
        <NavigationComponent />
      </div>

      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { onBeforeMount } from "vue";
import NavigationComponent from "@/components/NavigationComponent.vue";

export default defineComponent({
  components: {
    NavigationComponent,
  },

  setup() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return {};
  },
});
</script>
