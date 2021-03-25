<template>
  <div>
    <div
      class="lg:flex lg:justify-between items-center pt-4 lg:pt-12 2xl:pt-28"
    >
      <div
        class="w-full text-center pt-2 md:pt-20 lg:pt-0 lg:text-left lg:w-3/4 text-5xl md:text-7xl lg:text-landing"
        style="
          font-style: normal;
          font-weight: 600;
          line-height: 108.1%;
          letter-spacing: -0.07em;
        "
      >
        <p>Hello.</p>
        I’m Ognjen, and I build things for the web.
        <p
          class="font-light relative pt-10 lg:pt-4"
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
      <div class="hidden lg:block">
        <SocialMediaLinks />
      </div>
    </div>

    <!-- Curly line -->
    <div class="pt-10 lg:pt-12 2xl:pt-16">
      <img
        class="block absolute w-full left-0"
        src="../assets/svgs/home-line.svg"
        alt="curly-line"
      />
    </div>
    <!-- End curly line -->

    <div
      class="mt-16 lg:mt-20 2xl:mt-24 block lg:flex justify-between items-center"
    >
      <JosefMullerBoxes class="mx-auto lg:mx-0" />
      <a
        class="block pt-10 lg:inline lg:pt-0 text-center"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        >hello@ognjen.dev</a
      >
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
