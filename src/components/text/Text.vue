<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { Input } from "@/components/input"

defineProps<{
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  class?: HTMLAttributes["class"]
}>()

const model = defineModel<string>()
</script>

<template>
  <Input
    v-model="model"
    type="text"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :class="$props.class"
  />
</template>
