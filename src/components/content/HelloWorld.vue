<template>
  <h3 class="mb-4 text-3xl font-bold">Hello World,</h3>
  <p>
    I'm <span class="font-semibold">Tarık Kavaz</span>, Designer & Coder;
    <span class="text-base"> Movie, Music & Animal Lover</span>.
  </p>
  <!-- <p class="my-4 text-2xl font-bold">My expertise lies in</p>
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
  </ul> -->
  <p class="my-4">With over 20 years of experience in the digital space, I specialize in creating user-centric web solutions that
    balance creativity, usability, and functionality. My expertise spans across:</p>
    <ul class="pl-5 list-disc">
    <li>Corporate Identity &amp; Logo Design</li>
    <li>Website Planning &amp; Architecture</li>
    <li>User Interface (UI) &amp; User Experience (UX) Design</li>
    <li>Heuristic Evaluation for Usability &amp; Accessibility</li>
    <li>Cross-Browser Compatible, Modular, Scalable, and Responsive Web Development</li>
    <li>Front-end and Back-end Development for Custom Web Applications</li>
  </ul>
  <p class="my-4">For the last 4-5 years, I have also led and managed a team, refining my skills in leadership, project oversight,
    and collaboration. I am well-versed in a wide range of technologies and tools, including Adobe Photoshop,
    Illustrator, XD, HTML, SCSS, JavaScript, Nuxt.js, Next.js, Electron.js, Python, and Django.</p>
  <p class="my-4">I ensure that every web solution I deliver is not only aesthetically pleasing but also functional, accessible, and
    optimized for a seamless user experience. I aim to help businesses enhance their digital presence and brand identity
    by delivering high-quality, scalable solutions tailored to their specific needs.</p>
  <p class="inline-block px-2 py-1 mt-3 text-xs text-white rounded shadow-md bg-dotgreen">

    <span v-if="!isMobile()">Scroll down or use Arrow keys</span>
    <span v-else> Swipe down</span> for more.
  </p>
</template>
