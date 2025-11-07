<script setup lang="ts">
/**
 * Datatable Cell Component
 *
 * Renders body data cells (td) with sticky positioning, image support, and custom slots.
 * When cell rendering issues occur, search for "DatatableCell".
 */

import { computed, useSlots } from "vue"
import { cn } from "@/lib/utils"
import type { ColumnConfig } from "./types"

interface Props {
  /**
   * Column configuration
   */
  column: ColumnConfig

  /**
   * Row data object
   */
  row: Record<string, any>

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

const slots = useSlots()

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
    "p-2 align-middle",
    props.column.cellClasses,
    {
      // Sticky column with semi-transparent background and calculated offset (disabled on mobile)
      "md:sticky md:z-10 md:bg-white/90 md:dark:bg-zinc-900/90": props.sticky,
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

// Image column helpers
const isImageColumn = computed(() => !!props.column.image)

const getImageUrl = computed(() => {
  return props.row[props.column.key] || null
})

const getImageClasses = computed(() => {
  // If image is a string, use it as the class list
  if (typeof props.column.image === "string") {
    return props.column.image
  }
  // Otherwise, use default size-6
  return "size-6"
})

// Check if custom slot exists for this column
const hasCustomSlot = computed(() => {
  return !!slots[`row-${props.column.key}`]
})
</script>

<template>
  <td :class="cellClasses" :style="stickyStyle" :data-column="column.key">
    <!-- Image Column Rendering -->
    <template v-if="isImageColumn && !hasCustomSlot">
      <img
        v-if="getImageUrl"
        :src="getImageUrl"
        :alt="column.label"
        loading="lazy"
        :class="getImageClasses"
      />
    </template>

    <!-- Regular Column Rendering (with custom slot support) -->
    <div v-else :class="column.cellContentClasses">
      <!-- Custom cell slot with scoped props -->
      <slot
        v-if="hasCustomSlot"
        :name="`row-${column.key}`"
        :row="row"
        :column="column"
        :value="row[column.key]"
      />
      <!-- Fallback to default text rendering -->
      <template v-else>
        {{ row[column.key] }}
      </template>
    </div>
  </td>
</template>
