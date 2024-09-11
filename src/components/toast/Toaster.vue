<script setup lang="ts">
import { type Component, isVNode } from "vue"
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

            <ToastDescription v-else>
              {{ toast.description }}
            </ToastDescription>
          </template>

          <template v-if="toast.messages">
            <p v-for="(message, idx) in toast.messages" :key="idx" class="text-sm opacity-90">
              {{ message }}
            </p>
          </template>

          <ToastClose />
        </div>
      </div>

      <component :is="toast.action" />
    </Toast>

    <ToastViewport />
  </ToastProvider>
</template>
