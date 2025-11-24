/**
 * Datatable state management types and interfaces
 * Adapted from InertiaUI Table for headless state management with URL sync
 */
import type { Ref } from "vue";
/**
 * Complete datatable state structure
 * This state can be hydrated from URL params and dehydrated back to URL
 */
export interface DatatableState {
    /**
     * Current sort configuration
     * Example: { column: 'name', direction: 'asc' }
     */
    sort: {
        column: string | null;
        direction: "asc" | "desc" | null;
    };
    /**
     * Global search query
     */
    search: string;
    /**
     * Current page number (for full pagination)
     */
    page: number;
    /**
     * Items per page
     */
    perPage: number;
    /**
     * Cursor for cursor-based pagination (optional)
     */
    cursor: string | null;
    /**
     * Array of column keys that should be sticky
     * All columns from left edge up to and including these will be sticky
     * Example: ['id', 'name']
     */
    sticky: string[];
    /**
     * Column visibility state keyed by column key
     * Example: { id: true, name: true, email: false }
     */
    columns: Record<string, boolean>;
}
/**
 * Options for creating datatable state
 */
export interface DatatableStateOptions {
    /**
     * Initial state values (can come from URL params)
     */
    initialState?: Partial<DatatableState>;
    /**
     * Available column keys (for validation)
     */
    columns?: string[];
    /**
     * Default items per page
     */
    defaultPerPage?: number;
    /**
     * Enable URL synchronization
     */
    syncWithUrl?: boolean;
    /**
     * URL key prefix for multi-table support
     * Example: 'users_' will create params like ?users_sort=name
     */
    urlPrefix?: string;
}
/**
 * Return type for useDatatableState composable
 */
export interface DatatableStateComposable {
    /**
     * Reactive state object
     */
    state: Ref<DatatableState>;
    /**
     * Set sort column and direction
     */
    setSort: (column: string | null, direction: "asc" | "desc" | null) => void;
    /**
     * Toggle sort for a column (asc -> desc -> none)
     */
    toggleSort: (column: string) => void;
    /**
     * Set search query
     */
    setSearch: (query: string) => void;
    /**
     * Make a column sticky (and all columns before it)
     */
    makeSticky: (columnKey: string) => void;
    /**
     * Remove sticky from a column (and all columns after it)
     */
    undoSticky: (columnKey: string) => void;
    /**
     * Toggle column visibility
     */
    toggleColumn: (columnKey: string) => void;
    /**
     * Show a column
     */
    showColumn: (columnKey: string) => void;
    /**
     * Hide a column
     */
    hideColumn: (columnKey: string) => void;
    /**
     * Replace entire state (for loading saved views)
     */
    setState: (newState: Partial<DatatableState>) => void;
    /**
     * Get current state as URL query string
     */
    toQueryString: () => string;
    /**
     * Get current state as plain object (for saving views)
     */
    toObject: () => DatatableState;
    /**
     * Hydrate state from URL query string
     */
    fromQueryString: (queryString: string) => void;
    /**
     * Hydrate state from plain object
     */
    fromObject: (obj: Partial<DatatableState>) => void;
    /**
     * Reset state to defaults
     */
    reset: () => void;
}
