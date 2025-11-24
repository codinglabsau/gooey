<script setup lang="ts">
import { ref, watch, onMounted } from "vue"

interface Props {
  modelValue: string
  placeholder?: string
  debounce?: number
  /** When true, hide submit button and auto-submit (by emitting update only) after debounce */
  auto?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Search…",
  debounce: 300,
  auto: true,
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
  t = window.setTimeout(() => {
    // Emit change downstream; parent decides whether to apply immediately
    emit("update:model-value", v)
    // In manual mode, we do NOT emit submit here. In auto mode, parent typically
    // auto-applies on update, so we avoid emitting submit to prevent double reloads.
  }, props.debounce)
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

    <button
      v-if="!props.auto"
      type="submit"
      class="h-8 rounded-md bg-primary px-3 text-xs text-primary-foreground"
    >
      Search
    </button>
  </form>
</template>
