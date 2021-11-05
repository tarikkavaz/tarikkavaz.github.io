<template>
  <div
    class="container fixed z-50 grid-flow-row grid-cols-1 mx-5 my-10 md:grid md:grid-cols-3 md:-translate-x-1/2 md:left-1/2 auto-rows-fr"
  >
    <div class="col-span-3 max-h-40">
      <Header />
    </div>
    <div class="relative w-full col-span-2 mt-14 font-titillium">
      <div
        class="box"
        data-0p="opacity: 1; visibility: visible;"
        data-32p="opacity: .5; visibility: visible;"
        data-50p="opacity: 0; visibility: hidden;"
      >
        <HelloWorld />
      </div>
      <div
        class="box"
        data-0p="opacity: 0; visibility: hidden;"
        data-33p="opacity: .5; visibility: visible;"
        data-50p="opacity: 1; visibility: visible;"
        data-79p="opacity: .5; visibility: visible;"
        data-99p="opacity: 0; visibility: hidden;"
      >
        <DesignAndCoding />
      </div>
      <div
        class="box"
        data-0p="opacity: 0; visibility: hidden;"
        data-80p="opacity: .5; visibility: visible;"
        data-99p="opacity: 1; visibility: visible;"
      >
        <Clients />
      </div>
    </div>
    <ScrollDownIcon />
  </div>
  <ScrollIndicator />
  <div class="container fixed z-50 flex flex-row justify-center bottom-3 md:-translate-x-1/2 md:left-1/2">
    <Footer />
  </div>
</template>

<script>
  import Header from "./Header.vue";
  import Footer from "./Footer.vue";
  import ScrollDownIcon from "./ScrollDownIcon.vue";
  import ScrollIndicator from "./ScrollIndicator.vue";
  import HelloWorld from "./content/HelloWorld.vue";
  import DesignAndCoding from "./content/DesignAndCoding.vue";
  import Clients from "./content/Clients.vue";
  export default {
    components: {
      ScrollDownIcon,
      ScrollIndicator,
      Header,
      Footer,
      HelloWorld,
      DesignAndCoding,
      Clients,
    },
  data() {
    return {
      scrollAmount: 0.5
    };
  },
  methods: {
    scrollView(amount) {
      let scrollFromTop = window.pageYOffset;
      const viewHeight = Math.round(window.innerHeight * Math.abs(amount));
      if (scrollFromTop % viewHeight === 0) scrollFromTop += Math.sign(amount);
      let targetPos;
      if (amount > 0)
        targetPos = Math.ceil(scrollFromTop / viewHeight) * viewHeight;
      else
        targetPos = Math.floor(scrollFromTop / viewHeight) * viewHeight;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth"
      });
    },
    keyHandler(e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.scrollView(this.scrollAmount); 
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.scrollView(this.scrollAmount * -1); 
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.keyHandler);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.keyHandler);
  }
  };
</script>

<style scoped>
  .box {
    @apply px-6 w-full absolute text-xl;
  }
</style>