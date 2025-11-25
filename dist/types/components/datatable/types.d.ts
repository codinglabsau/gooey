import type { DatatableState } from "@/components/datatable/useDatatable";
export interface ColumnConfig {
    id: string;
    label: string;
    headerCellClasses?: string;
    headerContentClasses?: string;
    cellClasses?: string;
    cellContentClasses?: string;
    /**
     * Whether this column can be made sticky by the UI/state. Defaults to true.
     */
    sticky?: boolean;
    /**
     * When true, this column is always sticky regardless of runtime stickyColumns state.
     * Useful for selection checkboxes or action columns.
     */
    alwaysSticky?: boolean;
    /**
     * Side to stick to when sticky. Defaults to 'left'.
     */
    stickTo?: "left" | "right";
    /**
     * When true, the column header renders sorting affordances and clicking it will
     * cycle sort: asc → desc → none. Defaults to false.
     */
    sortable?: boolean;
    /**
     * Optional backend sort key to use instead of the column id. Useful when your
     * visual column id doesn't match the API/DB field used by Spatie/QueryBuilder.
     * Example: { id: 'user', sortableAs: 'users.name' }
     */
    sortableAs?: string | null;
}
export interface ActionConfig {
    id: string;
    label: string;
    bulk?: boolean;
    /** Return false to hide this action for a given row */
    visible?: (row: Record<string, any>) => boolean;
    /** Optional icon component for rendering the action */
    icon?: any | null;
    /** When true/string/object, ask for confirmation before running the handler */
    confirm?: boolean | string | {
        title?: string;
        message?: string;
        confirmLabel?: string;
        cancelLabel?: string;
    };
    /** Mark as destructive for styling hints (e.g. red) */
    destructive?: boolean;
    /** Optionally disable based on current selection */
    disabled?: (rows: Record<string, any>[]) => boolean;
    /**
     * Main action handler. Receives an array of rows (length 1 for per-row actions,
     * or N for bulk actions). Can be async.
     * Optional: when omitted, no default button is rendered and the consumer is
     * expected to provide slot content for this action (e.g. to open a modal).
     */
    handler?: (rows: Record<string, any>[]) => void | Promise<void>;
    /**
     * Optional hook to open a custom modal. If provided, you control the entire
     * flow; the default confirm + handler will be skipped and this will be called
     * with the target rows.
     */
    openModal?: (rows: Record<string, any>[]) => void;
}
export interface FilterConfig {
    id: string;
    label?: string;
    defaultValue?: any;
    /**
     * UI/behavior type hint for the default topbar and helper components.
     * 'text' → free text input
     * 'select' → select dropdown; provide 'options'
     * 'date' → date range (from/to) encoded as [from, to]
     * 'number' → single numeric value
     * 'number-range' → numeric range encoded as [min, max]
     */
    type?: "text" | "select" | "date" | "number" | "number-range";
    /** Options for select-type filters */
    options?: Array<{
        label: string;
        value: any;
    }>;
    /** Optional placeholder for inputs */
    placeholder?: string;
}
export interface SortingConfig {
    defaultSort: string | null;
}
export interface SearchingConfig {
    search?: boolean;
    /**
     * Name of the search query param when not using `filter[search]`.
     * Default: 'search'. Example: set to 'q' if your backend expects `?q=term`.
     */
    paramName?: string;
    /**
     * When true (default), changing the search input should auto-submit (debounced)
     * and trigger a partial reload. When false, the user must press Enter/click
     * the Search button to submit.
     */
    autoApplySearch?: boolean;
}
export interface FilteringConfig {
    filters?: FilterConfig[];
    autoApplyFilters?: boolean;
    /**
     * Controls how filter query params are written to the URL.
     * - 'spatie' → uses nested params like filter[status]=open (Spatie Laravel Query Builder compatible)
     * - 'flat'   → uses flat params like status=open (legacy/simple)
     * Default: 'spatie'
     */
    paramStyle?: "spatie" | "flat";
    /**
     * When provided, the search term will be written under filter[<key>] instead of a top-level `search` param.
     * Example: searchAsFilterKey = 'search' → filter[search]=<term>
     * Only used when paramStyle === 'spatie'.
     */
    searchAsFilterKey?: string | null;
}
export interface DatatableStrings {
    /** Label for empty/any state in filter summaries */
    any?: string;
    /** Label for the Clear All filters button */
    clearAll?: string;
    /** Placeholder for the search input */
    searchPlaceholder?: string;
    /** Empty table message (overrides `DatatableOptions.emptyMessage`) */
    emptyMessage?: string;
}
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
export interface CursorPaginationResponse<T = Record<string, any>> {
    data: T[];
    path: string;
    per_page: number;
    next_cursor: string | null;
    next_page_url: string | null;
    prev_cursor: string | null;
    prev_page_url: string | null;
}
export type PaginationResponse<T = Record<string, any>> = FullPaginationResponse<T> | SimplePaginationResponse<T> | CursorPaginationResponse<T>;
export interface DatatableProps {
    table: DatatableState;
}
