<script setup lang="ts">
/**
 * Datatable Header Cell Component
 *
 * Renders header cells (th) for datatable columns with sticky positioning and custom styling.
 * When header cell rendering issues occur, search for "DatatableHeaderCell".
 */

import { computed } from "vue"
import { cn } from "@/lib/utils"
import type { ColumnConfig } from "./types"

interface Props {
  /**
   * Column configuration
   */
  column: ColumnConfig

  /**
   * Whether this column is sticky
   */
  sticky?: boolean

  /**
   * Whether this is the last sticky column (for visual separator)
   */
  isLastSticky?: boolean

  /**
   * CSS variable for sticky offset (e.g., "--column-id-offset")
   */
  stickyOffsetVar?: string
}

const props = withDefaults(defineProps<Props>(), {
  sticky: false,
  isLastSticky: false,
})

// Visual separator classes for last sticky column
const verticalLineClasses = [
  "relative",
  "after:content-['']",
  "after:h-full",
  "after:w-px",
  "after:bg-gray-100",
  "after:shadow-[1px_0px_3px_0px_rgba(27,27,27,0.14)]",
  "after:absolute",
  "after:top-0",
  "after:right-0",
  "after:dark:bg-zinc-700",
].join(" ")

// Compute cell classes
const cellClasses = computed(() => {
  return cn(
    "h-10 px-2 text-left align-middle font-medium text-gray-500 dark:text-zinc-400",
    "group-hover:bg-gray-100/50 dark:group-hover:bg-zinc-900/50",
    props.column.headerCellClasses,
    {
      // Sticky column with semi-transparent background and calculated offset (disabled on mobile)
      "md:sticky md:z-30 md:bg-white/90 md:dark:bg-zinc-900/90": props.sticky,
    },
    // Visual separator for last sticky column
    props.isLastSticky ? verticalLineClasses : ""
  )
})

// Compute sticky style
const stickyStyle = computed(() => {
  if (props.sticky && props.stickyOffsetVar) {
    return { left: `var(${props.stickyOffsetVar}, 0px)` }
  }
  return {}
})
</script>

<template>
  <th :class="cellClasses" :style="stickyStyle" :data-column="column.key">
    <div :class="column.headerContentClasses">
      {{ column.label }}
    </div>
  </th>
</template>
