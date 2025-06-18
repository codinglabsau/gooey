<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue"
import { ToastViewport } from "radix-vue"
import type { ToastViewportProps } from "."
import { cn } from "@/lib/utils"

const props = withDefaults(
  defineProps<ToastViewportProps & { class?: HTMLAttributes["class"] }>(),
  {
    position: "bottom-right",
  }
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const positionClass = computed(() => {
  switch (props.position) {
    case "top-left":
      return "top-0 left-0 bottom-auto"
    case "top-right":
      return "top-0 right-0 bottom-auto"
    case "bottom-left":
      return "bottom-0 left-0 top-auto"
    case "bottom-right":
      return "bottom-0 right-0 top-auto"
    default:
      return "bottom-0 right-0 top-auto" // default position
  }
})
</script>

<template>
  <ToastViewport
    v-bind="delegatedProps"
    :class="
      cn(
        // overriding the defaults to position at the bottom on mobile viewport
        // 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        'fixed flex-col z-[100] flex max-h-screen w-full p-4 md:max-w-[420px]',
        positionClass,
        props.class
      )
    "
  />
</template>
