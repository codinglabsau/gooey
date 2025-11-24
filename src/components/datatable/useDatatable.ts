import type {
  ActionConfig,
  ColumnConfig,
  FilterConfig,
  PaginationResponse,
  DatatableStrings,
} from "@/components/datatable/types"
import {
  type DatatableColumnsComposable,
  useDatatableColumns,
} from "@/components/datatable/useDatatableColumns"
import {
  type DatatableActionsComposable,
  useDatatableActions,
} from "@/components/datatable/useDatatableActions"
import {
  type DatatableInertiaComposable,
  useDatatableInertia,
} from "@/components/datatable/useDatatableInertia"
import { computed, type ComputedRef } from "vue"
import { usePage } from "@inertiajs/vue3"

export type DatatableState = DatatableColumnsComposable &
  DatatableActionsComposable &
  DatatableInertiaComposable & {
    data: ComputedRef<PaginationResponse>
    hasData: ComputedRef<boolean>
    emptyMessage: ComputedRef<string>
    // Optional localized/custom strings available to UI components
    strings?: DatatableStrings
    // Optional classes; only applied when provided and non-empty
    tableClass?: string
    tableContainerClass?: string
  }

export interface DatatableOptions {
  /**
   * Required key of the Inertia page prop that contains the paginated dataset,
   * e.g. 'auctions'. Data is read reactively from usePage().props.value[dataKey].
   */
  dataKey: string

  columns: ColumnConfig[]

  actions?: ActionConfig[]

  filters?: FilterConfig[]

  defaultSort?: string | null

  search?: boolean
  // Optional: customize the search query param name (default 'search', e.g. 'q')
  searchParamName?: string
  // When true (default), search auto-applies (debounced). Set false for manual submit.
  searchAutoApply?: boolean

  // Localizable/customizable strings
  strings?: DatatableStrings

  // Strings
  emptyMessage?: string

  // Classes
  tableClass?: string
  tableContainerClass?: string
}

export function useDatatable(options: DatatableOptions): DatatableState {
  const columnState = useDatatableColumns(options.columns)

  const actionState = useDatatableActions(options.actions ? options.actions : [])

  const inertiaState = useDatatableInertia({
    sorting: {
      defaultSort: options.defaultSort ? options.defaultSort : null,
    },
    searching: {
      search: options.search ? options.search : false,
      paramName: options?.searchParamName,
      autoApplySearch: options.searchAutoApply !== false,
    },
    filtering: {
      filters: options.filters ? options.filters : [],
    },
  })

  // Read data reactively from Inertia page props using the required key
  const page = usePage()
  const data: ComputedRef<PaginationResponse> = computed(
    () => page.props[options.dataKey] as PaginationResponse
  )

  const hasData = computed(() => (data.value?.data?.length ?? 0) > 0)

  const emptyMessage = computed(
    () => options.strings?.emptyMessage ?? options.emptyMessage ?? "No results."
  )

  return {
    ...columnState,
    ...actionState,
    ...inertiaState,

    // Data
    data,
    hasData,

    // Strings
    emptyMessage,
    // Expose strings so UI can localize labels/placeholders
    // Cast to any to allow components to read optional keys safely
    ...(options.strings ? { strings: options.strings } : {}),

    // Classes
    tableClass:
      typeof options.tableClass === "string" && options.tableClass.trim().length > 0
        ? options.tableClass
        : undefined,
    tableContainerClass:
      typeof options.tableContainerClass === "string" &&
      options.tableContainerClass.trim().length > 0
        ? options.tableContainerClass
        : undefined,
  }
}
