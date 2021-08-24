<template>

  <div class="fixed z-50 right-7" v-if="!isMobile()">
    <div class="flex mt-10">
      <span ref="toggleDark" 
      class="flex items-center justify-center w-20 h-10 cursor-pointer" @click="toggleDarkMode">
      <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='moon' class='themeicon' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z'></path></svg>
      </span>
    </div>
  </div>


    <HomeDesktop v-if="!isMobile()"></HomeDesktop>
    <HomeMobile v-else></HomeMobile>
    <Blob />
  

</template>

<script>

  import Blob from "./components/Blob.vue";
  import HomeDesktop from "./components/HomeDesktop.vue";
  import HomeMobile from "./components/HomeMobile.vue";

  import skrollr from "skrollr";
  
  export default {
    components: {
      Blob,
      HomeDesktop,
      HomeMobile,
    },

    methods: {
      isMobile: function () {
        var check = false;
        (function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|webOS|iPhone|iPad|iPod|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
      },

      toggleDarkMode(theme, evt) {
        let htmlElm = document.querySelector("html");
        const setLight = () => {
          htmlElm.classList.remove("dark");
          localStorage.theme = "light";
          
          this.$refs.toggleDark.innerHTML = "<span class='themetext'>Dark</span> <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='moon' class='themeicon' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z'></path></svg>";
        };
        const setDark = () => {
          htmlElm.classList.add("dark");
          localStorage.theme = "dark";
          this.$refs.toggleDark.innerHTML = "<span class='themetext'>Light</span><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='sun' class='themeicon' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z'></path></svg>";
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
      var s = skrollr.init();
      if (s.isMobile()) {
        s.destroy();
      }
      this.toggleDarkMode(localStorage.theme);

    },
    created() {
        
        if (!("theme" in localStorage)) localStorage.theme = "dark";
    },
  };
</script>


<style lang="scss">
  // * {
  //   @apply transition duration-700 ease-in-out
  // }
  html {
    @apply min-h-screen;
  }
  html,
  body {
    @apply min-h-full h-full overscroll-none;
  }
  body {
    @apply bg-fixed bg-gradient-to-b from-gray-50 to-gray-300 dark:from-gray-600 dark:to-gray-900;
     
  }
  .dark {
    @apply transition duration-700 ease-in-out;
  }
  .themeicon {
    @apply w-5 h-5 hover:fill-current text-gray-900 dark:text-gray-100
  }
  .themetext {
    @apply mr-2 dark:text-gray-100 text-xs;
  }
</style>