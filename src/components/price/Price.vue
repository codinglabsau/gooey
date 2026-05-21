<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { NumberField, NumberFieldContent, NumberFieldInput } from "@/components/number-field"

/**
 * v-model is a `number` representing the amount in **dollars** (e.g. `19.99`).
 * Consumers do not need to convert to/from cents.
 */
const props = withDefaults(
  defineProps<{
    currency?: string
    locale?: string
    min?: number
    max?: number
    step?: number
    disabled?: boolean
    placeholder?: string
    class?: HTMLAttributes["class"]
  }>(),
  {
    currency: "AUD",
    locale: "en-AU",
    min: 0,
    step: 0.01,
  },
)

const model = defineModel<number>()

const formatOptions = computed<Intl.NumberFormatOptions>(() => ({
  style: "currency",
  currency: props.currency,
  currencyDisplay: "symbol",
}))
</script>

<template>
  <NumberField
    v-model="model"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    :locale="locale"
    :format-options="formatOptions"
    :class="$props.class"
  >
    <NumberFieldContent>
      <NumberFieldInput :placeholder="placeholder" />
    </NumberFieldContent>
  </NumberField>
</template>
