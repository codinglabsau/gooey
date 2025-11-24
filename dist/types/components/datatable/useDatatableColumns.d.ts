import type { ColumnConfig } from "@/components/datatable/types";
import { type ComputedRef, type Ref } from "vue";
export interface DatatableColumnsComposable {
    columnDefinitions: ColumnConfig[];
    columns: ComputedRef<ColumnConfig[]>;
    visibleColumns: Ref<string[]>;
    columnOrder: Ref<string[]>;
    stickyColumns: Ref<string[]>;
    setVisibleColumns: (columnIds: string[]) => void;
    setColumnOrder: (columnIds: string[]) => void;
    setStickyColumns: (columnIds: string[]) => void;
    stickColumn: (columnId: string) => void;
    unstickColumn: (columnId: string) => void;
}
export declare function useDatatableColumns(columnDefinitions: ColumnConfig[]): {
    columns: ComputedRef<ColumnConfig[]>;
    columnDefinitions: ColumnConfig[];
    visibleColumns: Ref<string[], string[]>;
    columnOrder: Ref<string[], string[]>;
    stickyColumns: Ref<string[], string[]>;
    setVisibleColumns: (columnIds: string[]) => void;
    setColumnOrder: (columnIds: string[]) => void;
    setStickyColumns: (columnIds: string[]) => void;
    stickColumn: (columnId: string) => void;
    unstickColumn: (columnId: string) => void;
};
