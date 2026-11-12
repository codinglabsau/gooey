<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select"

export interface SelectOption {
  value: string | number | null
  label: string
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{
    options: SelectOption[]
    placeholder?: string
    disabled?: boolean
    class?: HTMLAttributes["class"]
  }>(),
  {
    placeholder: "Select an option",
  },
)

const model = defineModel<string | number | null>()

// The underlying Select shows the placeholder for a null value, so null options use a sentinel.
const NULL_VALUE = "__gooey_null__"

const hasNullOption = computed(() => props.options.some((option) => option.value === null))

const selectModel = computed({
  get: () => (model.value === null && hasNullOption.value ? NULL_VALUE : model.value),
  set: (value) => {
    model.value = value === NULL_VALUE ? null : value
  },
})

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <Select v-model="selectModel" :disabled="disabled">
    <SelectTrigger v-bind="$attrs" :class="cn('w-full', props.class)">
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem
        v-for="option in options"
        :key="option.value ?? NULL_VALUE"
        :value="option.value ?? NULL_VALUE"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
