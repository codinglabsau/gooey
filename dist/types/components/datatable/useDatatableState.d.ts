/**
 * Composable for managing datatable state with URL synchronization
 * Provides a headless state management system that can be controlled programmatically
 * and hydrated/dehydrated from URL params
 */
import type { DatatableStateComposable, DatatableStateOptions } from "./state";
/**
 * Composable for datatable state management
 */
export declare function useDatatableState(options?: DatatableStateOptions): DatatableStateComposable;
