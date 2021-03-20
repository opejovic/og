<template>
  <div>
    <div class="flex justify-between items-center pt-4 lg:pt-12 2xl:pt-28">
      <div
        class="w-3/4 text-landing text-7xl"
        style="
          font-style: normal;
          font-weight: 600;
          line-height: 108.1%;
          letter-spacing: -0.07em;
        "
      >
        <p>Hello.</p>
        I’m Og, and I design and build digital products.
        <p>Japanese style.</p>

        <p
          class="font-light relative"
          style="
            font-size: 24px;
            line-height: 120%;
            letter-spacing: -0.06em !important;
          "
        >
          <!-- You get complete digital product, crafted with bleeding-edge
        technologies, driven by data and research for added value. -->
          I can help you build bespoke high-quality web applications from
          scratch, using bleeding-edge technologies.
        </p>
      </div>
      <div>
        <SocialMediaLinks />
      </div>
    </div>

    <!-- Curly line -->
    <div class="pt-8 2xl:pt-16">
      <img
        class="hidden lg:block absolute w-full left-0"
        src="../assets/svgs/home-line.svg"
        alt="curly-line"
      />
    </div>
    <!-- End curly line -->

    <div class="mt-24 flex justify-between items-center">
      <JosefMullerBoxes />
      <a href="#" target="_blank" rel="noopener noreferrer">hello@ognjen.dev</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SocialMediaLinks from "@/components/SocialMediaLinks.vue";
import JosefMullerBoxes from "@/components/JosefMullerBoxes.vue";

export default defineComponent({
  name: "Home",
  components: {
    SocialMediaLinks,
    JosefMullerBoxes,
  },
});
</script>
