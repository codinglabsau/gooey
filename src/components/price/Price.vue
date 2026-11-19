<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { NumberField, NumberFieldContent, NumberFieldInput } from "@/components/number-field"
import { toNumberOrUndefined } from "@/lib/utils"

/**
 * v-model is a `number` representing the amount in **dollars** (e.g. `19.99`), or `null` when empty.
 * Consumers do not need to convert to/from cents.
 */
const props = withDefaults(
  defineProps<{
    currency?: string
    currencyDisplay?: Intl.NumberFormatOptions["currencyDisplay"]
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
    currencyDisplay: "symbol",
    locale: "en-AU",
    min: 0,
    step: 0.01,
  },
)

const model = defineModel<number | string | null>()

// Clearing emits null rather than undefined so the field survives JSON serialisation.
const numericModel = computed<number | undefined>({
  get: () => toNumberOrUndefined(model.value),
  set: (value) => {
    model.value = value ?? null
  },
})

const formatOptions = computed<Intl.NumberFormatOptions>(() => ({
  style: "currency",
  currency: props.currency,
  currencyDisplay: props.currencyDisplay,
}))
</script>

<template>
  <NumberField
    v-model="numericModel"
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
