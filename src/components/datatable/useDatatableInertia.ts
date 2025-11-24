import {
  type DatatableSortingComposable,
  useDatatableSorting,
} from "@/components/datatable/useDatatableSorting"
import {
  type DatatableSearchingComposable,
  useDatatableSearching,
} from "@/components/datatable/useDatatableSearching"
import {
  type DatatableFilteringComposable,
  useDatatableFiltering,
} from "@/components/datatable/useDatatableFiltering"
import type {
  FilteringConfig,
  SearchingConfig,
  SortingConfig,
  FilterConfig,
} from "@/components/datatable/types"
import { onMounted, computed, type ComputedRef } from "vue"
import * as qs from "qs"
import { router } from "@inertiajs/vue3"

export interface DatatableInertiaComposable
  extends DatatableSortingComposable,
    DatatableSearchingComposable,
    DatatableFilteringComposable {
  // New API
  filterWithoutApplying: (id: string, value: any) => void
  filter: (id: string, value: any) => void
  resetFilter: (id: string) => void
  clearFilters: () => void
  applyFilters: () => void

  // Useful computed snapshot of what will be applied to query params
  appliedQuery: ComputedRef<Record<string, any>>

  // Expose filter configs for UI consumption
  filterConfigs?: FilterConfig[]

  // Whether search auto-apply (debounced) is enabled
  searchAutoEnabled: boolean
}

export interface DatatableInertiaConfig {
  sorting: SortingConfig
  searching: SearchingConfig
  filtering: FilteringConfig
}

