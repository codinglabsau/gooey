import type { SortingConfig } from "@/components/datatable/types"
import { type Ref, ref, computed, type ComputedRef } from "vue"

export interface DatatableSortingComposable {
  sort: Ref<string | null>
  resetSort: () => void
  cycleSort: (columnId: string) => void
  isColumnSorted: (columnId: string) => boolean
  getSortDirection: (columnId: string) => "ascending" | "descending" | null
  getSortedColumnId: () => string | null
  sortColumn: ComputedRef<string | null>
  sortDirection: ComputedRef<"asc" | "desc" | null>
  setSort: (column: string | null, direction: "asc" | "desc" | null) => void
  toggleSort: (column: string) => void
}

export function useDatatableSorting(options: SortingConfig): DatatableSortingComposable {
  const sort = ref<string | null>(options.defaultSort)

  const isDescending = (sortValue: string): boolean => {
    return sortValue.startsWith("-")
  }

  const extractColumnId = (sortValue: string): string => {
    return isDescending(sortValue) ? sortValue.substring(1) : sortValue
  }

  const resetSort = (): void => {
    sort.value = options.defaultSort
  }

  const cycleSort = (columnId: string): void => {
    const currentSort = sort.value

    if (currentSort === columnId) {
      // Currently ascending, switch to descending
      sort.value = `-${columnId}`
    } else if (currentSort === `-${columnId}`) {
      // Currently descending, clear sort
      sort.value = null
    } else {
      // Not sorted or different column, set to ascending
      sort.value = columnId
    }
  }

  const isColumnSorted = (columnId: string): boolean => {
    if (sort.value === null) {
      return false
    }

    return sort.value === columnId || sort.value === `-${columnId}`
  }

  const getSortDirection = (columnId: string): "ascending" | "descending" | null => {
    if (!isColumnSorted(columnId)) {
      return null
    }

    return isDescending(sort.value as string) ? "descending" : "ascending"
  }

  const getSortedColumnId = (): string | null => {
    if (sort.value === null) {
      return null
    }

    return extractColumnId(sort.value)
  }

  // --- Extra helpers (previously in useDatatableInertia) ---
  const sortColumn = computed<string | null>(() => {
    return getSortedColumnId()
  })

  const sortDirection = computed<"asc" | "desc" | null>(() => {
    const columnId = getSortedColumnId()
    if (!columnId) return null

    const direction = getSortDirection(columnId)
    if (direction === "ascending") return "asc"
    if (direction === "descending") return "desc"
    return null
  })

  const setSort = (column: string | null, direction: "asc" | "desc" | null): void => {
    if (column === null || direction === null) {
      sort.value = null
    } else if (direction === "desc") {
      sort.value = `-${column}`
    } else {
      sort.value = column
    }
  }

  const toggleSort = (column: string): void => {
    cycleSort(column)
  }

  return {
    sort,
    sortColumn,
    sortDirection,
    resetSort,
    cycleSort,
    isColumnSorted,
    getSortDirection,
    getSortedColumnId,
    setSort,
    toggleSort,
  }
}
