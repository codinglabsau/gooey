<script setup lang="ts">
import { ref, watch, onMounted } from "vue"

interface Props {
  modelValue: string
  placeholder?: string
  debounce?: number
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Search…",
  debounce: 300,
})

const emit = defineEmits<{
  (e: "update:model-value", value: string): void
  (e: "submit"): void
  (e: "clear"): void
}>()

const internal = ref<string>(props.modelValue)
let t: number | undefined

watch(
  () => props.modelValue,
  (v) => {
    if (v !== internal.value) internal.value = v
  }
)

watch(internal, (v) => {
  window.clearTimeout(t)
  t = window.setTimeout(() => emit("update:model-value", v), props.debounce)
})

const doSubmit = () => emit("submit")
const doClear = () => {
  internal.value = ""
  emit("update:model-value", "")
  emit("clear")
}

onMounted(() => {
  internal.value = props.modelValue
})
</script>

<template>
  <form class="flex items-center gap-2" @submit.prevent="doSubmit">
    <input
      v-model="internal"
      type="search"
      :placeholder="placeholder"
      class="h-9 w-64 rounded-md border px-2 text-sm"
    />

    <button
      v-if="internal.length"
      type="button"
      class="h-8 rounded-md border px-2 text-xs"
      @click="doClear"
    >
      Clear
    </button>

    <button type="submit" class="h-8 rounded-md bg-primary px-3 text-xs text-primary-foreground">
      Search
    </button>
  </form>
</template>
