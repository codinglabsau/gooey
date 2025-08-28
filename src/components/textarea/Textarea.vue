<script setup lang="ts">
import { computed } from "vue"
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "vue"
import { useVModel } from "@vueuse/core"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  defaultValue?: string | number
  modelValue?: string | number
  charLimit?: number
}>()

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void
}>()

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const charCount = computed(() => {
  return modelValue.value ? modelValue.value.toString().length : 0
})
</script>

<template>
  <textarea
    v-model="modelValue"
    :class="
      cn(
        'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
  />

 <p
   v-if="charLimit"
   class="mt-1 flex w-full justify-end text-sm text-gray-500"
   :class="{'text-red-500': charCount > charLimit}">
   {{ charCount }} / {{ charLimit }}
 </p>
</template>
