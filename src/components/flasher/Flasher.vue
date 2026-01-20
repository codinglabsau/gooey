<script setup lang="ts">
import { watch } from "vue"
import { Toaster as Sonner } from "vue-sonner"
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-vue-next"
import { useFlasher, type ErrorBag, type ObjectFormat } from "./use-flasher"

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
  },
)

const {
  info: infoNotification,
  success: successNotification,
  warning: warningNotification,
  error: errorNotification,
} = useFlasher()

watch(
  () => props.info,
  (newVal) => {
    if (newVal) {
      infoNotification(props.info as string)
    }
  },
  {
    immediate: true,
  },
)

watch(
  () => props.success,
  (newVal) => {
    if (newVal) {
      successNotification(props.success as string)
    }
  },
  { immediate: true },
)

watch(
  () => props.warning,
  (newVal) => {
    if (newVal) {
      warningNotification(props.warning as string)
    }
  },
  { immediate: true },
)

watch(
  () => props.errors,
  () => {
    if (props.errors !== undefined && Object.keys(props.errors!).length > 0) {
      errorNotification(props.errors, props.objectFormat)
    }
  },
)
</script>

<template>
  <Sonner
    class="toaster group"
    :toast-options="{
      classes: {
        toast:
          'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
        success: 'group-[.toaster]:border-success',
        error: 'group-[.toaster]:border-destructive',
        warning: 'group-[.toaster]:border-warning',
        info: 'group-[.toaster]:border-primary',
        description: 'group-[.toast]:text-muted-foreground',
        actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
        cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
      },
    }"
  >
    <template #success-icon>
      <CircleCheckIcon class="size-4 text-success" />
    </template>

    <template #info-icon>
      <InfoIcon class="size-4 text-primary" />
    </template>

    <template #warning-icon>
      <TriangleAlertIcon class="size-4 text-warning" />
    </template>

    <template #error-icon>
      <OctagonXIcon class="size-4 text-destructive" />
    </template>

    <template #loading-icon>
      <div>
        <Loader2Icon class="size-4 animate-spin" />
      </div>
    </template>

    <template #close-icon>
      <XIcon class="size-4" />
    </template>
  </Sonner>
</template>
