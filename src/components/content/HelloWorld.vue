<template>
  <h3 class="mb-4 text-3xl font-bold">Hello World,</h3>
  <p>
    I'm <span class="font-semibold">Tarık Kavaz</span>, Designer & Coder;
    <span class="text-base"> Movie, Music & Animal Lover</span>.
  </p>
  <p class="my-4 text-2xl font-bold">My expertise lies in</p>
  <ul class="pl-5 list-disc">
    <li>Corporate Identity Design</li>
    <li>Logo Design</li>
    <li>Website Planning & Architecture</li>
    <li>Heuristic Evaluation for Usability & Accessibility</li>
    <li>User Interface Design</li>
    <li>
      Cross-Browser Compatible, Modular, Scalable, Responsive, Template Based
      Design & Front-end Development for Websites
    </li>
    <li>Back-end Development for Custom Web Applications</li>
  </ul>
  <p class="tag">
    
    <span v-if="!isMobile()">Scroll down or use Arrow keys</span>
    <span v-else> Swipe down</span> for more.
    </p>
</template>

<style scoped>
  .tag {
    @apply inline-block px-2 py-1 mt-3 ml-5 text-xs text-white bg-dotgreen rounded shadow-md;
  }
</style>