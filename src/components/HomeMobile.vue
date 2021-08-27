<template>
  <div class="container z-50 grid-flow-row grid-cols-1 px-5 py-10">
    <div class="max-h-40">
      <Header />
    </div>
    <div class="relative z-50 w-full col-span-2 p-7 font-titillium">
      <div class="mt-20"><HelloWorld /></div>
      <div class="mt-20"><DesignAndCoding /></div>
      <div class="mt-20"><Clients /></div>
    </div>
  </div>
</template>

<script>
  import Header from "./Header.vue";
  import HelloWorld from "./content/HelloWorld.vue";
  import DesignAndCoding from "./content/DesignAndCoding.vue";
  import Clients from "./content/Clients.vue";

  export default {
    components: {
      Header,
      HelloWorld,
      DesignAndCoding,
      Clients,
    },
  };
</script>
