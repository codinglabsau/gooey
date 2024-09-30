<script setup lang="ts">
import { isVNode, watch } from "vue"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/toast"
import { useToaster, type ErrorBag, type ObjectFormat } from "./use-toaster"

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
} = useToaster()

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
  <ToastProvider>
    <Toast v-for="toast in toasts" :key="toast.id" v-bind="toast">
      <div class="flex items-start space-x-3">
        <component :is="toast.icon" v-if="toast.icon" :class="['h-6 w-6', toast.iconClasses]" />

        <div class="grid gap-1">
          <ToastTitle v-if="toast.title">
            {{ toast.title }}
          </ToastTitle>

          <template v-if="toast.description">
            <ToastDescription v-if="isVNode(toast.description)">
              <component :is="toast.description" />
            </ToastDescription>

            <p
              v-for="(value, key) in toast.description"
              v-else-if="typeof toast.description === 'object'"
              :key="key"
              class="text-sm opacity-90"
            >
              <template v-if="toast.objectFormat === 'key'">
                {{ key }}
              </template>

              <template v-else-if="toast.objectFormat === 'both'">
                <span class="font-bold">{{ key }}</span
                >: {{ value }}
              </template>

              <template v-else>
                {{ value }}
              </template>
            </p>

            <ToastDescription v-else>
              {{ toast.description }}
            </ToastDescription>
          </template>

          <ToastClose />
        </div>
      </div>

      <component :is="toast.action" />
    </Toast>

    <ToastViewport />
  </ToastProvider>
</template>
