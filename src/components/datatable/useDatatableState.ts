/**
 * Composable for managing datatable state with URL synchronization
 * Provides a headless state management system that can be controlled programmatically
 * and hydrated/dehydrated from URL params
 */

import { ref, watch } from "vue"
import type { DatatableState, DatatableStateComposable, DatatableStateOptions } from "./state"

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
  const state = ref<DatatableState>(createDefaultState(options))

  // Store initial state for reset
  const initialState = createDefaultState(options)

  /**
   * Add or update a filter
   */
  function addFilter(key: string, value: any) {
    state.value.filters[key] = {
      enabled: true,
      value,
    }
  }

  /**
   * Remove a filter
   */
  function removeFilter(key: string) {
    if (state.value.filters[key]) {
      state.value.filters[key].enabled = false
      state.value.filters[key].value = null
    }
  }

  /**
   * Clear all filters
   */
  function clearFilters() {
    Object.keys(state.value.filters).forEach((key) => {
      state.value.filters[key].enabled = false
      state.value.filters[key].value = null
    })
  }

  /**
   * Set sort column and direction
   */
  function setSort(column: string | null, direction: "asc" | "desc" | null) {
    state.value.sort = {
      column,
      direction,
    }
  }

  /**
   * Toggle sort for a column (asc -> desc -> none)
   */
  function toggleSort(column: string) {
    if (state.value.sort.column !== column) {
      // New column, start with ascending
      setSort(column, "asc")
    } else if (state.value.sort.direction === "asc") {
      // Currently ascending, switch to descending
      setSort(column, "desc")
    } else {
      // Currently descending, clear sort
      setSort(null, null)
    }
  }

  /**
   * Set search query
   */
  function setSearch(query: string) {
    state.value.search = query
  }

  /**
   * Set current page
   */
  function setPage(page: number) {
    state.value.page = page
  }

  /**
   * Set items per page
   */
  function setPerPage(perPage: number) {
    state.value.perPage = perPage
  }

  /**
   * Set cursor for cursor pagination
   */
  function setCursor(cursor: string | null) {
    state.value.cursor = cursor
  }

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
    state.value.columns[columnKey] = true
  }

  /**
   * Hide a column
   */
  function hideColumn(columnKey: string) {
    state.value.columns[columnKey] = false
  }

  /**
   * Replace entire state (for loading saved views)
   */
  function setState(newState: Partial<DatatableState>) {
    state.value = {
      ...state.value,
      ...newState,
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
    const filters: Record<string, any> = {}
    params.forEach((value, key) => {
      const filterMatch = key.match(new RegExp(`^${prefix}filter\\[(.+)\\]$`))
      if (filterMatch) {
        filters[filterMatch[1]] = {
          enabled: true,
          value,
        }
      }
    })
    if (Object.keys(filters).length > 0) {
      state.value.filters = { ...state.value.filters, ...filters }
    }

    // Parse sort
    const sortColumn = params.get(`${prefix}sort`)
    const sortDirection = params.get(`${prefix}direction`) as "asc" | "desc" | null
    if (sortColumn) {
      state.value.sort = { column: sortColumn, direction: sortDirection || "asc" }
    }

    // Parse search
    const search = params.get(`${prefix}search`)
    if (search) {
      state.value.search = search
    }

    // Parse pagination
    const page = params.get(`${prefix}page`)
    if (page) {
      state.value.page = parseInt(page, 10)
    }
    const perPage = params.get(`${prefix}perPage`)
    if (perPage) {
      state.value.perPage = parseInt(perPage, 10)
    }
    const cursor = params.get(`${prefix}cursor`)
    if (cursor) {
      state.value.cursor = cursor
    }

    // Parse sticky columns
    const sticky: string[] = []
    params.forEach((value, key) => {
      if (key === `${prefix}sticky[]`) {
        sticky.push(value)
      }
    })
    if (sticky.length > 0) {
      state.value.sticky = sticky
    }

    // Parse column visibility
    params.forEach((value, key) => {
      const columnMatch = key.match(new RegExp(`^${prefix}columns\\[(.+)\\]$`))
      if (columnMatch) {
        state.value.columns[columnMatch[1]] = value !== "false"
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
    state.value = createDefaultState(options)
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
    setPage,
    setPerPage,
    setCursor,
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
