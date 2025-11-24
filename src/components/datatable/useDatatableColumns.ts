import type { ColumnConfig } from "@/components/datatable/types"
import { computed, ref, type ComputedRef, type Ref } from "vue"

export interface DatatableColumnsComposable {
  columnDefinitions: ColumnConfig[]

  columns: ComputedRef<ColumnConfig[]>

  visibleColumns: Ref<string[]>

  columnOrder: Ref<string[]>

  stickyColumns: Ref<string[]>

  setVisibleColumns: (columnIds: string[]) => void

  setColumnOrder: (columnIds: string[]) => void

  setStickyColumns: (columnIds: string[]) => void

  stickColumn: (columnId: string) => void

  unstickColumn: (columnId: string) => void
}

export function useDatatableColumns(columnDefinitions: ColumnConfig[]) {
  const visibleColumns = ref<string[]>([])
  const setVisibleColumns = (columnIds: string[]) => {
    visibleColumns.value = columnIds
  }

  const columnOrder = ref<string[]>([])
  const setColumnOrder = (columnIds: string[]) => {
    columnOrder.value = columnIds
  }

  const stickyColumns = ref<string[]>([])
  const setStickyColumns = (columnIds: string[]) => {
    stickyColumns.value = columnIds
  }
  const stickColumn = (columnId: string) => {
    if (!stickyColumns.value.includes(columnId)) {
      stickyColumns.value.push(columnId)
    }
  }
  const unstickColumn = (columnId: string) => {
    if (stickyColumns.value.includes(columnId)) {
      stickyColumns.value = stickyColumns.value.filter((id: string) => id !== columnId)
    }
  }

  const columns = computed(() => {
    // Start with base columns
    let result: ColumnConfig[] = columnDefinitions

    // Apply ordering if specified
    if (columnOrder.value.length > 0) {
      const columnMap = new Map(columnDefinitions.map((col) => [col.id, col]))
      result = columnOrder.value
        .map((id) => columnMap.get(id))
        .filter((column): column is ColumnConfig => column !== undefined)
    }

    // Apply visibility filtering if specified
    if (visibleColumns.value.length > 0) {
      result = result.filter((column) => visibleColumns.value.includes(column.id))
    }

    return result
  })

  return {
    columns,
    columnDefinitions,
    visibleColumns,
    columnOrder,
    stickyColumns,
    setVisibleColumns,
    setColumnOrder,
    setStickyColumns,
    stickColumn,
    unstickColumn,
  }
}
