<template>
  <!-- <a :href="link" target="_blank">
    <span class="tooltip"
      ><div class="tool-arrow"></div>
      {{tooptip}}
    </span>
    <slot/>
  </a> -->
  <tippy :content="tooptip" :placement="location" :theme="css" >
    <a :href="link" target="_blank">
    <slot/>
    </a>
  </tippy>
</template>

<script> 


export default {
  props: {
    link: {
      type: String
    },
    css: {
      type: String,
      default: "light"
    },
    location: {
      type: String,
      default: "bottom"
    },
    tooptip: {
      type: String,
      default: "Hello"
    }
  }
}
</script>

<style>

.tippy-content {
  @apply text-black dark:text-white;
}
  /* a {
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
  } */
</style>