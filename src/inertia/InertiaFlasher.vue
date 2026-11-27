<script setup lang="ts">
import { onBeforeUnmount, shallowRef } from "vue"
import { router } from "@inertiajs/vue3"
import { Flasher, type ErrorBag, type FlashToast } from "@/components/flasher"

const toasts = shallowRef<FlashToast[]>()
const errors = shallowRef<ErrorBag>()

// Flash data arrives once per response and is never restored from history, so a
// toast can't replay on back navigation. (router.on is a no-op during SSR.)
const stops = [
  router.on("flash", (event) => {
    toasts.value = event.detail.flash.toasts as FlashToast[] | undefined
  }),
  router.on("error", (event) => {
    errors.value = event.detail.errors as ErrorBag
  }),
]

onBeforeUnmount(() => stops.forEach((stop) => stop()))
</script>

<template>
  <Flasher :toasts="toasts" :errors="errors" />
</template>
