<template>
  <div>
    <div
      class="lg:flex lg:justify-between items-center pt-4 lg:pt-12 2xl:pt-28"
    >
      <div
        id="animateFirst"
        data-animate-in="fade"
        class="font-aktifo-semibold w-full pt-2 md:pt-20 lg:pt-0 text-center lg:text-left lg:w-3/4 text-5xl md:text-7xl lg:text-landing"
        style="line-height: 108.1%; letter-spacing: -0.07em"
      >
        <p>Hello.</p>
        I’m Ognjen, and I build things for the web.
        <p
          class="font-aktifo-book relative pt-10 lg:pt-4"
          style="
            font-size: 20px;
            line-height: 150%;
            letter-spacing: -0.06em !important;
          "
        >
          I can help you build bespoke high-quality web applications from
          scratch, using cutting-edge techologies.
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
        class="block pt-10 lg:inline lg:pt-0 text-center font-mono text-sm"
        href="mailto:ognjen@fullstacked.dev"
        rel="noopener noreferrer"
        >ognjen@fullstacked.dev</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { reactive, toRefs } from "vue";
import SocialMediaLinks from "@/components/SocialMediaLinks.vue";
import JosefMullerBoxes from "@/components/JosefMullerBoxes.vue";

export default defineComponent({
  name: "Home",
  components: {
    SocialMediaLinks,
    JosefMullerBoxes
  },

  setup() {
    onMounted(() => {
      const text = document.getElementById("animateFirst");

      if (!sessionStorage.loaded) {
        setTimeout(() => {
          text?.classList.add("in-view");
        }, 500);

        return (sessionStorage.loaded = true);
      }

      text?.classList.add("in-view");
    });

    const state = reactive({
      count: 0
    });

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
[data-animate-in] {
  opacity: 0;
  transition: transform 1s ease, opacity 1s ease;
}
[data-animate-in="up"] {
  transform: translate3d(0, 12px, 0);
}
[data-animate-in="left"] {
  transform: translate3d(-25%, 0, 0);
}
[data-animate-in="right"] {
  transform: translate3d(25%, 0, 0);
}
[data-animate-in="down"] {
  transform: translate3d(0, -12px, 0);
}
[data-animate-in="fade"] {
  transform: translate3d(0, 0, 0);
}
[data-animate-in].in-view {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transition: transform 0.6s ease, opacity 0.6s ease;
}
.fade-in {
  opacity: 0;
  transition: opacity 1s ease;
}
.page-loaded .fade-in,
.page-loaded.fade-in {
  opacity: 1;
}
</style>
