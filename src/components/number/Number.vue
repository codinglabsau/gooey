<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { NumberField, NumberFieldContent, NumberFieldInput } from "@/components/number-field"

const props = withDefaults(
  defineProps<{
    min?: number
    max?: number
    step?: number
    integer?: boolean
    disabled?: boolean
    locale?: string
    formatOptions?: Intl.NumberFormatOptions
    placeholder?: string
    class?: HTMLAttributes["class"]
  }>(),
  {
    step: 1,
  },
)

const model = defineModel<number>()

const resolvedFormatOptions = computed<Intl.NumberFormatOptions | undefined>(() => {
  if (props.integer) {
    return { ...(props.formatOptions ?? {}), maximumFractionDigits: 0 }
  }
  return props.formatOptions
})
</script>

<template>
  <NumberField
    v-model="model"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    :locale="locale"
    :format-options="resolvedFormatOptions"
    :class="$props.class"
  >
    <NumberFieldContent>
      <NumberFieldInput :placeholder="placeholder" />
    </NumberFieldContent>
  </NumberField>
</template>
