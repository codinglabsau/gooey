import type { ComputedRef } from "vue";
import type { ActionConfig } from "./types";
export interface DatatableActionsComposable {
    actions: ComputedRef<ActionConfig[]>;
    actionDefinitions: ActionConfig[];
    showSelectionColumn: ComputedRef<boolean>;
    showActionsColumn: ComputedRef<boolean>;
    rowActions: ComputedRef<ActionConfig[]>;
    bulkActions: ComputedRef<ActionConfig[]>;
    getVisibleActions: (row: Record<string, any>) => ActionConfig[];
    handleActionClick: (action: ActionConfig, row: Record<string, any>) => void;
    handleBulkActionClick: (action: ActionConfig, selectedRows: Record<string, any>[]) => void;
}
export declare function useDatatableActions(actionDefinitions: ActionConfig[]): DatatableActionsComposable;
