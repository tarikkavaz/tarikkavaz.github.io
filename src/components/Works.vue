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
                  class="my-6 font-mono text-xs text-gray-600 md:text-sm dark:text-gray-600"
                >
                  WEB DESIGN & CODE
                </p>
                <div class="relative inline-block group w-80">
                  <img
                    class="object-cover w-full"
                    src="/works/web/bilgi/01.png"
                  />
                  <div
                    class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-0 px-8 -mt-1 text-center duration-300 rounded-md opacity-0 group-hover:pb-10 bg-dotyellow group-hover:h-full group-hover:opacity-90 font-titillium"
                  >
                    <h1 class="text-2xl">
                      İstanbul Bilgi University
                    </h1>
                    <code class="mt-4 text-sm"
                      >html, scss, jquery, bootstrap, django</code
                    >
                    <p class="mt-8">
                      <a
                        class="font-mono text-sm font-semibold text-black"
                        href="#"
                        >https://bilgi.edu.tr</a
                      >
                    </p>
                  </div>
                </div>
                <div class="inline-block">
                  <img src="/works/web/bilgi/01.png" class="w-80" />
                </div>
                <div class="inline-block">
                  <img src="/works/web/aday-bilgi/01.png" class="w-80" />
                </div>
                <div class="inline-block">
                  <img src="/works/web/alt-bilgi/01.png" class="w-80" />
                </div>
                <div class="inline-block">
                  <img src="/works/web/asu-bilgi/01.png" class="w-80" />
                </div>
                <div class="inline-block">
                  <img src="/works/web/mag-bilgi/01.png" class="w-80" />
                </div>
                <div class="inline-block">
                  <img src="/works/web/curiousgames/01.png" class="w-80" />
                </div>
                <div class="inline-block">
                  <img src="/works/web/dalin/01.png" class="w-80" />
                </div>
                <div class="inline-block">
                  <img src="/works/web/groovypedia/01.png" class="w-80" />
                </div>
                <div class="inline-block">
                  <img src="/works/web/journeycihangir/01.png" class="w-80" />
                </div>
                <div class="inline-block">
                  <img src="/works/web/myela/01.png" class="w-80" />
                </div>

                <p
                  class="my-6 font-mono text-xs text-gray-600 md:text-sm dark:text-gray-600"
                >
                  CORPORATE IDENTITY & LOGO DESIGN
                </p>
                <div class="inline-block">
                  <img src="/works/logo/ada-pansiyon/02.jpg" class="w-80" />
                </div>
                <div class="inline-block">
                  <img src="/works/logo/concerts-east/01.png" class="w-80" />
                </div>

                <div class="inline-block">
                  <img src="/works/logo/minik-petshop/03.jpg" class="w-80" />
                </div>
                <div class="inline-block">
                  <img src="/works/logo/panda-anaokul/02.jpg" class="w-80" />
                </div>
                <div class="inline-block">
                  <img src="/works/logo/solar-power/03.jpg" class="w-80" />
                </div>
                <div class="inline-block">
                  <img src="/works/logo/zen-garden-yoga/02.jpg" class="w-80" />
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
