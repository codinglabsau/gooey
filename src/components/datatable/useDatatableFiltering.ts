import { ref, type Ref } from "vue"

export interface FilterState {
  enabled: boolean
  value: any
}

export interface DatatableFilteringComposable {
  filters: Ref<Record<string, FilterState>>
  addFilter: (key: string, value: any) => void
  removeFilter: (key: string) => void
  clearFilters: () => void
  hasFilter: (key: string) => boolean
  getFilterValue: (key: string) => any
}

export interface FilteringConfig {
  defaultFilters?: Record<string, FilterState>
}

export function useDatatableFiltering(options: FilteringConfig = {}): DatatableFilteringComposable {
  const filters = ref<Record<string, FilterState>>(options.defaultFilters || {})

  const addFilter = (key: string, value: any): void => {
    filters.value[key] = {
      enabled: true,
      value,
    }
  }

  const removeFilter = (key: string): void => {
    if (filters.value[key]) {
      filters.value[key].enabled = false
      filters.value[key].value = null
    }
  }

  const clearFilters = (): void => {
    Object.keys(filters.value).forEach((key) => {
      filters.value[key].enabled = false
      filters.value[key].value = null
    })
  }

  const hasFilter = (key: string): boolean => {
    return filters.value[key]?.enabled === true
  }

  const getFilterValue = (key: string): any => {
    return filters.value[key]?.enabled ? filters.value[key].value : null
  }

  return {
    filters,
    addFilter,
    removeFilter,
    clearFilters,
    hasFilter,
    getFilterValue,
  }
}
