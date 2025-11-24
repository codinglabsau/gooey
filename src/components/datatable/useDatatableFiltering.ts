import { computed, ref, type ComputedRef, type Ref } from "vue"
import type { FilteringConfig, FilterConfig } from "@/components/datatable/types"

export interface FilterState {
  id: string
  value: any
  enabled: boolean
}

export interface DatatableFilteringComposable {
  // All filters keyed by id
  filters: Ref<Record<string, FilterState>>

  // Computed helpers
  activeFilters: ComputedRef<Record<string, FilterState>>
  activeFilterCount: ComputedRef<number>
  isAnyFilterActive: ComputedRef<boolean>

  // Mutators
  setFilter: (id: string, value: any) => void
  enableFilter: (id: string) => void
  disableFilter: (id: string) => void
  clearFilter: (id: string) => void
  clearAllFilters: () => void
  registerFilter: (id: string, initialValue?: any) => void
  unregisterFilter: (id: string) => void

  // Queries
  hasFilter: (id: string) => boolean
  getFilterValue: (id: string) => any
}

export function useDatatableFiltering(options: FilteringConfig): DatatableFilteringComposable {
  // Internal state: record keyed by filter id
  const filters: Ref<Record<string, FilterState>> = ref({})

  // Helper to read default value from config
  const getDefaultValue = (id: string): any => {
    const cfg = (options?.filters || []).find((f: FilterConfig) => f.id === id)
    return cfg?.defaultValue ?? null
  }

  const isEmptyValue = (value: any): boolean => {
    return (
      value === null || value === undefined || (typeof value === "string" && value.length === 0)
    )
  }

  // Initialize available filters from config using defaults (disabled if empty by default)
  if (options?.filters && Array.isArray(options.filters)) {
    for (const f of options.filters as FilterConfig[]) {
      const defaultValue = f.defaultValue ?? null
      filters.value[f.id] = {
        id: f.id,
        enabled: !isEmptyValue(defaultValue),
        value: defaultValue,
      }
    }
  }

  const registerFilter = (id: string, initialValue: any = null): void => {
    if (!filters.value[id]) {
      const v = initialValue ?? getDefaultValue(id)
      filters.value[id] = { id, enabled: !isEmptyValue(v), value: v }
    }
  }

  const unregisterFilter = (id: string): void => {
    if (filters.value[id]) {
      delete filters.value[id]
    }
  }

  const enableFilter = (id: string): void => {
    if (!filters.value[id]) registerFilter(id)
    filters.value[id].enabled = true
  }

  const disableFilter = (id: string): void => {
    if (!filters.value[id]) return
    filters.value[id].enabled = false
  }

  const setFilter = (id: string, value: any): void => {
    if (!filters.value[id]) registerFilter(id)
    filters.value[id].value = value
    // If value is considered "empty", disable; otherwise enable
    filters.value[id].enabled = !isEmptyValue(value)
  }

  const clearFilter = (id: string): void => {
    if (!filters.value[id]) return
    const v = getDefaultValue(id)
    filters.value[id].value = v
    filters.value[id].enabled = !isEmptyValue(v)
  }

  const clearAllFilters = (): void => {
    Object.keys(filters.value).forEach((key) => {
      const v = getDefaultValue(key)
      filters.value[key].value = v
      filters.value[key].enabled = !isEmptyValue(v)
    })
  }

  const hasFilter = (id: string): boolean => {
    return filters.value[id]?.enabled === true
  }

  const getFilterValue = (id: string): any => {
    return filters.value[id]?.enabled ? filters.value[id].value : null
  }

  const activeFilters = computed<Record<string, FilterState>>(() => {
    const out: Record<string, FilterState> = {}
    for (const [id, f] of Object.entries(filters.value)) {
      if (f.enabled) out[id] = f
    }
    return out
  })

  const activeFilterCount = computed<number>(() => Object.keys(activeFilters.value).length)
  const isAnyFilterActive = computed<boolean>(() => activeFilterCount.value > 0)

  return {
    filters,
    activeFilters,
    activeFilterCount,
    isAnyFilterActive,
    setFilter,
    enableFilter,
    disableFilter,
    clearFilter,
    clearAllFilters,
    registerFilter,
    unregisterFilter,
    hasFilter,
    getFilterValue,
  }
}
