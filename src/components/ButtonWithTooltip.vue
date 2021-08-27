<template>
  <a :href="link" class="has-tooltip">
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
