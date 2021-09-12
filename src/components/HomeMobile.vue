<template>
  <div class="container z-50 grid-flow-row grid-cols-1 px-5 py-10">
    <div class="max-h-40">
      <Header />
    </div>
    <div class="relative z-50 w-full col-span-2 px-7 font-titillium">
      <div class="mt-20"><HelloWorld /></div>
      <div class="mt-20"><DesignAndCoding /></div>
      <div class="mt-20"><Clients /></div>
      <div class="container relative z-50 flex flex-row justify-center mt-20 bottom-3 md:-translate-x-1/2 md:left-1/2">
        <Footer />
      </div>
    </div>
    
  </div>
</template>

<script>
  import Header from "./Header.vue";
  import Footer from "./Footer.vue";
  import HelloWorld from "./content/HelloWorld.vue";
  import DesignAndCoding from "./content/DesignAndCoding.vue";
  import Clients from "./content/Clients.vue";

  export default {
    components: {
      Header,
      HelloWorld,
      DesignAndCoding,
      Clients,
      Footer,
    },
  };
</script>
