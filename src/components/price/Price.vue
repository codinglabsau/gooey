<script setup lang="ts" generic="TEmpty extends null | undefined = never">
import type { HTMLAttributes, Ref } from "vue"
import { computed, useModel } from "vue"
import { NumberField, NumberFieldContent, NumberFieldInput } from "@/components/number-field"
import { toNumberOrUndefined } from "@/lib/number"

/**
 * v-model is a `number` representing the amount in **dollars** (e.g. `19.99`). Clearing the input
 * sets it to `emptyValue` (undefined unless set; pass `null` to keep the field in a JSON payload).
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
    modelValue?: number | string | null
    /** What the v-model is set to when the input is cleared. Pass `null` so the field survives JSON serialisation. */
    emptyValue?: TEmpty
  }>(),
  {
    currency: "AUD",
    currencyDisplay: "symbol",
    locale: "en-AU",
    min: 0,
    step: 0.01,
  },
)

defineEmits<{
  "update:modelValue": [value: number | TEmpty]
}>()

// The emit is declared apart from the prop so its type stays `number` unless `emptyValue` is set.
const model: Ref<number | string | null | undefined> = useModel(props, "modelValue")

const numericModel = computed<number | undefined>({
  get: () => toNumberOrUndefined(model.value),
  set: (value) => {
    model.value = value ?? props.emptyValue
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
