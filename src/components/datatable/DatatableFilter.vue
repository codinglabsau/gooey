<script setup lang="ts">
import { computed } from "vue"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/popover"
import { X } from "lucide-vue-next"

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

const pillClasses = computed(() => [
  "group inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs",
  props.active
    ? "bg-primary/10 border-primary text-primary"
    : "bg-muted/40 border-muted-foreground/20",
])

const onClear = (e: MouseEvent) => {
  e.stopPropagation()
  e.preventDefault()
  emits("clear")
}
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <button type="button" :disabled="disabled" :class="pillClasses">
        <span class="truncate">
          <slot name="label">{{ label }}</slot>
        </span>

        <!-- Visual divider instead of a literal pipe -->
        <span class="ml-2 h-4 w-px shrink-0 bg-muted-foreground/20"></span>

        <!-- Display value area with subtle button-like appearance for the "Any" state -->
        <span class="max-w-56 truncate">
          <slot name="display-value">
            <slot name="summary">
              <span
                class="inline-flex items-center rounded px-1.5 py-0.5 text-foreground/70 group-hover:bg-muted/60"
              >
                Any
              </span>
            </slot>
          </slot>
        </span>

        <span v-if="active" class="ml-1 inline-flex items-center">
          <X
            class="h-4 w-4 rounded-sm text-foreground/60 transition-colors group-hover:text-foreground"
            aria-hidden="true"
            @click.stop.prevent="onClear"
          />
        </span>
      </button>
    </PopoverTrigger>

    <PopoverContent side="bottom" align="start" class="w-auto p-3">
      <slot name="form" />
    </PopoverContent>
  </Popover>
</template>
