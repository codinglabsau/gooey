/**
 * Datatable context for provide/inject pattern
 * Enables headless usage and component composition
 */
import type { Ref, ComputedRef, InjectionKey } from "vue";
import type { DatatableStateComposable } from "./state";
import type { ColumnConfig, PaginationResponse } from "./types";
/**
 * Context provided by the datatable to all child components
 * This enables headless usage and component composition
 */
export interface DatatableContext {
    /**
     * State management composable with reactive state and methods
     */
    state: DatatableStateComposable;
    /**
     * Column configurations
     */
    columns: ComputedRef<ColumnConfig[]>;
    /**
     * Raw data prop (can be array or pagination response)
     */
    data: ComputedRef<Record<string, any>[] | PaginationResponse>;
    /**
     * Extracted table data (always an array)
     */
    tableData: ComputedRef<Record<string, any>[]>;
    /**
     * Whether the table is empty
     */
    isEmpty: ComputedRef<boolean>;
    /**
     * Ref to the table container element
     */
    tableContainerRef: Ref<HTMLElement | null>;
    /**
     * Ref to the thead element
     */
    theadRef: Ref<HTMLElement | null>;
    /**
     * Check if a column is sticky
     */
    isColumnSticky: (columnKey: string) => boolean;
    /**
     * Check if a column is the last sticky column
     */
    isLastStickyColumn: (columnKey: string) => boolean;
    /**
     * Check if a column is an image column
     */
    isImageColumn: (column: ColumnConfig) => boolean;
    /**
     * Get image URL from row data
     */
    getImageUrl: (row: Record<string, any>, column: ColumnConfig) => string | null;
    /**
     * Get image classes for a column
     */
    getImageClasses: (column: ColumnConfig) => string;
}
/**
 * Injection key for datatable context
 */
export declare const DatatableContextKey: InjectionKey<DatatableContext>;
