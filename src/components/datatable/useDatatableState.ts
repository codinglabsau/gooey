/**
 * Composable for managing datatable state with URL synchronization
 * Provides a headless state management system that can be controlled programmatically
 * and hydrated/dehydrated from URL params
 */

import { ref, watch, computed } from "vue"
import type { DatatableState, DatatableStateComposable, DatatableStateOptions } from "./state"
import { useDatatableInertia } from "@/components/datatable/useDatatableInertia"

/**
 * Create default state
 */
function createDefaultState(options: DatatableStateOptions = {}): DatatableState {
  const defaultColumns: Record<string, boolean> = {}
  if (options.columns) {
    options.columns.forEach((key) => {
      defaultColumns[key] = true
    })
  }

  return {
    filters: {},
    sort: {
      column: null,
      direction: null,
    },
    search: "",
    page: 1,
    perPage: options.defaultPerPage || 15,
    cursor: null,
    sticky: [],
    columns: defaultColumns,
    ...options.initialState,
  }
}

/**
 * Composable for datatable state management
 */
export function useDatatableState(options: DatatableStateOptions = {}): DatatableStateComposable {
  // Get initial state for extracting defaults
  const initialDefaults = createDefaultState(options)

  // Initialize the query parameter composable (filters, sort, search)
  const inertiaState = useDatatableInertia({
    sorting: {
      defaultSort: initialDefaults.sort.column && initialDefaults.sort.direction
        ? initialDefaults.sort.direction === "desc"
          ? `-${initialDefaults.sort.column}`
          : initialDefaults.sort.column
        : null,
    },
    filtering: {
      defaultFilters: initialDefaults.filters,
    },
    searching: {
      defaultSearch: initialDefaults.search,
    },
  })

  // Manage sticky columns and column visibility locally (not query parameters)
  const sticky = ref<string[]>(initialDefaults.sticky)
  const columns = ref<Record<string, boolean>>(initialDefaults.columns)

  // Computed state object that combines all parts
  const state = computed<DatatableState>(() => ({
    filters: inertiaState.filters.value,
    sort: {
      column: inertiaState.sortColumn.value,
      direction: inertiaState.sortDirection.value,
    },
    search: inertiaState.search.value,
    page: initialDefaults.page,
    perPage: initialDefaults.perPage,
    cursor: initialDefaults.cursor,
    sticky: sticky.value,
    columns: columns.value,
  }))

  // Store initial state for reset
  const initialState = createDefaultState(options)

  /**
   * Add or update a filter
   */
  const addFilter = inertiaState.addFilter

  /**
   * Remove a filter
   */
  const removeFilter = inertiaState.removeFilter

  /**
   * Clear all filters
   */
  const clearFilters = inertiaState.clearFilters

  /**
   * Set sort column and direction
   */
  const setSort = inertiaState.setSort

  /**
   * Toggle sort for a column (asc -> desc -> none)
   */
  const toggleSort = inertiaState.toggleSort

  /**
   * Set search query
   */
  const setSearch = inertiaState.setSearch

  /**
   * Make a column sticky (and all columns before it)
   * This follows InertiaUI pattern where making column N sticky
   * automatically makes columns 0 to N sticky
   */
  function makeSticky(columnKey: string) {
    if (!options.columns) return

    // Find the index of the target column
    const targetIndex = options.columns.indexOf(columnKey)
    if (targetIndex === -1) return

    // Make all columns from start up to and including target sticky
    const newSticky = options.columns.slice(0, targetIndex + 1)
    state.value.sticky = newSticky
  }

  /**
   * Remove sticky from a column (and all columns after it)
   */
  function undoSticky(columnKey: string) {
    const index = state.value.sticky.indexOf(columnKey)
    if (index === -1) return

    // Remove this column and all after it
    state.value.sticky = state.value.sticky.slice(0, index)
  }

  /**
   * Toggle column visibility
   */
  function toggleColumn(columnKey: string) {
    if (columnKey in state.value.columns) {
      state.value.columns[columnKey] = !state.value.columns[columnKey]
    }
  }

  /**
   * Show a column
   */
  function showColumn(columnKey: string) {
    columns.value[columnKey] = true
  }

  /**
   * Hide a column
   */
  function hideColumn(columnKey: string) {
    columns.value[columnKey] = false
  }

  /**
   * Replace entire state (for loading saved views)
   */
  function setState(newState: Partial<DatatableState>) {
    // Update filters
    if (newState.filters !== undefined) {
      inertiaState.filters.value = newState.filters
    }

    // Update sort
    if (newState.sort !== undefined) {
      inertiaState.setSort(newState.sort.column, newState.sort.direction)
    }

    // Update search
    if (newState.search !== undefined) {
      inertiaState.search.value = newState.search
    }

    // Update sticky columns
    if (newState.sticky !== undefined) {
      sticky.value = newState.sticky
    }

    // Update column visibility
    if (newState.columns !== undefined) {
      columns.value = newState.columns
    }
  }

  /**
   * Get current state as URL query string
   * Uses simple URLSearchParams for now, can be upgraded to qs library later
   */
  function toQueryString(): string {
    const params = new URLSearchParams()
    const prefix = options.urlPrefix || ""

    // Add filters
    Object.entries(state.value.filters).forEach(([key, filter]) => {
      if (filter.enabled && filter.value != null) {
        params.append(`${prefix}filter[${key}]`, String(filter.value))
      }
    })

    // Add sort
    if (state.value.sort.column && state.value.sort.direction) {
      params.append(`${prefix}sort`, state.value.sort.column)
      params.append(`${prefix}direction`, state.value.sort.direction)
    }

    // Add search
    if (state.value.search) {
      params.append(`${prefix}search`, state.value.search)
    }

    // Add pagination
    if (state.value.page !== 1) {
      params.append(`${prefix}page`, String(state.value.page))
    }
    if (state.value.perPage !== (options.defaultPerPage || 15)) {
      params.append(`${prefix}perPage`, String(state.value.perPage))
    }
    if (state.value.cursor) {
      params.append(`${prefix}cursor`, state.value.cursor)
    }

    // Add sticky columns
    state.value.sticky.forEach((columnKey) => {
      params.append(`${prefix}sticky[]`, columnKey)
    })

    // Add hidden columns (only include if false)
    Object.entries(state.value.columns).forEach(([key, visible]) => {
      if (!visible) {
        params.append(`${prefix}columns[${key}]`, "false")
      }
    })

    return params.toString()
  }

  /**
   * Get current state as plain object (for saving views)
   */
  function toObject(): DatatableState {
    return { ...state.value }
  }

  /**
   * Hydrate state from URL query string
   */
  function fromQueryString(queryString: string) {
    const params = new URLSearchParams(queryString)
    const prefix = options.urlPrefix || ""

    // Parse filters
    const parsedFilters: Record<string, any> = {}
    params.forEach((value, key) => {
      const filterMatch = key.match(new RegExp(`^${prefix}filter\\[(.+)\\]$`))
      if (filterMatch) {
        parsedFilters[filterMatch[1]] = {
          enabled: true,
          value,
        }
      }
    })
    if (Object.keys(parsedFilters).length > 0) {
      inertiaState.filters.value = { ...inertiaState.filters.value, ...parsedFilters }
    }

    // Parse sort
    const sortColumn = params.get(`${prefix}sort`)
    const sortDirection = params.get(`${prefix}direction`) as "asc" | "desc" | null
    if (sortColumn) {
      inertiaState.setSort(sortColumn, sortDirection || "asc")
    }

    // Parse search
    const searchValue = params.get(`${prefix}search`)
    if (searchValue) {
      inertiaState.search.value = searchValue
    }

    // Parse sticky columns
    const stickyColumns: string[] = []
    params.forEach((value, key) => {
      if (key === `${prefix}sticky[]`) {
        stickyColumns.push(value)
      }
    })
    if (stickyColumns.length > 0) {
      sticky.value = stickyColumns
    }

    // Parse column visibility
    params.forEach((value, key) => {
      const columnMatch = key.match(new RegExp(`^${prefix}columns\\[(.+)\\]$`))
      if (columnMatch) {
        columns.value[columnMatch[1]] = value !== "false"
      }
    })
  }

  /**
   * Hydrate state from plain object
   */
  function fromObject(obj: Partial<DatatableState>) {
    setState(obj)
  }

  /**
   * Reset state to defaults
   */
  function reset() {
    // Reset to initial state by updating all underlying refs
    setState(initialState)
  }

  // Optional: Auto-sync with URL if enabled
  if (options.syncWithUrl && typeof window !== "undefined") {
    // Watch state and update URL
    watch(
      state,
      () => {
        const queryString = toQueryString()
        const newUrl = queryString
          ? `${window.location.pathname}?${queryString}`
          : window.location.pathname
        window.history.replaceState({}, "", newUrl)
      },
      { deep: true }
    )

    // Initialize from current URL on mount
    if (window.location.search) {
      fromQueryString(window.location.search.substring(1))
    }
  }

  return {
    state,
    addFilter,
    removeFilter,
    clearFilters,
    setSort,
    toggleSort,
    setSearch,
    makeSticky,
    undoSticky,
    toggleColumn,
    showColumn,
    hideColumn,
    setState,
    toQueryString,
    toObject,
    fromQueryString,
    fromObject,
    reset,
  }
}
