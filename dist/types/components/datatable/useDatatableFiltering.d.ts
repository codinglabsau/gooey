import { type Ref } from "vue";
export interface FilterState {
    enabled: boolean;
    value: any;
}
export interface DatatableFilteringComposable {
    filters: Ref<Record<string, FilterState>>;
    addFilter: (key: string, value: any) => void;
    removeFilter: (key: string) => void;
    clearFilters: () => void;
    hasFilter: (key: string) => boolean;
    getFilterValue: (key: string) => any;
}
export interface FilteringConfig {
    defaultFilters?: Record<string, FilterState>;
}
export declare function useDatatableFiltering(options?: FilteringConfig): DatatableFilteringComposable;
