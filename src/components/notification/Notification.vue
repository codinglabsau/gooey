<script setup lang="ts">
import { watch } from "vue"
import { Toaster } from "@/components/toast"
import { useNotification, type ErrorBag, type ObjectFormat } from "./use-notification"

const props = withDefaults(
  defineProps<{
    info?: string
    success?: string
    warning?: string
    errors?: ErrorBag
    objectFormat?: ObjectFormat
  }>(),
  {
    objectFormat: "value",
  }
)

const {
  info: infoNotification,
  success: successNotification,
  warning: warningNotification,
  error: errorNotification,
} = useNotification()

watch(
  () => props.info,
  (newVal) => {
    if (newVal) {
      infoNotification(props.info as string)
    }
  },
  {
    immediate: true,
  }
)

watch(
  () => props.success,
  (newVal) => {
    if (newVal) {
      successNotification(props.success as string)
    }
  },
  { immediate: true }
)

watch(
  () => props.warning,
  (newVal) => {
    if (newVal) {
      warningNotification(props.warning as string)
    }
  },
  { immediate: true }
)

watch(
  () => props.errors,
  () => {
    if (props.errors !== undefined && Object.keys(props.errors!).length > 0) {
      errorNotification(props.errors, props.objectFormat)
    }
  }
)
</script>

<template>
  <Toaster />
</template>
