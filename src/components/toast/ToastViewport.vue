<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue"
import { ToastViewport, type ToastViewportProps } from "radix-vue"
import { cn } from "@/lib/utils"

const props = defineProps<ToastViewportProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastViewport
    v-bind="delegatedProps"
    :class="
      cn(
        // overriding the defaults to position at the bottom on mobile viewport
        // 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        'fixed bottom-0 right-0 top-auto flex-col z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]',
        props.class
      )
    "
  />
</template>
