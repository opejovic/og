<template>
  <div
    class="min-h-screen bg-dfc-light dark:bg-dfc-dark text-dfc-dark dark:text-white"
  >
    <!-- Container -->
    <div class="mx-auto container max-w-screen-dfc">
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
import NavigationComponent from "@/components/NavigationComponent.vue";

export default defineComponent({
  components: {
    NavigationComponent,
  },
});
</script>
