import type { ColumnConfig } from "@/components/datatable/types";
import { type ComputedRef } from "vue";
export interface DatatableColumnsComposable {
    columnDefinitions: ColumnConfig[];
    columns: ComputedRef<ColumnConfig[]>;
    setVisibleColumns: (columnIds: string[]) => void;
    setColumnOrder: (columnIds: string[]) => void;
}
export declare function useDatatableColumns(columnDefinitions: ColumnConfig[]): {
    columns: ComputedRef<ColumnConfig[]>;
    columnDefinitions: ColumnConfig[];
    visibleColumns: import("vue").Ref<string[], string[]>;
    columnOrder: import("vue").Ref<string[], string[]>;
    stickyColumns: import("vue").Ref<string[], string[]>;
    setVisibleColumns: (columnIds: string[]) => void;
    setColumnOrder: (columnIds: string[]) => void;
    setStickyColumns: (columnIds: string[]) => void;
    stickColumn: (columnId: string) => void;
    unstickColumn: (columnId: string) => void;
};
