<script setup lang="ts" generic="T extends string | number | null = string">
import type { HTMLAttributes, Ref } from "vue"
import { computed, useModel } from "vue"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select"
import type { SelectOption } from "./types"

const props = withDefaults(
  defineProps<{
    options: SelectOption<T>[]
    placeholder?: string
    disabled?: boolean
    class?: HTMLAttributes["class"]
    modelValue?: T
  }>(),
  {
    placeholder: "Select an option",
  },
)

defineEmits<{
  "update:modelValue": [value: T]
}>()

// The emit is declared apart from the prop so its type stays `T`, as defineModel would add undefined.
const model: Ref<T | undefined> = useModel(props, "modelValue")

// The underlying Select shows the placeholder for a null value, so null options use a sentinel.
const NULL_VALUE = "__gooey_null__"

const hasNullOption = computed(() => props.options.some((option) => option.value === null))

const selectModel = computed({
  get: () => (model.value === null && hasNullOption.value ? NULL_VALUE : model.value),
  set: (value) => {
    model.value = (value === NULL_VALUE ? null : value) as T
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
