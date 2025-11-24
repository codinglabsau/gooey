import { type DatatableSortingComposable } from "@/components/datatable/useDatatableSorting";
import { type DatatableSearchingComposable } from "@/components/datatable/useDatatableSearching";
import { type DatatableFilteringComposable } from "@/components/datatable/useDatatableFiltering";
import type { FilteringConfig, SearchingConfig, SortingConfig, FilterConfig } from "@/components/datatable/types";
import { type ComputedRef } from "vue";
export interface DatatableInertiaComposable extends DatatableSortingComposable, DatatableSearchingComposable, DatatableFilteringComposable {
    filterWithoutApplying: (id: string, value: any) => void;
    filter: (id: string, value: any) => void;
    resetFilter: (id: string) => void;
    clearFilters: () => void;
    applyFilters: () => void;
    appliedQuery: ComputedRef<Record<string, any>>;
    filterConfigs?: FilterConfig[];
    searchAutoEnabled: boolean;
}
export interface DatatableInertiaConfig {
    sorting: SortingConfig;
    searching: SearchingConfig;
    filtering: FilteringConfig;
}
export declare function useDatatableInertia(options: DatatableInertiaConfig): DatatableInertiaComposable;
