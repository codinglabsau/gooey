import type { SortingConfig } from "@/components/datatable/types";
import { type Ref, type ComputedRef } from "vue";
export interface DatatableSortingComposable {
    sort: Ref<string | null>;
    resetSort: () => void;
    cycleSort: (columnId: string) => void;
    isColumnSorted: (columnId: string) => boolean;
    getSortDirection: (columnId: string) => "ascending" | "descending" | null;
    getSortedColumnId: () => string | null;
    sortColumn: ComputedRef<string | null>;
    sortDirection: ComputedRef<"asc" | "desc" | null>;
    setSort: (column: string | null, direction: "asc" | "desc" | null) => void;
    toggleSort: (column: string) => void;
}
export declare function useDatatableSorting(options: SortingConfig): DatatableSortingComposable;
