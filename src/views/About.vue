<template>
  <div class="flex justify-between pt-4 2xl:pt-20">
    <!-- Left side -->
    <div class="w-3/5 pt-10 border-l border-dashed pl-10 border-gray-400">
      <div
        class="font-light pb-10 text-justify"
        style="font-size: 26px; line-height: 118.6%; letter-spacing: -0.04em"
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
        <div class="py-6 border-l border-gray-400 border-dashed pl-10">
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
        <div class="py-6 border-l border-gray-400 border-dashed pl-10">
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
    <div class="flex items-center">
      <svg
        width="246"
        height="150"
        viewBox="0 0 246 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 110L0 80H30V110H0Z" fill="#007DA4" />
        <path d="M30 110V80H60V110H30Z" fill="currentColor" />
        <path d="M156 110V80H186V110H156Z" fill="currentColor" />
        <path d="M216 110V80H246V110H216Z" fill="#F1B901" />
        <path d="M100 110V80H130V110H100Z" fill="#D80630" />
        <path d="M100 150V120H130V150H100Z" fill="#9A968A" />
        <path d="M100 30V0L130 0V30H100Z" fill="#9A968A" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>