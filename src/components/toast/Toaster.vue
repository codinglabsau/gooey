<script setup lang="ts">
import { isVNode } from "vue"
import { useToast } from "./use-toast"
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "."

const { toasts } = useToast()
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
              <template v-if="toast.errorFormat === 'value'">
                {{ value }}
              </template>

              <template v-if="toast.errorFormat === 'key'">
                {{ key }}
              </template>

              <template v-if="toast.errorFormat === 'both'">
                <span class="font-bold">{{ key }}</span
                >: {{ value }}
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
