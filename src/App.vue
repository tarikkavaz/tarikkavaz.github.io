<template>
  <HomeDesktop v-if="!isMobile()"></HomeDesktop>
  <HomeMobile v-else></HomeMobile>
  <Blob />
  <Iban />
  <Works />
  <Invoice />
</template>

<script>
  import Blob from "./components/Blob.vue";
  import Iban from "./components/Iban.vue";
  import Works from "./components/Works.vue";
  import Invoice from "./components/Invoice.vue";
  import HomeDesktop from "./components/HomeDesktop.vue";
  import HomeMobile from "./components/HomeMobile.vue";
  import skrollr from "skrollr";

  export default {
    components: {
      Blob,
      Iban,
      Works,
      Invoice,
      HomeDesktop,
      HomeMobile
    },
    mounted() {
      var s = skrollr.init();
      if (s.isMobile()) {
        s.destroy();
      }
    }
  };
</script>

<style>
  html {
    @apply min-h-screen;
  }
  html,
  body {
    @apply min-h-full h-full overscroll-none;
  }
  body {
    @apply transition duration-700 ease-in-out bg-fixed bg-gradient-to-b from-gray-50 to-gray-300 dark:from-gray-600 dark:to-gray-900;
  }
  h3,
  p,
  li {
    @apply transition duration-700 ease-in-out text-gray-800 dark:text-gray-100;
  }
</style>
