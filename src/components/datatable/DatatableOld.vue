<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, toRef, watch } from "vue"
import { cn } from "@/lib/utils"

// Types
import type { DatatableProps } from "./types"

// Composables
import { useDatatableState } from "./useDatatableState"
import { useDatatableSelection } from "./useDatatableSelection"
import { useDatatableActions } from "./useDatatableActions"
import { useStickyColumns, useStickyHeader } from "./useStickyTable"

// Components
import DatatableHeaderCell from "./DatatableHeaderCell.vue"
import DatatableCell from "./DatatableCell.vue"
import DatatableSelectionCell from "./DatatableSelectionCell.vue"
import DatatableActionsCell from "./DatatableActionsCell.vue"

const props = withDefaults(defineProps<DatatableProps>(), {
  tableClasses: "bg-white",
  actions: () => [],
})

const emit = defineEmits<{
  "state-change": [state: any]
  "selection-change": [selectedRows: Set<number>]
}>()

// Internal state (used when datatableState prop not provided)
const internalState = useDatatableState({
  columns: props.columns.map((c) => c.key),
})

// Use external state if provided, otherwise use internal state
const datatableState = computed(() => props.datatableState || internalState)

// Sync stickyColumns prop to state (backward compatibility)
watch(
  () => props.stickyColumns,
  (newStickyColumns) => {
    if (!props.datatableState && newStickyColumns) {
      datatableState.value.state.value.sticky = newStickyColumns
    }
  },
  { immediate: true }
)

// Emit state changes
watch(
  () => datatableState.value.state.value,
  (newState) => {
    emit("state-change", newState)
  },
  { deep: true }
)

// Check if data is a pagination response
const isPaginationResponse = (data: any): boolean => {
  return data && typeof data === "object" && "data" in data && Array.isArray(data.data)
}

// Extract table data from props (plain array or pagination response)
const tableData = computed<Record<string, any>[]>(() => {
  if (Array.isArray(props.data)) {
    return props.data
  }

  if (isPaginationResponse(props.data)) {
    return props.data.data
  }

  return []
})

// Check if table is empty
const isEmpty = computed(() => !tableData.value || tableData.value.length === 0)

const selection = useDatatableSelection({
  tableData,
  onSelectionChange: (selectedRows) => {
    emit("selection-change", selectedRows)
  },
})

const actions = useDatatableActions({
  actions: toRef(props, "actions"),
})

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

// Helpers for sticky column logic
const isColumnSticky = (columnKey: string): boolean => {
  return props.stickyColumns.includes(columnKey)
}

const isLastStickyColumn = (columnKey: string): boolean => {
  const lastStickyKey = props.stickyColumns[props.stickyColumns.length - 1]
  return columnKey === lastStickyKey
}

const getStickyOffsetVar = (columnKey: string): string => {
  return `--column-${columnKey}-offset`
}
</script>

<template>
  <div
    ref="tableContainerRef"
    class="group/table max-h-full max-w-full overflow-auto rounded-md bg-white dark:bg-zinc-900"
  >
    <table :class="cn('relative w-full caption-bottom text-sm border-collapse', tableClasses)">
      <thead v-if="!isEmpty" ref="theadRef" class="sticky top-0 z-20 bg-white dark:bg-zinc-900">
        <tr class="group border-b border-gray-200 dark:border-zinc-700">
          <!-- Selection Column Header -->
          <DatatableSelectionCell
            v-if="actions.showSelectionColumn.value"
            is-header
            :checked="selection.allSelected.value"
            :indeterminate="selection.someSelected.value"
            @change="selection.toggleAll"
          />

          <!-- Regular Column Headers -->
          <DatatableHeaderCell
            v-for="column in columns"
            :key="column.key"
            :column="column"
            :sticky-columns="isColumnSticky(column.key)"
            :is-last-sticky="isLastStickyColumn(column.key)"
            :sticky-offset-var="getStickyOffsetVar(column.key)"
          />

          <!-- Actions Column Header -->
          <DatatableActionsCell v-if="actions.showActionsColumn.value" is-header />
        </tr>
      </thead>

      <tbody>
        <!-- Data Rows -->
        <template v-if="!isEmpty">
          <tr
            v-for="(row, rowIndex) in tableData"
            :key="rowIndex"
            class="border-b border-gray-200 hover:bg-gray-100/50 dark:border-zinc-700 dark:hover:bg-zinc-900/50"
          >
            <!-- Selection Column Cell -->
            <DatatableSelectionCell
              v-if="actions.showSelectionColumn.value"
              :checked="selection.selectedRows.value.has(rowIndex)"
              @change="selection.toggleRow(rowIndex)"
            />

            <!-- Regular Column Cells -->
            <DatatableCell
              v-for="column in columns"
              :key="column.key"
              :column="column"
              :row="row"
              :sticky-columns="isColumnSticky(column.key)"
              :is-last-sticky="isLastStickyColumn(column.key)"
              :sticky-offset-var="getStickyOffsetVar(column.key)"
            >
              <!-- Pass through custom cell slot -->
              <template v-if="$slots[`row-${column.key}`]" #[`row-${column.key}`]="slotProps">
                <slot :name="`row-${column.key}`" v-bind="slotProps" />
              </template>
            </DatatableCell>

            <!-- Actions Column Cell -->
            <DatatableActionsCell
              v-if="actions.showActionsColumn.value"
              :row="row"
              :row-index="rowIndex"
              :visible-actions="actions.getVisibleActions(row)"
              @action-click="actions.handleActionClick"
            >
              <!-- Pass through custom actions slot -->
              <template v-if="$slots['row-actions']" #actions="slotProps">
                <slot name="row-actions" v-bind="slotProps" />
              </template>
            </DatatableActionsCell>
          </tr>
        </template>

        <!-- Empty State Row -->
        <tr v-else>
          <td
            :colspan="
              columns.length +
              (actions.showSelectionColumn.value ? 1 : 0) +
              (actions.showActionsColumn.value ? 1 : 0)
            "
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
