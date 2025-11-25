import type { ComputedRef, Ref } from "vue";
import type { ActionConfig } from "./types";
export interface DatatableActionsComposable {
    actions: ComputedRef<ActionConfig[]>;
    actionDefinitions: ActionConfig[];
    showSelectionColumn: ComputedRef<boolean>;
    showActionsColumn: ComputedRef<boolean>;
    rowActions: ComputedRef<ActionConfig[]>;
    bulkActions: ComputedRef<ActionConfig[]>;
    getVisibleActions: (row: Record<string, any>) => ActionConfig[];
    performAction: (action: ActionConfig, rows: Record<string, any>[]) => Promise<void>;
    isPerformingAction: Ref<boolean>;
    rowKey: (row: Record<string, any>) => string;
    selectedIds: Ref<Set<string>>;
    isRowSelected: (row: Record<string, any>) => boolean;
    toggleRow: (row: Record<string, any>, next?: boolean) => void;
    clearSelection: () => void;
    selectedRows: ComputedRef<Record<string, any>[]>;
    anySelected: ComputedRef<boolean>;
    allOnPageSelected: ComputedRef<boolean>;
    toggleAllOnPage: (next?: boolean) => void;
}
export declare function useDatatableActions(actionDefinitions: ActionConfig[], getPageRows: () => Record<string, any>[], rowKeyInput?: string | ((row: Record<string, any>) => string)): DatatableActionsComposable;
