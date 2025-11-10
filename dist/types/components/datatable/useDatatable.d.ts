import type { ActionConfig, ColumnConfig, SortingConfig } from "@/components/datatable/types";
import { type DatatableColumnsComposable } from "@/components/datatable/useDatatableColumns";
import { type DatatableActionsComposable } from "@/components/datatable/useDatatableActions";
import { type DatatableSortingComposable } from "@/components/datatable/useDatatableSorting";
export type DatatableState = DatatableColumnsComposable & DatatableActionsComposable & DatatableSortingComposable;
export interface DatatableOptions {
    actions?: ActionConfig[];
    columns: ColumnConfig[];
    sorting: SortingConfig;
}
export declare function useDatatable(options: DatatableOptions): DatatableState;
