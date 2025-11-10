import type { Ref } from "vue"
import type { ActionConfig, ColumnConfig, SortingConfig } from "@/components/datatable/types"
import {
  useDatatableColumns,
  type DatatableColumnsComposable,
} from "@/components/datatable/useDatatableColumns"
import {
  useDatatableActions,
  type DatatableActionsComposable,
} from "@/components/datatable/useDatatableActions"
import {
  useDatatableSorting,
  type DatatableSortingComposable,
} from "@/components/datatable/useDatatableSorting"

export type DatatableState = DatatableColumnsComposable &
  DatatableActionsComposable &
  DatatableSortingComposable

export interface DatatableOptions {
  actions?: ActionConfig[]

  columns: ColumnConfig[]

  sorting: SortingConfig
}

export function useDatatable(options: DatatableOptions): DatatableState {
  const columnState = useDatatableColumns(options.columns)

  const actionState = useDatatableActions(options.actions ? options.actions : [])

  const sortingState = useDatatableSorting(options.sorting)

  return {
    ...columnState,
    ...actionState,
    ...sortingState,
  }
}
