import { type Ref } from "vue";
export interface DatatablePaginationComposable {
    page: Ref<number>;
    perPage: Ref<number>;
    cursor: Ref<string | null>;
    setPage: (page: number) => void;
    setPerPage: (perPage: number) => void;
    setCursor: (cursor: string | null) => void;
    resetPage: () => void;
    nextPage: () => void;
    prevPage: () => void;
}
export interface PaginationConfig {
    defaultPage?: number;
    defaultPerPage?: number;
    defaultCursor?: string | null;
}
export declare function useDatatablePagination(options?: PaginationConfig): DatatablePaginationComposable;
