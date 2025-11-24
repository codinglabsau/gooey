<script setup lang="ts">
import { computed, ref } from "vue"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/popover"
import { X, Plus } from "lucide-vue-next"

interface Props {
  label?: string
  active?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: "Filter",
  active: false,
  disabled: false,
})

const emits = defineEmits<{
  clear: []
}>()

// Track popover open state for visual ring styling
const isOpen = ref(false)

// Classes for the outer pill container per design spec
const pillClasses = computed(() => {
  const base = ["inline-flex items-stretch rounded-full text-xs transition-all bg-white"]

  if (isOpen.value) {
    // Open state: blue ring instead of border
    base.push("ring-2 ring-blue-500")
  } else if (props.active) {
    // Active: solid border
    base.push("border border-gray-400")
  } else {
    // Inactive: dashed border
    base.push("border border-dashed border-gray-400")
  }

  return base
})

const onClear = (e: MouseEvent) => {
  e.stopPropagation()
  e.preventDefault()
  emits("clear")
}
</script>

<template>
  <div :class="pillClasses">
    <!-- Main button — opens popover -->
    <Popover v-model:open="isOpen">
      <PopoverTrigger as-child>
        <button
          type="button"
          :disabled="disabled"
          :class="[
            'inline-flex items-center gap-1.5 transition-colors',
            active
              ? 'rounded-l-full py-1 pl-2.5 pr-1.5 hover:bg-gray-50'
              : 'rounded-full py-1 pl-2.5 pr-2.5 hover:bg-gray-50',
          ]"
          title="Edit filter"
        >
          <!-- Plus icon when inactive -->
          <Plus v-if="!active" class="h-3 w-3 text-gray-400" />

          <!-- Label and optional value -->
          <span class="truncate" :class="active ? 'text-gray-500' : 'text-gray-500'">
            <slot name="label">{{ label }}</slot>
          </span>

          <!-- When active, show the value next to the label -->
          <span v-if="active" class="max-w-56 truncate font-medium text-gray-900">
            <slot name="display-value">
              <slot name="summary">Any</slot>
            </slot>
          </span>
        </button>
      </PopoverTrigger>

      <PopoverContent side="bottom" align="start" class="w-auto p-3">
        <slot name="form" />
      </PopoverContent>
    </Popover>

    <!-- Clear button — only when active; separate from popover trigger -->
    <button
      v-if="active"
      type="button"
      class="group inline-flex items-center rounded-r-full pl-1 pr-2 transition-colors hover:bg-gray-100"
      title="Clear"
      aria-label="Clear filter"
      @click="onClear"
    >
      <X class="h-3 w-3 text-gray-400 group-hover:text-red-600" />
    </button>
  </div>
</template>
