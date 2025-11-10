import type { SortingConfig } from "@/components/datatable/types"
import { type Ref, ref } from "vue"

export interface DatatableSortingComposable {
  sort: Ref<string | null>
  resetSort: () => void
  cycleSort: (columnId: string) => void
  isColumnSorted: (columnId: string) => boolean
  getSortDirection: (columnId: string) => 'ascending' | 'descending' | null
  getSortedColumnId: () => string | null
}

export function useDatatableSorting(options: SortingConfig): DatatableSortingComposable {
  const sort = ref<string | null>(options.defaultSort)

  const isDescending = (sortValue: string): boolean => {
    return sortValue.startsWith('-')
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

  const getSortDirection = (columnId: string): 'ascending' | 'descending' | null => {
    if (!isColumnSorted(columnId)) {
      return null
    }

    return isDescending(sort.value as string) ? 'descending' : 'ascending'
  }

  const getSortedColumnId = (): string | null => {
    if (sort.value === null) {
      return null
    }

    return extractColumnId(sort.value)
  }

  return {
    sort,
    resetSort,
    cycleSort,
    isColumnSorted,
    getSortDirection,
    getSortedColumnId,
  }
}
