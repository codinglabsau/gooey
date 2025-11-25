import type { ActionConfig, ColumnConfig, FilterConfig, PaginationResponse, DatatableStrings } from "@/components/datatable/types";
import { type DatatableColumnsComposable } from "@/components/datatable/useDatatableColumns";
import { type DatatableActionsComposable } from "@/components/datatable/useDatatableActions";
import { type DatatableInertiaComposable } from "@/components/datatable/useDatatableInertia";
import { type ComputedRef } from "vue";
export type DatatableState = DatatableColumnsComposable & DatatableActionsComposable & DatatableInertiaComposable & {
    data: ComputedRef<PaginationResponse>;
    hasData: ComputedRef<boolean>;
    emptyMessage: ComputedRef<string>;
    strings?: DatatableStrings;
    tableClass?: string;
    tableContainerClass?: string;
    stickyHeader: boolean;
};
export interface DatatableOptions {
    /**
     * Required key of the Inertia page prop that contains the paginated dataset,
     * e.g. 'auctions'. Data is read reactively from usePage().props.value[dataKey].
     */
    dataKey: string;
    columns: ColumnConfig[];
    actions?: ActionConfig[];
    /** Optional key or function to resolve a row's unique id for selection; default 'id' */
    rowKey?: string | ((row: Record<string, any>) => string);
    filters?: FilterConfig[];
    defaultSort?: string | null;
    search?: boolean;
    searchParamName?: string;
    searchAutoApply?: boolean;
    strings?: DatatableStrings;
    emptyMessage?: string;
    tableClass?: string;
    tableContainerClass?: string;
    /** When true, the table header is sticky within the scroll container. Default: true */
    stickyHeader?: boolean;
}
export declare function useDatatable(options: DatatableOptions): DatatableState;
