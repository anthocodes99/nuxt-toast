<script setup lang="ts">
import { computed } from 'vue'
import { useToast } from '../composables/useToast'
import ToastPopUp from './ToastPopUp.vue'

const toast = useToast()
const toasts = computed(() => toast.state.value)
</script>

<template>
  <div class="fixed lg:top-5 right-5">
    <TransitionGroup
      name="fade"
      class="flex flex-col gap-2 w-64"
      tag="div"
    >
      <ToastPopUp
        v-for="toast in toasts"
        :key="toast.id"
        toast.id
        :toast="toast"
        @close="toast.close"
      />
    </TransitionGroup>
  </div>
</template>

<style>
.fade-move {
  transition: all 0.2s ease;
  transition-delay: 300ms;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
