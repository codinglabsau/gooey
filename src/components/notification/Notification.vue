<script setup lang="ts">
import { watch } from "vue"
import type { Messages } from "@/components/toast/use-toast"
import { Toaster } from "@/components/toast"
import { useNotification } from "./use-notification"

const props = withDefaults(
  defineProps<{
    info?: string
    success?: string
    warning?: string
    errors?: Messages
    showErrorKeys?: boolean
    showErrorValues?: boolean
  }>(),
  {
    showErrorKeys: false,
    showErrorValues: true,
  }
)

const {
  info: infoNotification,
  success: successNotification,
  warning: warningNotification,
  error,
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
      error(props.errors)
    }
  }
)
</script>

<script lang="ts">
export default { name: "Notifications" }
</script>

<template>
  <Toaster />
</template>
