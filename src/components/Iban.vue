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
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-900"
              >
                BANK INFORMATION
              </DialogTitle>
              <div class="mt-8">
                <p
                  class="my-2 font-mono text-sm text-gray-700 dark:text-gray-700"
                > TARIK RECEP KAVAZ<br />
                  GARANTI BBVA - CAGLAYAN ISTANBUL
                </p>
                <p
                  class="font-mono text-xs text-gray-500 md:text-sm dark:text-gray-500"
                >
                  TRY: TR55 0006 2000 4030 0006 6905 22<br />
                  EUR: TR03 0006 2000 4030 0009 0702 86<br />
                  USD: TR12 0006 2000 4030 0009 0743 92
                </p>
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
      if (path == "iban") {
        this.isOpen = true;
      }
    }
  };
</script>

<style scoped></style>
