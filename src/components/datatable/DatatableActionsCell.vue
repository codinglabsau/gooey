<script setup lang="ts">
/**
 * Datatable Actions Cell Component
 *
 * Renders the actions cell with dropdown or buttons for row actions.
 * When actions cell rendering issues occur, search for "DatatableActionsCell".
 */

import { computed } from "vue"
import type { ActionConfig } from "./types"

interface Props {
  /**
   * Whether this is a header cell (th) or body cell (td)
   */
  isHeader?: boolean

  /**
   * Array of visible actions for this row (body cells only)
   */
  visibleActions?: ActionConfig[]

  /**
   * Row data object (body cells only)
   */
  row?: Record<string, any>

  /**
   * Row index (body cells only)
   */
  rowIndex?: number

  /**
   * Whether sticky positioning is enabled (desktop only)
   */
  sticky?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isHeader: false,
  visibleActions: () => [],
  sticky: true,
})

const emit = defineEmits<{
  "action-click": [action: ActionConfig, row: Record<string, any>]
}>()

const cellClasses = computed(() => {
  const base = "w-24 px-2 align-middle"
  const textAlign = props.isHeader ? "text-center" : "text-center"
  const hover = "group-hover:bg-gray-100/50 dark:group-hover:bg-zinc-900/50"
  const sticky = props.sticky ? "md:sticky md:z-30 md:bg-white/90 md:dark:bg-zinc-900/90" : ""
  const bodySticky = !props.isHeader && props.sticky ? "md:z-10" : ""

  return [base, textAlign, hover, sticky, bodySticky].filter(Boolean).join(" ")
})

const handleActionClick = (action: ActionConfig) => {
  if (props.row) {
    emit("action-click", action, props.row)
  }
}
</script>

<template>
  <component :is="isHeader ? 'th' : 'td'" :class="cellClasses" style="right: 0">
    <!-- Header Cell Content -->
    <div v-if="isHeader" class="font-medium text-gray-500 dark:text-zinc-400">Actions</div>

    <!-- Body Cell Content -->
    <div v-else class="flex items-center justify-center gap-1">
      <!-- Custom actions slot -->
      <slot name="actions" :row="row" :row-index="rowIndex" :visible-actions="visibleActions" />

      <!-- Default actions UI (when slot not provided) -->
      <template v-if="!$slots.actions">
        <!-- Single action: Display as standalone button -->
        <template v-if="visibleActions.length === 1">
          <button
            type="button"
            class="rounded px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            @click="handleActionClick(visibleActions[0])"
          >
            {{ visibleActions[0].label }}
          </button>
        </template>

        <!-- Multiple actions: Triple-dot menu with hover expansion to left -->
        <template v-else-if="visibleActions.length > 1">
          <div class="group/actions relative">
            <button
              type="button"
              class="flex size-8 items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-zinc-800"
              aria-label="Actions"
            >
              <svg
                class="size-4 text-gray-700 dark:text-zinc-300"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <circle cx="2" cy="8" r="1.5" />

                <circle cx="8" cy="8" r="1.5" />

                <circle cx="14" cy="8" r="1.5" />
              </svg>
            </button>

            <!-- Dropdown menu (expands left on hover) -->
            <div
              class="absolute right-0 z-50 mt-1 hidden min-w-[120px] rounded-md border border-gray-200 bg-white py-1 shadow-lg group-hover/actions:block dark:border-zinc-700 dark:bg-zinc-800"
            >
              <button
                v-for="action in visibleActions"
                :key="action.label"
                type="button"
                class="block w-full px-4 py-2 text-left text-xs text-gray-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-700"
                @click="handleActionClick(action)"
              >
                {{ action.label }}
              </button>
            </div>
          </div>
        </template>
      </template>
    </div>
  </component>
</template>
