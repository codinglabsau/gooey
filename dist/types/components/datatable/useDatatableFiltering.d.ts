import { type ComputedRef, type Ref } from "vue";
import type { FilteringConfig } from "@/components/datatable/types";
export interface FilterState {
    id: string;
    value: any;
    enabled: boolean;
}
export interface DatatableFilteringComposable {
    filters: Ref<Record<string, FilterState>>;
    activeFilters: ComputedRef<Record<string, FilterState>>;
    activeFilterCount: ComputedRef<number>;
    isAnyFilterActive: ComputedRef<boolean>;
    setFilter: (id: string, value: any) => void;
    enableFilter: (id: string) => void;
    disableFilter: (id: string) => void;
    clearFilter: (id: string) => void;
    clearAllFilters: () => void;
    registerFilter: (id: string, initialValue?: any) => void;
    unregisterFilter: (id: string) => void;
    hasFilter: (id: string) => boolean;
    getFilterValue: (id: string) => any;
}
export declare function useDatatableFiltering(options: FilteringConfig): DatatableFilteringComposable;
