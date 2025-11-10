import { computed, type ComputedRef } from "vue"
import {
  useDatatableSorting,
  type DatatableSortingComposable,
} from "@/components/datatable/useDatatableSorting"
import {
  useDatatableFiltering,
  type DatatableFilteringComposable,
} from "@/components/datatable/useDatatableFiltering"
import {
  useDatatableSearching,
  type DatatableSearchingComposable,
} from "@/components/datatable/useDatatableSearching"
import type { SortingConfig } from "@/components/datatable/types"
import type { FilteringConfig } from "@/components/datatable/useDatatableFiltering"
import type { SearchingConfig } from "@/components/datatable/useDatatableSearching"

/**
 * Higher-order composable that encompasses all query parameter-related composables
 * for datatable state management with Inertia.js
 */
export interface DatatableInertiaComposable
  extends DatatableSortingComposable,
    DatatableFilteringComposable,
    DatatableSearchingComposable {
  // Additional computed properties for easier access
  sortColumn: ComputedRef<string | null>
  sortDirection: ComputedRef<"asc" | "desc" | null>

  // Adapter methods for compatibility with different sort formats
  setSort: (column: string | null, direction: "asc" | "desc" | null) => void
  toggleSort: (column: string) => void
}

export interface DatatableInertiaConfig {
  sorting?: SortingConfig
  filtering?: FilteringConfig
  searching?: SearchingConfig
}

export function useDatatableInertia(
  options: DatatableInertiaConfig = {}
): DatatableInertiaComposable {
  // Initialize all composables
  const sortingState = useDatatableSorting(options.sorting || { defaultSort: null })
  const filteringState = useDatatableFiltering(options.filtering || {})
  const searchingState = useDatatableSearching(options.searching || {})

  // Computed properties for sort column and direction
  // Convert from string format ("column" or "-column") to object format
  const sortColumn = computed<string | null>(() => {
    return sortingState.getSortedColumnId()
  })

  const sortDirection = computed<"asc" | "desc" | null>(() => {
    const columnId = sortingState.getSortedColumnId()
    if (!columnId) return null

    const direction = sortingState.getSortDirection(columnId)
    if (direction === "ascending") return "asc"
    if (direction === "descending") return "desc"
    return null
  })

  // Adapter method: set sort using object format
  const setSort = (column: string | null, direction: "asc" | "desc" | null): void => {
    if (column === null || direction === null) {
      sortingState.sort.value = null
    } else if (direction === "desc") {
      sortingState.sort.value = `-${column}`
    } else {
      sortingState.sort.value = column
    }
  }

  // Adapter method: toggle sort (cycles through asc -> desc -> none)
  const toggleSort = (column: string): void => {
    sortingState.cycleSort(column)
  }

  return {
    // Sorting
    ...sortingState,
    sortColumn,
    sortDirection,
    setSort,
    toggleSort,

    // Filtering
    ...filteringState,

    // Searching
    ...searchingState,
  }
}
