<script setup lang="ts">
import { isVNode } from "vue"
import { useToast } from "./use-toast"
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "."

defineEmits<{
  click: [value: object]
}>()

const { toasts } = useToast()
</script>

<template>
  <ToastProvider>
    <Toast
      v-for="toast in toasts"
      :key="toast.id"
      v-bind="toast"
      class="mt-1.5"
      @click="$emit('click', toast)"
    >
      <div class="flex items-start space-x-3">
        <template v-if="toast.icon">
          <img
            v-if="typeof toast.icon === 'string'"
            :src="toast.icon"
            :class="['size-16 rounded-sm object-cover', toast.iconClasses]"
            :alt="toast.title"
          />

          <component :is="toast.icon" v-else :class="['size-6', toast.iconClasses]" />
        </template>

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
