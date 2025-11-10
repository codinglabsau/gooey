<script setup lang="ts">
/**
 * Datatable Selection Cell Component
 *
 * Renders the checkbox cell for row selection (both header and body).
 * When selection cell rendering issues occur, search for "DatatableSelectionCell".
 */

import { computed } from "vue"

interface Props {
  /**
   * Whether this is a header cell (th) or body cell (td)
   */
  isHeader?: boolean

  /**
   * Whether the checkbox is checked
   */
  checked?: boolean

  /**
   * Whether the checkbox is in indeterminate state (header only)
   */
  indeterminate?: boolean

  /**
   * Whether sticky positioning is enabled (desktop only)
   */
  stickyColumns?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isHeader: false,
  checked: false,
  indeterminate: false,
  stickyColumns: true,
})

const emit = defineEmits<{
  change: []
}>()

const cellClasses = computed(() => {
  const base = "w-12 px-2 align-middle"
  const hover = "group-hover:bg-gray-100/50 dark:group-hover:bg-zinc-900/50"
  const sticky = props.stickyColumns
    ? "md:sticky md:z-30 md:bg-white/90 md:dark:bg-zinc-900/90"
    : ""
  const bodySticky = !props.isHeader && props.stickyColumns ? "md:z-10" : ""

  return [base, hover, sticky, bodySticky].filter(Boolean).join(" ")
})

const checkboxClasses =
  "size-4 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800"
</script>

<template>
  <component :is="isHeader ? 'th' : 'td'" :class="cellClasses" style="left: 0">
    <div class="flex items-center justify-center">
      <input
        type="checkbox"
        :checked="checked"
        :indeterminate="indeterminate"
        :class="checkboxClasses"
        @change="emit('change')"
      />
    </div>
  </component>
</template>
