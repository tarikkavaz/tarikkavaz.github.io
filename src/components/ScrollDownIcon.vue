<template>
  <div class="items-center justify-center hidden col-span-1 pt-32 md:flex">
    <svg
      viewBox="0 0 247 390"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class="w-10 h-auto fill-current"
    >
      <path
        d="M123.359,79.775l0,72.843"
        class="stroke-current animate-scroll stroke-15"
      />
      <path
        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
        class="stroke-current stroke-15 fill-none"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
  svg {
    @apply h-11
  }
  path {
    @apply transition duration-700 ease-in-out text-gray-600 dark:text-white;
  }
</style>