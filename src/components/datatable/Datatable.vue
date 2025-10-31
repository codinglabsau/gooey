<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useSlots, watch } from "vue"
import type { DatatableProps, ColumnConfig, ActionConfig } from "./types"
import { useStickyColumns, useStickyHeader } from "./useStickyTable"
import { useDatatableState } from "./useDatatableState"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<DatatableProps>(), {
  tableClasses: "bg-white",
  stickyColumns: () => [],
  actions: () => [],
})
const emit = defineEmits<{
  "state-change": [state: any]
  "selection-change": [selectedRows: Set<number>]
}>()

const slots = useSlots()

const internalState = useDatatableState({
  columns: props.columns.map((c) => c.key),
})

const datatableState = computed(() => props.datatableState || internalState)

watch(
  () => props.stickyColumns,
  (newStickyColumns) => {
    if (!props.datatableState && newStickyColumns) {
      datatableState.value.state.value.sticky = newStickyColumns
    }
  },
  { immediate: true }
)

watch(
  () => datatableState.value.state.value,
  (newState) => {
    emit("state-change", newState)
  },
  { deep: true }
)

const tableContainerRef = ref<HTMLElement | null>(null)
const theadRef = ref<HTMLElement | null>(null)

const stickyColumns = useStickyColumns(() => tableContainerRef.value)

const stickyHeader = useStickyHeader(
  () => tableContainerRef.value,
  () => theadRef.value
)

onMounted(() => {
  stickyColumns.add()
  stickyHeader.add()
})

onUnmounted(() => {
  stickyColumns.remove()
  stickyHeader.remove()
})

const isPaginationResponse = (data: any): boolean => {
  return data && typeof data === "object" && "data" in data && Array.isArray(data.data)
}

const tableData = computed<Record<string, any>[]>(() => {
  if (Array.isArray(props.data)) {
    return props.data
  }

  if (isPaginationResponse(props.data)) {
    return props.data.data
  }

  return []
})

const isEmpty = computed(() => !tableData.value || tableData.value.length === 0)

const isColumnSticky = (columnKey: string): boolean => {
  return props.stickyColumns.includes(columnKey)
}

const isLastStickyColumn = (columnKey: string): boolean => {
  const lastStickyKey = props.stickyColumns[props.stickyColumns.length - 1]
  return columnKey === lastStickyKey
}

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

// Image column helper functions
const isImageColumn = (column: ColumnConfig): boolean => {
  return !!column.image
}

const getImageUrl = (row: Record<string, any>, column: ColumnConfig): string | null => {
  return row[column.key] || null
}

const getImageClasses = (column: ColumnConfig): string => {
  // If image is a string, use it as the class list
  if (typeof column.image === "string") {
    return column.image
  }
  // Otherwise, use default size-6
  return "size-6"
}

// Row selection state management (local state, not persisted in URL)
const selectedRows = ref<Set<number>>(new Set())

const allSelected = computed(() => {
  if (isEmpty.value || !showSelectionColumn.value) return false
  return tableData.value.every((_, index) => selectedRows.value.has(index))
})

const someSelected = computed(() => {
  if (isEmpty.value || !showSelectionColumn.value) return false
  return selectedRows.value.size > 0 && !allSelected.value
})

const toggleRow = (index: number) => {
  if (selectedRows.value.has(index)) {
    selectedRows.value.delete(index)
  } else {
    selectedRows.value.add(index)
  }
  emit("selection-change", selectedRows.value)
}

const toggleAll = () => {
  if (allSelected.value) {
    selectedRows.value.clear()
  } else {
    tableData.value.forEach((_, index) => {
      selectedRows.value.add(index)
    })
  }
  emit("selection-change", selectedRows.value)
}

const clearSelection = () => {
  selectedRows.value.clear()
  emit("selection-change", selectedRows.value)
}

// Actions configuration and visibility
const showSelectionColumn = computed(() => {
  return props.actions.some((action) => action.bulk === true)
})

const showActionsColumn = computed(() => {
  return props.actions.length > 0
})

const rowActions = computed(() => {
  return props.actions.filter((action) => !action.bulk)
})

const getVisibleActions = (row: Record<string, any>): ActionConfig[] => {
  return rowActions.value.filter((action) => {
    // If no visible function provided, action is always visible
    if (!action.visible) return true
    // Otherwise, check the visible function
    return action.visible(row)
  })
}

const handleActionClick = (action: ActionConfig, row: Record<string, any>) => {
  // For row actions, pass the single row wrapped in an array
  action.handler([row])
}
</script>

