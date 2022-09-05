<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black bg-opacity-30" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-screen-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-900"
              >
                SOME WORKS
              </DialogTitle>
              <div class="mt-8">
                <p
                  class="my-6 font-mono text-sm text-gray-600 md:text-sm dark:text-gray-600"
                >
                  WEB DESIGN & CODE
                  <span class="block text-xs">Hover for detail</span>
                </p>
                <div
                  v-for="(site, i) in sites"
                  :key="site.i"
                  class="relative inline-block group w-80"
                >
                  <img class="object-cover w-full" :src="site.photo" />
                  <div
                    class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-0 px-8 -mt-1 text-center duration-300 rounded-md opacity-0 group-hover:pb-10 bg-dotyellow group-hover:h-full group-hover:opacity-90 font-titillium"
                  >
                    <h1 class="text-2xl">
                      {{ site.name }}
                    </h1>
                    <p></p>
                    <code class="mt-4 text-sm"> {{ site.tag }}</code>
                    <p class="mt-8">
                      <a
                        class="font-mono text-sm font-semibold text-black"
                        :href="site.url"
                        target="_blank"
                        >{{ site.url }}</a
                      >
                    </p>
                  </div>
                </div>

                <p
                  class="my-6 font-mono text-xs text-gray-600 md:text-sm dark:text-gray-600"
                >
                  CORPORATE IDENTITY & LOGO DESIGN
                </p>
                <div
                  class="inline-block"
                  v-for="(logo, i) in logos"
                  :key="logo.i"
                >
                  <img :src="logo.photo" :alt="logo.name" class="w-80" />
                </div>
              </div>

              <div class="mt-8">
                <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  OK!
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
  import { ref } from "vue";
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle
  } from "@headlessui/vue";

  export default {
    components: {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogOverlay,
      DialogTitle
    },
    setup() {
      const isOpen = ref(false);

      return {
        isOpen,
        closeModal() {
          isOpen.value = false;
        },
        openModal() {
          isOpen.value = true;
        }
      };
    },
    data() {
      return {
        sites: [
          {
            name: "Istanbul Bilgi University",
            photo: "/works/web/bilgi/01.png",
            tag: "html, scss, jquery, bootstrap, django",
            url: "https://www.bilgi.edu.tr"
          },
          {
            name: "IBU Prospective Students",
            photo: "/works/web/aday-bilgi/01.png",
            tag: "html, scss, jquery, bootstrap, django",
            url: "https://aday.bilgi.edu.tr"
          },
          {
            name: "Alt Lab",
            photo: "/works/web/alt-bilgi/01.png",
            tag: "html, scss, jquery, bootstrap, django",
            url: "https://alt.bilgi.edu.tr"
          },
          {
            name: "ASU - BİLGİ",
            photo: "/works/web/asu-bilgi/01.png",
            tag: "html, scss, jquery, bootstrap, django",
            url: "https://asu.bilgi.edu.tr"
          },
          {
            name: "MAG - BİLGİ",
            photo: "/works/web/mag-bilgi/01.png",
            tag: "html, scss, jquery, bootstrap, django",
            url: "https://mag.bilgi.edu.tr"
          },
          {
            name: "Curious Games",
            photo: "/works/web/curiousgames/02.png",
            tag: "html, scss, tailwind, vuejs",
            url: "https://curiousgames.io"
          },
          {
            name: "Dalin",
            photo: "/works/web/dalin/01.png",
            tag: "html, scss, jquery, bootstrap, django",
            url: "http://dalin.com"
          },
          {
            name: "Groovypedia",
            photo: "/works/web/groovypedia/01.png",
            tag: "html, scss, jquery, bootstrap",
            url: "http://groovypedia.com"
          },
          {
            name: "Journey Cihangir",
            photo: "/works/web/journeycihangir/01.png",
            tag: "html, scss, jquery, bootstrap, django",
            url: "http://journeycihangir.com"
          },
          {
            name: "MyEla",
            photo: "/works/web/myela/01.png",
            tag: "html, scss, jquery, bootstrap",
            url: "https://myela.com.tr"
          }
        ],
        logos: [
          {
            name: "Ada Pansiyon",
            photo: "/works/logo/ada-pansiyon/02.jpg"
          },
          {
            name: "Concerts East",
            photo: "/works/logo/concerts-east/01.png"
          },
          {
            name: "Minik Petshop",
            photo: "/works/logo/minik-petshop/03.jpg"
          },
          {
            name: "Panda Anaokul",
            photo: "/works/logo/panda-anaokul/02.jpg"
          },
          {
            name: "Solar Power",
            photo: "/works/logo/solar-power/03.jpg"
          },
          {
            name: "Zen Garden Yoga",
            photo: "/works/logo/zen-garden-yoga/02.jpg"
          }
        ]
      };
    },
    mounted() {
      // if (location.search.match(/iban/)) {
      //   this.isOpen = true;
      // }
      var path = window.location.pathname.split("/")[1];
      console.log(path);
      if (path == "works") {
        this.isOpen = true;
      }
    }
  };
</script>

<style scoped></style>
