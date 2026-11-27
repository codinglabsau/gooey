<script setup lang="ts" generic="TEmpty extends null | undefined = never">
import type { HTMLAttributes, Ref } from "vue"
import { computed, useModel } from "vue"
import { NumberField, NumberFieldContent, NumberFieldInput } from "@/components/number-field"
import { toNumberOrUndefined } from "@/lib/number"

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
    modelValue?: number | string | null
    /** What the v-model is set to when the input is cleared. Pass `null` so the field survives JSON serialisation. */
    emptyValue?: TEmpty
  }>(),
  {
    step: 1,
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

const resolvedFormatOptions = computed<Intl.NumberFormatOptions | undefined>(() => {
  if (props.integer) {
    return { ...(props.formatOptions ?? {}), maximumFractionDigits: 0 }
  }
  return props.formatOptions
})
</script>

<template>
  <NumberField
    v-model="numericModel"
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
