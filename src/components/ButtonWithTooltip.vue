<template>
  <tippy :content="tooptip" :placement="location" :theme="css" >
    <a :href="link" :target="linkTarget">
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
      linkTarget: {
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
  a {
    @apply w-6 h-6;
  }
</style>