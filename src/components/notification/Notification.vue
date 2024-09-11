<script setup lang="ts">
import { watch } from "vue"
import { type Message } from "@/components/toast/use-toast"
import { Toaster } from "@/components/toast"
import { useNotification } from "./use-notification"

const props = withDefaults(
  defineProps<{
    info?: string
    success?: string
    warning?: string
    errors?: Record<Message>
    showErrorKeys?: boolean
  }>(),
  {
    showErrorKeys: false,
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
      infoNotification(props.info)
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
      successNotification(props.success)
    }
  },
  { immediate: true }
)

watch(
  () => props.warning,
  (newVal) => {
    if (newVal) {
      warningNotification(props.warning)
    }
  },
  { immediate: true }
)

watch(
  () => props.errors,
  () => {
    if (Object.keys(props.errors!).length > 0) {
      error(
        props.showErrorKeys ? Object.keys(props.errors!) : Object.values(props.errors!)
      )
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
