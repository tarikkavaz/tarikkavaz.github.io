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
      <div class="grid grid-cols-6 gap-x-6 gap-y-1">
        <div class="h-12 col-span-6">
          <div class="grid justify-end">
            <ButtonWithTooltip location="left" tooptip="Toggle Appearance / Press D" showOnCreate="true" trigger="manual" hideOnClick="toggle"> 
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
        <ButtonWithTooltip location="bottom" link="https://twitter.com/tarikkavaz" linkTarget="_blank" tooptip="Twitter"> 
          <svg
            aria-hidden="true"
            class="icon"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              class="fill-current"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            ></path>
          </svg>
        </ButtonWithTooltip>
        <ButtonWithTooltip location="bottom" link="https://www.instagram.com/tarikkavaz_" linkTarget="_blank" tooptip="Instagram"> 
          <svg
            aria-hidden="true"
            class="icon"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              class="fill-current"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
        </ButtonWithTooltip>
        <ButtonWithTooltip location="bottom" link="https://open.spotify.com/user/tarikkavaz" linkTarget="_blank" tooptip="Spotify"> 
          <svg
            aria-hidden="true"
            class="icon"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              class="fill-current"
              d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
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