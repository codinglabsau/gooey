<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { onMounted, watch } from "vue"
import { Toaster as Sonner } from "vue-sonner"
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-vue-next"
import { cn } from "@/lib/utils"
import { useFlasher, type ErrorBag, type ObjectFormat } from "./use-flasher"

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
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

// Fire on mount, not via `immediate`: an immediate watch runs during setup —
// before the child <Sonner> Toaster has subscribed to the toast store — so any
// toast raised then is dropped. onMounted runs after the Toaster is mounted.
function flash() {
  if (props.info) {
    infoNotification(props.info)
  }

  if (props.success) {
    successNotification(props.success)
  }

  if (props.warning) {
    warningNotification(props.warning)
  }

  if (props.errors !== undefined && Object.keys(props.errors).length > 0) {
    errorNotification(props.errors, props.objectFormat)
  }
}

onMounted(flash)

watch(
  () => props.info,
  (newVal) => {
    if (newVal) {
      infoNotification(newVal)
    }
  },
)

watch(
  () => props.success,
  (newVal) => {
    if (newVal) {
      successNotification(newVal)
    }
  },
)

watch(
  () => props.warning,
  (newVal) => {
    if (newVal) {
      warningNotification(newVal)
    }
  },
)

watch(
  () => props.errors,
  (newVal) => {
    if (newVal !== undefined && Object.keys(newVal).length > 0) {
      errorNotification(newVal, props.objectFormat)
    }
  },
)
</script>

<template>
  <Sonner
    :class="cn('toaster group', props.class)"
    :toast-options="{
      classes: {
        toast:
          'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
        description: 'group-[.toast]:text-muted-foreground group-[.toast]:whitespace-pre-line',
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
