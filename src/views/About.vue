<template>
  <div class="flex justify-between pt-4 lg:pt-12 xl:pt-18">
    <!-- Left side -->
    <div class="w-3/5 pt-10 border-l border-dashed pl-6 border-gray-400">
      <div
        class="font-light pb-10 text-justify"
        style="font-size: 26px; letter-spacing: -0.04em"
      >
        I’m a freelancer specialising in website development, digital design, UX
        and UI. You get the skills and experience of an agency without the
        overheads and markup. I know my name can be hard to pronounce for
        non-balkan people, so feel free to call me Og.
      </div>

      <div class="flex justify-between tracking-tighter">
        <div class="pt-6 pb-8">
          <h3
            class="pb-6"
            style="font-weight: bold; font-size: 28px; line-height: 108.1%"
          >
            Discover
          </h3>
          <ul class="text-md space-y-1">
            <li>Listen</li>
            <li>Question</li>
            <li>Collaborate</li>
            <li>Research</li>
            <li>Prototype</li>
          </ul>
        </div>
        <div class="py-6 border-l border-gray-400 border-dashed pl-6">
          <h3
            class="pb-6"
            style="font-weight: bold; font-size: 28px; line-height: 108.1%"
          >
            Design
          </h3>
          <ul class="text-md space-y-1">
            <li>Digital</li>
            <li>UX / UI</li>
            <li>Print</li>
            <li>Motion</li>
            <li>Illustration</li>
          </ul>
        </div>
        <div class="py-6 border-l border-gray-400 border-dashed pl-6">
          <h3
            class="pb-6"
            style="font-weight: bold; font-size: 28px; line-height: 108.1%"
          >
            Develop
          </h3>
          <ul class="text-md space-y-1">
            <li>Full-stack</li>
            <li>Accessibility</li>
            <li>Ecommerce</li>
            <li>SEO / QA</li>
            <li>Cloud Hosting</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Right side -->
    <div class="flex items-center text-dfc-purple dark:text-dfc-lavender">
      <FourDashedBoxes />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FourDashedBoxes from "@/components/FourDashedBoxes.vue";

export default defineComponent({
  components: {
    FourDashedBoxes,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>