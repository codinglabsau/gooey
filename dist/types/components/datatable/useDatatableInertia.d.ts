import { type ComputedRef } from "vue";
import { type DatatableSortingComposable } from "@/components/datatable/useDatatableSorting";
import { type DatatableFilteringComposable } from "@/components/datatable/useDatatableFiltering";
import { type DatatableSearchingComposable } from "@/components/datatable/useDatatableSearching";
import type { SortingConfig } from "@/components/datatable/types";
import type { FilteringConfig } from "@/components/datatable/useDatatableFiltering";
import type { SearchingConfig } from "@/components/datatable/useDatatableSearching";
/**
 * Higher-order composable that encompasses all query parameter-related composables
 * for datatable state management with Inertia.js
 */
export interface DatatableInertiaComposable extends DatatableSortingComposable, DatatableFilteringComposable, DatatableSearchingComposable {
    sortColumn: ComputedRef<string | null>;
    sortDirection: ComputedRef<"asc" | "desc" | null>;
    setSort: (column: string | null, direction: "asc" | "desc" | null) => void;
    toggleSort: (column: string) => void;
}
export interface DatatableInertiaConfig {
    sorting?: SortingConfig;
    filtering?: FilteringConfig;
    searching?: SearchingConfig;
}
export declare function useDatatableInertia(options?: DatatableInertiaConfig): DatatableInertiaComposable;
