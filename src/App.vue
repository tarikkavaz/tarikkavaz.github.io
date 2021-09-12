<template>
  <HomeDesktop v-if="!isMobile()"></HomeDesktop>
  <HomeMobile v-else></HomeMobile>
  <Blob />
</template>

<script>
  import Blob from "./components/Blob.vue";
  import HomeDesktop from "./components/HomeDesktop.vue";
  import HomeMobile from "./components/HomeMobile.vue";
  import skrollr from "skrollr";
  
  export default {
    components: {
      Blob,
      HomeDesktop,
      HomeMobile,
    },

    mounted() {
      var s = skrollr.init();
      if (s.isMobile()) {
        s.destroy();
      }
    },
    
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
  h3, p, li {
    @apply transition duration-700 ease-in-out text-gray-800 dark:text-gray-100;
  }
</style>