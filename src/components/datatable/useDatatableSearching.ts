import { ref, type Ref } from "vue"

export interface DatatableSearchingComposable {
  search: Ref<string>
  setSearch: (query: string) => void
  clearSearch: () => void
  hasSearch: () => boolean
}

export interface SearchingConfig {
  defaultSearch?: string
}

export function useDatatableSearching(options: SearchingConfig = {}): DatatableSearchingComposable {
  const search = ref<string>(options.defaultSearch || "")

  const setSearch = (query: string): void => {
    search.value = query
  }

  const clearSearch = (): void => {
    search.value = ""
  }

  const hasSearch = (): boolean => {
    return search.value.length > 0
  }

  return {
    search,
    setSearch,
    clearSearch,
    hasSearch,
  }
}
