import { type Ref } from "vue";
export interface DatatableSearchingComposable {
    searchEnabled: Ref<boolean>;
    search: Ref<string>;
    setSearch: (query: string) => void;
    clearSearch: () => void;
    hasSearch: () => boolean;
}
export interface SearchingConfig {
    search?: boolean;
}
export declare function useDatatableSearching(options: SearchingConfig): DatatableSearchingComposable;
