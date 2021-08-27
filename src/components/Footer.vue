<template>
  <div class="fixed w-full bottom-3">
    <p class="p-0 text-xs text-center dark:text-white max-h-12">
      <a href="https://tailwindcss.com/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" class="logo">
          <defs><linearGradient x1="0" y1="-21.333" y2="85.333" id="A" x2="64" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2383ae" offset="0%"/><stop stop-color="#6dd7b9" offset="100%"/></linearGradient>
          </defs>
        <path d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z" fill="url(#A)" fill-rule="evenodd"/>
        </svg>
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" class="logo">
        <path d="M39.333 5.5L32 18.333 24.667 5.5H0L32 61 64 5.5z" fill="#42b883"/>
        <path d="M39.333 5.5L32 18.333 24.667 5.5H12.833L32 38.833 51.167 5.5z" fill="#35495e"/>
        </svg>
      </a>
    </p>
  </div>
</template>

<style scoped>
  a {
    @apply w-10 h-16 text-center inline-block;
  }
  .logo {
    @apply w-16 h-16 scale-30 grayscale hover:grayscale-0;
  }
</style>