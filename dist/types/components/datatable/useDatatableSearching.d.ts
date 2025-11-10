import { type Ref } from "vue";
export interface DatatableSearchingComposable {
    search: Ref<string>;
    setSearch: (query: string) => void;
    clearSearch: () => void;
    hasSearch: () => boolean;
}
export interface SearchingConfig {
    defaultSearch?: string;
}
export declare function useDatatableSearching(options?: SearchingConfig): DatatableSearchingComposable;
