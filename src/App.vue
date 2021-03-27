<template>
  <div
    class="min-h-screen antialiased container max-w-screen-dfc xl:max-w-screen-xl mx-auto px-4 lg:px-10 font-aktifo"
  >
    <NavigationComponent />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease-in-out;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>