import type { SortingConfig } from "@/components/datatable/types";
import { type Ref } from "vue";
export interface DatatableSortingComposable {
    sort: Ref<string | null>;
    resetSort: () => void;
    cycleSort: (columnId: string) => void;
    isColumnSorted: (columnId: string) => boolean;
    getSortDirection: (columnId: string) => 'ascending' | 'descending' | null;
    getSortedColumnId: () => string | null;
}
export declare function useDatatableSorting(options: SortingConfig): DatatableSortingComposable;
