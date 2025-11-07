/**
 * Datatable Selection Composable
 *
 * Centralizes all row selection logic for the datatable.
 * When selection issues occur, search for "useDatatableSelection" to find all selection-related code.
 */

import { computed, ref } from "vue"
import type { Ref } from "vue"

export interface DatatableSelectionComposable {
  /**
   * Set of selected row indices
   */
  selectedRows: Ref<Set<number>>

  /**
   * Whether all rows are currently selected
   */
  allSelected: Ref<boolean>

  /**
   * Whether some (but not all) rows are selected
   */
  someSelected: Ref<boolean>

  /**
   * Toggle selection for a specific row
   */
  toggleRow: (index: number) => void

  /**
   * Toggle all rows (select all or deselect all)
   */
  toggleAll: () => void

  /**
   * Clear all selections
   */
  clearSelection: () => void

  /**
   * Get array of selected row data objects
   */
  getSelectedRowData: () => Record<string, any>[]
}

export interface DatatableSelectionOptions {
  /**
   * Reactive array of table data
   */
  tableData: Ref<Record<string, any>[]>

  /**
   * Callback when selection changes
   */
  onSelectionChange?: (selectedRows: Set<number>) => void
}

/**
 * Composable for managing datatable row selection
 */
export function useDatatableSelection(
  options: DatatableSelectionOptions
): DatatableSelectionComposable {
  const { tableData, onSelectionChange } = options

  // Local state for selected row indices
  const selectedRows = ref<Set<number>>(new Set())

  // Computed: Are all rows selected?
  const allSelected = computed(() => {
    if (!tableData.value || tableData.value.length === 0) return false
    return tableData.value.every((_, index) => selectedRows.value.has(index))
  })

  // Computed: Are some (but not all) rows selected?
  const someSelected = computed(() => {
    if (!tableData.value || tableData.value.length === 0) return false
    return selectedRows.value.size > 0 && !allSelected.value
  })

  // Toggle selection for a specific row
  const toggleRow = (index: number) => {
    if (selectedRows.value.has(index)) {
      selectedRows.value.delete(index)
    } else {
      selectedRows.value.add(index)
    }
    onSelectionChange?.(selectedRows.value)
  }

  // Toggle all rows (select all or deselect all)
  const toggleAll = () => {
    if (allSelected.value) {
      selectedRows.value.clear()
    } else {
      tableData.value.forEach((_, index) => {
        selectedRows.value.add(index)
      })
    }
    onSelectionChange?.(selectedRows.value)
  }

  // Clear all selections
  const clearSelection = () => {
    selectedRows.value.clear()
    onSelectionChange?.(selectedRows.value)
  }

  // Get array of selected row data objects
  const getSelectedRowData = (): Record<string, any>[] => {
    return Array.from(selectedRows.value)
      .map((index) => tableData.value[index])
      .filter(Boolean)
  }

  return {
    selectedRows,
    allSelected,
    someSelected,
    toggleRow,
    toggleAll,
    clearSelection,
    getSelectedRowData,
  }
}