export function useDatatableInertia(options: DatatableInertiaConfig): DatatableInertiaComposable {
  const sortingState = useDatatableSorting(options.sorting)
  const searchingState = useDatatableSearching(options.searching)
  const filteringState = useDatatableFiltering(options.filtering)

  // Helper: get list of filter ids from config for URL reconciliation
  const filterIds: string[] = Array.isArray(options.filtering?.filters)
    ? options.filtering.filters!.map((f) => f.id)
    : []

  const isSpatieStyle = (): boolean => options?.filtering?.paramStyle !== "flat"
  const searchParamName = (): string => options?.searching?.paramName || "search"
  // In Spatie mode, default to treating search like a filter using key 'search'
  // unless explicitly set to null to force top-level
  const searchFilterKey = (): string | null =>
    isSpatieStyle() ? options?.filtering?.searchAsFilterKey ?? "search" : null
  const searchAutoEnabled = options?.searching?.autoApplySearch !== false

  // Build a query object representing current in-memory state
  const buildQueryFromState = (): Record<string, any> => {
    const query: Record<string, any> = {}

    // Sorting (same for both styles)
    if (sortingState.sort.value) {
      query.sort = sortingState.sort.value
    }

    // Filters container for spatie style
    const filterBucket: Record<string, any> = {}

    // Searching
    if (searchingState.search.value && searchingState.search.value.length > 0) {
      const searchVal = searchingState.search.value
      const key = searchFilterKey()
      if (key) {
        filterBucket[key] = searchVal
      } else {
        query[searchParamName()] = searchVal
      }
    }

    // Filters (enabled only)
    const active = filteringState.activeFilters.value
    for (const [id, f] of Object.entries(active)) {
      const v = f.value
      const isEmpty = v === null || v === undefined || (typeof v === "string" && v.length === 0)
      if (isEmpty) continue
      if (isSpatieStyle()) {
        filterBucket[id] = v
      } else {
        query[id] = v
      }
    }

    if (isSpatieStyle()) {
      // Only include filter when it has keys
      if (Object.keys(filterBucket).length > 0) {
        query.filter = filterBucket
      }
    }

    return query
  }

  // Merge our query params into the existing URL, preserving unrelated params
  const writeQueryToUrl = (): void => {
    const current = qs.parse(window.location.search.replace(/^\?/, "")) as Record<string, any>

    // Remove known keys we manage
    delete current.sort
    if (!isSpatieStyle()) {
      delete current[searchParamName()]
      for (const id of filterIds) delete current[id]
    } else {
      // In Spatie style we manage current.filter object; preserve unrelated top-level params
      const currentFilter = (current.filter || {}) as Record<string, any>
      const nextFilter: Record<string, any> = { ...currentFilter }
      // Remove managed filter ids (including optional searchAsFilterKey)
      for (const id of filterIds) delete nextFilter[id]
      {
        const key = searchFilterKey()
        if (key) delete nextFilter[key]
      }
      // We'll rebuild filter later from state
      current.filter = nextFilter
      // Also remove top-level search if we intend to use filter-based search
      if (searchFilterKey()) delete current[searchParamName()]
    }

    const stateQuery = buildQueryFromState()
    let next: Record<string, any>
    if (isSpatieStyle()) {
      // Merge filter buckets specifically
      const nextFilter = {
        ...(current.filter || {}),
        ...(stateQuery.filter || {}),
      }
      next = {
        ...current,
        ...stateQuery,
        filter: Object.keys(nextFilter).length > 0 ? nextFilter : undefined,
      }
      if (next.filter === undefined) delete next.filter
    } else {
      next = {
        ...current,
        ...stateQuery,
      }
    }

    const queryString = qs.stringify(next, {
      encode: false,
      arrayFormat: isSpatieStyle() ? "brackets" : "indices",
    })
    const baseUrl = window.location.pathname + (queryString ? `?${queryString}` : "")
    window.history.replaceState({}, "", baseUrl)
  }

  // Public lifecycle methods (new API)
  const applyFilters = (): void => {
    writeQueryToUrl()
    router.reload()
  }

  const filterWithoutApplying = (id: string, value: any): void => {
    filteringState.setFilter(id, value)
    // Auto-apply by default unless explicitly disabled in config
    const auto = options?.filtering?.autoApplyFilters !== false
    if (auto) applyFilters()
  }

  const filter = (id: string, value: any): void => {
    filteringState.setFilter(id, value)
    applyFilters()
  }

  const resetFilter = (id: string): void => {
    filteringState.clearFilter(id)
    applyFilters()
  }

  const clearFilters = (): void => {
    filteringState.clearAllFilters()
    applyFilters()
  }

  // Expose snapshot for headless rendering needs
  const appliedQuery = computed<Record<string, any>>(() => buildQueryFromState())

  // Hydrate in-memory state from current query params on mount
  onMounted(() => {
    const params = qs.parse(window.location.search.replace(/^\?/, "")) as Record<string, any>

    // Sorting
    if (typeof params.sort === "string" || params.sort === null) {
      sortingState.sort.value = params.sort ?? null
    }

    // Searching
    {
      const key = searchFilterKey()
      if (key) {
        const spFilter = (params.filter || {}) as Record<string, any>
        const val = spFilter[key]
        if (typeof val === "string") searchingState.search.value = val
      } else {
        const sName = searchParamName()
        if (typeof (params as any)[sName] === "string") {
          searchingState.search.value = (params as any)[sName]
        }
      }
    }

    // Filters (only the ones we know about)
    const sourceFilters: Record<string, any> = isSpatieStyle()
      ? ((params.filter || {}) as Record<string, any>)
      : (params as Record<string, any>)
    for (const id of filterIds) {
      const v = sourceFilters[id]
      if (v !== undefined && v !== null && !(typeof v === "string" && v.length === 0)) {
        filteringState.setFilter(id, v)
      } else {
        // ensure not active if not present
        filteringState.clearFilter(id)
      }
    }
  })

  // Wrap search setters to honor auto-apply behavior
  const setSearch = (query: string): void => {
    searchingState.setSearch(query)
    if (searchAutoEnabled) {
      // In auto mode, apply on each change (DatatableSearch is debounced at UI level)
      applyFilters()
    }
  }

  const clearSearch = (): void => {
    searchingState.clearSearch()
    if (searchAutoEnabled) {
      applyFilters()
    }
  }

  return {
    ...sortingState,
    ...searchingState,
    ...filteringState,
    filterWithoutApplying,
    filter,
    resetFilter,
    clearFilters,
    applyFilters,
    appliedQuery,
    filterConfigs: options.filtering?.filters,
    // override search methods to include auto-apply
    setSearch,
    clearSearch,
    searchAutoEnabled,
  }
}
