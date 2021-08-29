<template>
  <tippy :content="tooptip" :placement="location" :theme="css" ref="tooptipBtn">
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
    },
    created() {
      setTimeout(() => this.$refs.tooptipBtn.tippy.hide(), 3000);
    }
  }
</script>

<style>
  a {
    @apply w-6 h-6;
  }
</style>
