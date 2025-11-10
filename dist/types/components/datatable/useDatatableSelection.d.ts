/**
 * Datatable Selection Composable
 *
 * Centralizes all row selection logic for the datatable.
 * When selection issues occur, search for "useDatatableSelection" to find all selection-related code.
 */
import type { Ref } from "vue";
export interface DatatableSelectionComposable {
    /**
     * Set of selected row indices
     */
    selectedRows: Ref<Set<number>>;
    /**
     * Whether all rows are currently selected
     */
    allSelected: Ref<boolean>;
    /**
     * Whether some (but not all) rows are selected
     */
    someSelected: Ref<boolean>;
    /**
     * Toggle selection for a specific row
     */
    toggleRow: (index: number) => void;
    /**
     * Toggle all rows (select all or deselect all)
     */
    toggleAll: () => void;
    /**
     * Clear all selections
     */
    clearSelection: () => void;
    /**
     * Get array of selected row data objects
     */
    getSelectedRowData: () => Record<string, any>[];
}
export interface DatatableSelectionOptions {
    /**
     * Reactive array of table data
     */
    tableData: Ref<Record<string, any>[]>;
    /**
     * Callback when selection changes
     */
    onSelectionChange?: (selectedRows: Set<number>) => void;
}
/**
 * Composable for managing datatable row selection
 */
export declare function useDatatableSelection(options: DatatableSelectionOptions): DatatableSelectionComposable;
