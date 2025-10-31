import type { DatatableStateComposable } from "./state";
/**
 * Column configuration for datatable
 */
export interface ColumnConfig {
    /**
     * Unique key to identify the column (matches data object keys)
     */
    key: string;
    /**
     * Display label for the column header
     */
    label: string;
    /**
     * Tailwind classes for the header cell (th element)
     * @example 'w-32 min-w-[200px]'
     */
    headerCellClasses?: string;
    /**
     * Tailwind classes for the header content wrapper
     * @example 'text-center font-bold'
     */
    headerContentClasses?: string;
    /**
     * Tailwind classes for the body cell (td element)
     * @example 'w-32'
     */
    cellClasses?: string;
    /**
     * Tailwind classes for the body cell content
     * @example 'text-right text-muted-foreground'
     */
    cellContentClasses?: string;
    /**
     * Configure this column to render images
     *
     * Usage:
     * - `true`: Uses the cell value as the image URL with default styling (size-6)
     * - `'tailwind-classes'`: Uses the cell value as the image URL and applies custom Tailwind classes
     *
     * The image property functionally replaces cellClasses for image columns.
     * All styling should be done via Tailwind classes in the string value.
     *
     * @example
     * // Simple: cell value is the image URL with default size
     * { key: 'avatar', label: 'Avatar', image: true }
     *
     * @example
     * // Custom styling: apply Tailwind classes directly
     * {
     *   key: 'avatar',
     *   label: 'User',
     *   image: 'size-10 rounded-full ring-2 ring-blue-500'
     * }
     *
     * @example
     * // Small circular avatar
     * { key: 'thumbnail', label: 'Thumbnail', image: 'size-4 rounded-full' }
     */
    image?: boolean | string;
}
/**
 * Laravel full pagination response (LengthAwarePaginator)
 */
export interface FullPaginationResponse<T = Record<string, any>> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number | null;
    last_page: number;
    last_page_url: string;
    links: Array<{
        url: string | null;
        label: string;
        page: number | null;
        active: boolean;
    }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}
/**
 * Laravel simple pagination response (Paginator)
 */
export interface SimplePaginationResponse<T = Record<string, any>> {
    current_page: number;
    current_page_url?: string;
    data: T[];
    first_page_url: string;
    from: number | null;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
}
/**
 * Laravel cursor pagination response (CursorPaginator)
 */
export interface CursorPaginationResponse<T = Record<string, any>> {
    data: T[];
    path: string;
    per_page: number;
    next_cursor: string | null;
    next_page_url: string | null;
    prev_cursor: string | null;
    prev_page_url: string | null;
}
/**
 * Union type for all Laravel pagination responses
 */
export type PaginationResponse<T = Record<string, any>> = FullPaginationResponse<T> | SimplePaginationResponse<T> | CursorPaginationResponse<T>;
/**
 * Action configuration for datatable row actions and bulk actions
 */
export interface ActionConfig {
    /**
     * Display label for the action
     */
    label: string;
    /**
     * Flag to indicate if this is a bulk action
     * When true, enables the selection column and the action receives an array of selected rows
     * When false, the action is a row action and receives a single row
     * @default false
     */
    bulk?: boolean;
    /**
     * Function to determine if this action should be visible for a specific row
     * Only called for row actions (bulk actions are always visible in the bulk actions toolbar)
     * @param row - The row data object
     * @returns true if the action should be visible for this row
     */
    visible?: (row: Record<string, any>) => boolean;
    /**
     * Handler function to execute when the action is triggered
     * For bulk actions (bulk: true), receives an array of selected row objects
     * For row actions (bulk: false), receives a single row object wrapped in an array
     * @param rows - Array of row data objects (selected rows for bulk, single row for row actions)
     */
    handler: (rows: Record<string, any>[]) => void | Promise<void>;
}
/**
 * Props for the Datatable component
 */
export interface DatatableProps {
    /**
     * Array of column configurations
     */
    columns: ColumnConfig[];
    /**
     * Data to display - can be a plain array or a Laravel pagination response.
     * If a pagination object is provided, the data will be automatically extracted.
     */
    data: Record<string, any>[] | PaginationResponse;
    /**
     * Optional datatable state composable for external state management.
     * When provided, the datatable will use this state for sticky columns, filters, sorting, etc.
     * This enables programmatic control and URL synchronization.
     * @example const tableState = useDatatableState({ columns: ['id', 'name'], syncWithUrl: true })
     */
    datatableState?: DatatableStateComposable;
    /**
     * Optional array of column keys that should be sticky (legacy prop-based approach).
     * Sticky columns will remain visible when scrolling horizontally.
     * All columns from the left edge up to the specified columns will be made sticky.
     *
     * Note: If datatableState is provided, use state.makeSticky() instead.
     * This prop is maintained for backward compatibility and will sync to internal state.
     * @example ['id', 'name'] // Makes 'id' and 'name' columns sticky
     * @deprecated Use datatableState with makeSticky() method for better control
     */
    stickyColumns?: string[];
    /**
     * Optional array of action configurations for row and bulk actions.
     * If any action has `bulk: true`, the selection column will be automatically enabled.
     * If the array has any actions, the actions column will be automatically shown.
     *
     * @example
     * // Single row action with visibility condition
     * actions: [
     *   {
     *     label: "Edit",
     *     visible: (row) => row.status === 'draft',
     *     handler: ([row]) => console.log('Edit', row)
     *   }
     * ]
     *
     * @example
     * // Bulk action (enables selection column)
     * actions: [
     *   {
     *     label: "Delete",
     *     bulk: true,
     *     handler: (rows) => console.log('Delete', rows)
     *   }
     * ]
     */
    actions?: ActionConfig[];
    tableClasses?: string;
}
