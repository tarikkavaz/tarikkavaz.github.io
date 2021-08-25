<template>
  <div class="w-full p-4 text-center md:fixed md:bottom-3">
    <p class="text-xs">Keep it simple</p>
    <p class="flex justify-center">
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
      <a href="https://code.visualstudio.com/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" class="logo" fill="#007acc">
        <path d="M48 0v55L0 47.84 48 64l16-6.66V6.65zM31.2 9.36L16.5 23.9l-8.85-6.67L4 18.45l9 8.9-9 8.9 3.65 1.22 8.85-6.67 14.7 14.53L40 41.6V13.1zm0 10.37V35l-10.1-7.65z"/>
        </svg>
      </a>
    </p>
    
  </div>
</template>

<style scoped>
p {
  @apply dark:text-white;
}

.logo {
  @apply scale-35 w-16 h-16 grayscale hover:grayscale-0;
}
</style>