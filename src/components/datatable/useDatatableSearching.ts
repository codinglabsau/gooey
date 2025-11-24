import { ref, type Ref } from "vue"

export interface DatatableSearchingComposable {
  searchEnabled: Ref<boolean>
  search: Ref<string>
  setSearch: (query: string) => void
  clearSearch: () => void
  hasSearch: () => boolean
}

export interface SearchingConfig {
  search?: boolean
}

export function useDatatableSearching(options: SearchingConfig): DatatableSearchingComposable {
  const searchEnabled = ref<boolean>(options.search ? options.search : true)

  const search = ref<string>("")

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
    searchEnabled,
    search,
    setSearch,
    clearSearch,
    hasSearch,
  }
}
