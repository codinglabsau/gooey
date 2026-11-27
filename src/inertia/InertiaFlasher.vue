<script setup lang="ts">
import { onBeforeUnmount, shallowRef } from "vue"
import { router } from "@inertiajs/vue3"
import { Flasher, type ErrorBag, type FlashAction, type FlashToast } from "@/components/flasher"

const props = defineProps<{
  /** Handles a toast action; bind as `@action`. Defaults to an Inertia visit. */
  onAction?: (action: FlashAction, toast: FlashToast) => void
}>()

const toasts = shallowRef<FlashToast[]>()
const errors = shallowRef<ErrorBag>()

function visit(action: FlashAction) {
  router.visit(action.url, { method: action.method ?? "get" })
}

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
  <Flasher :toasts="toasts" :errors="errors" :on-action="props.onAction ?? visit" />
</template>
