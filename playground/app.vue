<script setup lang="ts">
const toast = useToast()
useSeoMeta({
  title: 'Nuxt Toast | anthocodes99',
  ogTitle: 'Toasts for Nuxt',
  description: 'Simple toasts for Nuxt with Tailwind CSS',
  ogDescription: 'Simple toasts for Nuxt, powered by Tailwind CSS',
  // ogImage: '' TODO:
  // twitterCard: '' TODO:
})
</script>

<template>
  <div class="max-w-2xl mx-auto mt-24 bg-gray-500 rounded-md p-8">
    <div class="flex items-baseline">
      <h1 class="text-4xl font-bold">
        Nuxt Toast
      </h1>
      <h3 class="ml-4 text-lg font-light">
        made by anthocodes99
      </h3>
    </div>
    <div class="mt-4 flex gap-4">
      <button
        class="px-8 py-4 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition duration-100"
        @click="toast.info('yay', 'yay')"
      >
        Info
      </button>
      <button
        class="px-8 py-4 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition duration-100"
        @click="toast.success('yay', 'u did it')"
      >
        Success
      </button>
      <button
        class="px-8 py-4 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition duration-100"
        @click="toast.warning('yay', 'uh ow')"
      >
        Warning
      </button>
      <button
        class="px-8 py-4 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition duration-100"
        @click="toast.error('damn', 'something broke')"
      >
        Error
      </button>
    </div>
  </div>
  <TheToast />
</template>
