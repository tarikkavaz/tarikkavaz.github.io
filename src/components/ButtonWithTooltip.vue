<template>
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
</style>