<template>
  <a :href="link" target="_blank">
    <span class="tooltip"
      ><div class="tool-arrow"></div>
      {{tooptip}}
    </span>
    <slot/>
  </a>
</template>

<script> 
export default {
  props: {
    link: {
      type: String,
      default: "#"
    },
    tooptip: {
      type: String,
      default: "Hello"
    }
  }
}
</script>

<style scoped>
  a {
    @apply relative;
  }
  .tooltip {
    @apply transition duration-700 ease-in-out opacity-0 absolute p-2 mt-8 font-bold text-white bg-black rounded shadow-md transition ease-in-out duration-700 dark:text-black dark:bg-white;
  }
  a:hover .tooltip {
    @apply opacity-100 transition ease-in-out duration-700;
  }
  .tool-arrow {
    @apply transition duration-700 ease-in-out absolute w-3 h-3 -top-1 rotate-45 bg-black dark:bg-white;
  }
</style>