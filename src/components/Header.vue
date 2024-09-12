<template>
  <div class="z-50 grid grid-cols-2 ml-3 font-light md:grid-cols-3 font-dosis">
    <div class="flex items-center justify-items-start">
      <svg
        viewBox="0 0 1856.41 1903.46"
        class="w-20 h-20 md:w-32 md:h-32 animate-wiggle"
        title="Logo"
      >
        <defs>
          <symbol id="a" viewBox="0 0 378.03 387.61">
            <path
              d="M43.19,325,2,230.24a24.09,24.09,0,0,1,12.48-31.69L305.16,72.17a24.06,24.06,0,0,1,31.68,12.48L378,179.37Z"
              class="text-black fill-current"
            />
            <polygon 
              points="316.06 336.55 198.63 387.61 153.33 283.42 270.75 232.36 316.06 336.55"
              class="text-black fill-current"
            />
            <polygon
              points="215.03 104.19 97.6 155.25 52.3 51.06 169.72 0 215.03 104.19"
              class="text-black fill-current"
            />
            <path
              class="fill-current text-dotred"
              d="M40.31,237.84h0a14,14,0,0,1-18.37-7.24h0a14,14,0,0,1,7.23-18.38h0a14,14,0,0,1,18.38,7.24h0A14,14,0,0,1,40.31,237.84Z"
            />
            <path
              class="fill-current text-dotyellow"
              d="M72.91,223.66h0a14,14,0,0,1-18.37-7.24h0A14,14,0,0,1,61.78,198h0a14,14,0,0,1,18.37,7.24h0A14,14,0,0,1,72.91,223.66Z"
            />
            <path
              class="fill-current text-dotgreen"
              d="M105.68,209.85h0a14.42,14.42,0,0,1-18.91-7.44h0a14.41,14.41,0,0,1,7.45-18.91h0a14.41,14.41,0,0,1,18.9,7.45h0A14.41,14.41,0,0,1,105.68,209.85Z"
            />
          </symbol>
        </defs>
        <use
          width="378.03"
          height="387.61"
          transform="translate(0 0) scale(4.91)"
          xlink:href="#a"
        />
      </svg>
    </div>
    <div class="flex flex-col items-center justify-center h-full">
      <h1 class="text-3xl font-medium text-gray-400 transition duration-700 ease-in-out md:font-thin sm:text-5xl dark:text-gray-300">
        TA<span class="font-medium text-gray-800 dark:text-gray-500"
          >RI<span class="font-bold text-black transition duration-700 ease-in-out dark:text-gray-800">KK</span>AV</span
        >AZ
      </h1>
      <h2 class="text-xl text-gray-500 transition duration-700 ease-in-out sm:text-3xl dark:text-gray-100">Designer & Coder</h2>
    </div>
    <div class="z-50 flex items-center justify-center h-full col-span-2 mt-5 md:col-span-1 md:mt-0">
      <div class="grid grid-cols-4 gap-x-4 md:gap-x-6 gap-y-1">
        <div class="h-12 col-span-4">
          <div class="grid justify-end">
            <ButtonWithTooltip v-if="!isMobile()"
            location="left" 
            tooptip="Toggle Appearance / Press D" 
            showOnCreate="true" 
            trigger="manual" 
            :hideOnClick="false" 
            :followCursor="false"> 
              <span ref="toggleDark" class="cursor-pointer" @click="toggleDarkMode">
                <svg class="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
              </span>
            </ButtonWithTooltip>
            <ButtonWithTooltip v-else
            location="left" 
            tooptip="Toggle Appearance" 
            showOnCreate="true" 
            trigger="manual" 
            :hideOnClick="false" 
            :followCursor="false"> 
              <span ref="toggleDark" class="cursor-pointer" @click="toggleDarkMode">
                <svg class="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
              </span>
            </ButtonWithTooltip>
          </div>
        </div>
        <ButtonWithTooltip location="bottom" link="mailto:hello@tarikkavaz.com" tooptip="hello@tarikkavaz.com"> 
          <svg
            aria-hidden="true"
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              class="fill-current"
              d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"
              alt="e-mail"
            ></path>
          </svg>
        </ButtonWithTooltip>
        <ButtonWithTooltip location="bottom" link="https://www.upwork.com/freelancers/~01cfda6cbcce8badfa" linkTarget="_blank" tooptip="Upwork"> 
          <svg 
          aria-hidden="true"
          class="icon"
          viewBox="0 0 54 54" 
          xmlns="http://www.w3.org/2000/svg"
          >
          <g class="fill-current">
            <path d="M38.8,24.6c-2.8,0-3.7,2.7-3.9,4.3v0.1l-0.4,1.5c1.2,1,2.7,1.7,4.2,1.7c2,0,3.8-1.7,3.9-3.9C42.6,26.3,40.9,24.6,38.8,24.6   z"/>
            <path d="M28.9,3.7C15.2,3.7,4.1,14.8,4.1,28.5c0,13.7,11.1,24.8,24.8,24.8c13.7,0,24.8-11.1,24.8-24.8C53.7,14.8,42.6,3.7,28.9,3.7   z M38.8,36.1c-2,0-3.7-0.6-5.2-1.5l-1.7,8H28l2.4-11c-1-1.4-2-3-2.7-4.5v1.7c0,4.1-3.3,7.4-7.3,7.4c-4,0-7.3-3.3-7.3-7.4v-10h3.8   v10c0,2,1.6,3.6,3.6,3.6c2,0,3.6-1.6,3.6-3.6v-10h3.8c0.8,2.5,2.1,5.5,3.8,8.2c1-3.8,3.8-6.1,7.3-6.1c4.1,0,7.5,3.4,7.5,7.5   C46.3,32.7,42.9,36.1,38.8,36.1z"/>
          </g>
        </svg>
        </ButtonWithTooltip>
        <ButtonWithTooltip location="bottom" link="https://github.com/tarikkavaz" linkTarget="_blank" tooptip="GitHub"> 
          <svg
            aria-hidden="true"
            class="icon"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              class="fill-current"
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            ></path>
          </svg>
        </ButtonWithTooltip>
        <ButtonWithTooltip location="bottom" link="https://www.linkedin.com/in/tarikkavaz" linkTarget="_blank" tooptip="Linkedin"> 
          <svg
            aria-hidden="true"
            class="icon"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              class="fill-current"
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            ></path>
          </svg>
        </ButtonWithTooltip>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonWithTooltip from './ButtonWithTooltip.vue'
  export default {
    components: {
      ButtonWithTooltip,
    },
    methods: {
      toggleDarkMode(theme, evt) {
        let htmlElm = document.querySelector("html");
        const setLight = () => {
          htmlElm.classList.remove("dark");
          localStorage.theme = "light";
          this.$refs.toggleDark.innerHTML = "<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='moon' class='icon' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z'></path></svg>";
        };
        const setDark = () => {
          htmlElm.classList.add("dark");
          localStorage.theme = "dark";
          this.$refs.toggleDark.innerHTML = "<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='sun' class='icon' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z'></path></svg>";
        };
        if (typeof theme === "string") {
          if (theme == "dark") setDark();
          else setLight();
        } else {
          if (localStorage.theme === "dark") setLight();
          else setDark();
        }
      },
    },
    mounted() {
      this.toggleDarkMode(localStorage.theme);
      this._keyListener = function(e) {
          if (e.key === "d" ) {
              e.preventDefault(); 
              this.toggleDarkMode();
          }
      };
      document.addEventListener('keydown', this._keyListener.bind(this));
    },
    created() {
      if (!("theme" in localStorage)) localStorage.theme = "dark";
    },
  };
</script>

<style>
  .icon {
    @apply transition duration-700 ease-in-out w-6 h-6  hover:fill-current text-gray-900 dark:text-gray-100;
  }
  .tippy-box {@apply bg-gray-700 dark:bg-gray-100;}
  .tippy-backdrop {@apply text-gray-700 dark:text-gray-100;}
  .tippy-arrow {@apply text-gray-700 dark:text-gray-100;}
  .tippy-content {@apply text-gray-100 dark:text-gray-900;}
</style>