<template>
  <div
    ref="tableContainerRef"
    class="group/table max-h-full max-w-full overflow-auto rounded-md bg-white dark:bg-zinc-900"
  >
    <table :class="cn('relative w-full caption-bottom text-sm border-collapse', tableClasses)">
      <!-- Sticky Header - Always sticky with simple CSS -->
      <thead v-if="!isEmpty" ref="theadRef" class="sticky top-0 z-20 bg-white dark:bg-zinc-900">
        <tr class="group border-b border-gray-200 dark:border-zinc-700">
          <!-- Select Column (Always Sticky - Left Edge) -->
          <th
            v-if="showSelectionColumn"
            class="h-10 w-12 px-2 text-left align-middle font-medium text-gray-500 group-hover:bg-gray-100/50 dark:text-zinc-400 dark:group-hover:bg-zinc-900/50 md:sticky md:z-30 md:bg-white/90 md:dark:bg-zinc-900/90"
            style="left: 0"
          >
            <div class="flex items-center justify-center">
              <input
                type="checkbox"
                :checked="allSelected"
                :indeterminate="someSelected"
                class="size-4 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800"
                @change="toggleAll"
              />
            </div>
          </th>

          <!-- Regular Columns -->
          <th
            v-for="column in columns"
            :key="column.key"
            :data-column="column.key"
            :class="
              cn(
                'h-10 px-2 text-left align-middle font-medium text-gray-500 dark:text-zinc-400',
                'group-hover:bg-gray-100/50 dark:group-hover:bg-zinc-900/50',
                column.headerCellClasses,
                {
                  // Sticky column with semi-transparent background and calculated offset (disabled on mobile)
                  'md:sticky md:z-30 md:bg-white/90 md:dark:bg-zinc-900/90': isColumnSticky(
                    column.key
                  ),
                },
                // Visual separator for last sticky column (pseudo-element vertical line from InertiaUI)
                isLastStickyColumn(column.key) ? verticalLineClasses : ''
              )
            "
            :style="
              isColumnSticky(column.key) ? { left: `var(--column-${column.key}-offset, 0px)` } : {}
            "
          >
            <div :class="column.headerContentClasses">
              {{ column.label }}
            </div>
          </th>

          <!-- Actions Column (Always Sticky - Right Edge) -->
          <th
            v-if="showActionsColumn"
            class="h-10 w-24 px-2 text-center align-middle font-medium text-gray-500 group-hover:bg-gray-100/50 dark:text-zinc-400 dark:group-hover:bg-zinc-900/50 md:sticky md:z-30 md:bg-white/90 md:dark:bg-zinc-900/90"
            style="right: 0"
          >
            <div>Actions</div>
          </th>
        </tr>
      </thead>

      <!-- Table Body -->
      <tbody>
        <!-- Data Rows -->
        <template v-if="!isEmpty">
          <tr
            v-for="(row, rowIndex) in tableData"
            :key="rowIndex"
            class="border-b border-gray-200 hover:bg-gray-100/50 dark:border-zinc-700 dark:hover:bg-zinc-900/50"
          >
            <!-- Select Column Cell (Always Sticky - Left Edge) -->
            <td
              v-if="showSelectionColumn"
              class="w-12 p-2 align-middle md:sticky md:z-10 md:bg-white/90 md:dark:bg-zinc-900/90"
              style="left: 0"
            >
              <div class="flex items-center justify-center">
                <input
                  type="checkbox"
                  :checked="selectedRows.has(rowIndex)"
                  class="size-4 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800"
                  @change="toggleRow(rowIndex)"
                />
              </div>
            </td>

            <!-- Regular Column Cells -->
            <td
              v-for="column in columns"
              :key="column.key"
              :data-column="column.key"
              :class="
                cn(
                  'p-2 align-middle',
                  column.cellClasses,
                  {
                    // Sticky column with semi-transparent background and calculated offset (disabled on mobile)
                    'md:sticky md:z-10 md:bg-white/90 md:dark:bg-zinc-900/90': isColumnSticky(
                      column.key
                    ),
                  },
                  // Visual separator for last sticky column (pseudo-element vertical line from InertiaUI)
                  isLastStickyColumn(column.key) ? verticalLineClasses : ''
                )
              "
              :style="
                isColumnSticky(column.key)
                  ? { left: `var(--column-${column.key}-offset, 0px)` }
                  : {}
              "
            >
              <!-- Image Column Rendering -->
              <template v-if="isImageColumn(column) && !slots[`row-${column.key}`]">
                <img
                  v-if="getImageUrl(row, column)"
                  :src="getImageUrl(row, column)!"
                  :alt="column.label"
                  loading="lazy"
                  :class="getImageClasses(column)"
                />
              </template>

              <!-- Regular Column Rendering (with custom slot support) -->
              <div v-else :class="column.cellContentClasses">
                <!-- Custom cell slot with scoped props -->
                <slot
                  v-if="slots[`row-${column.key}`]"
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

            <!-- Actions Column Cell (Always Sticky - Right Edge) -->
            <td
              v-if="showActionsColumn"
              class="w-24 p-2 text-center align-middle md:sticky md:z-10 md:bg-white/90 md:dark:bg-zinc-900/90"
              style="right: 0"
            >
              <div class="flex items-center justify-center gap-1">
                <!-- Custom actions slot with scoped props -->
                <slot
                  v-if="slots['row-actions']"
                  name="row-actions"
                  :row="row"
                  :row-index="rowIndex"
                  :visible-actions="getVisibleActions(row)"
                />

                <!-- Default actions UI -->
                <template v-else>
                  <template v-if="getVisibleActions(row).length === 1">
                    <!-- Single action: Display as standalone button -->
                    <button
                      type="button"
                      class="rounded px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                      @click="handleActionClick(getVisibleActions(row)[0], row)"
                    >
                      {{ getVisibleActions(row)[0].label }}
                    </button>
                  </template>

                  <template v-else-if="getVisibleActions(row).length > 1">
                    <!-- Multiple actions: Triple-dot menu with hover expansion to left -->
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
                          v-for="action in getVisibleActions(row)"
                          :key="action.label"
                          type="button"
                          class="block w-full px-4 py-2 text-left text-xs text-gray-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-700"
                          @click="handleActionClick(action, row)"
                        >
                          {{ action.label }}
                        </button>
                      </div>
                    </div>
                  </template>
                </template>
              </div>
            </td>
          </tr>
        </template>

        <!-- Empty State -->
        <tr v-else>
          <td
            :colspan="columns.length + (showSelectionColumn ? 1 : 0) + (showActionsColumn ? 1 : 0)"
            class="whitespace-nowrap p-4 align-middle text-sm text-foreground"
          >
            <div class="flex items-center justify-center py-10">
              <slot name="empty">No Records.</slot>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
