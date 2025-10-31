/**
 * Composable for managing sticky columns and sticky header in the datatable
 * Adapted from InertiaUI Table package implementation
 */
/**
 * Manages sticky column behavior with dynamic width calculation
 * Uses CSS custom properties for offsets and data attributes for scroll state
 */
export declare function useStickyColumns(tableContainerResolver: () => HTMLElement | null): {
    add: () => void;
    remove: () => void;
};
/**
 * Manages sticky header behavior on vertical scroll
 * Uses CSS transform to animate header position during scroll
 */
export declare function useStickyHeader(tableContainerResolver: () => HTMLElement | null, theadResolver: () => HTMLElement | null): {
    add: () => void;
    remove: () => void;
};
