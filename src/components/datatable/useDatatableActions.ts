/**
 * Datatable Actions Composable
 *
 * Centralizes all action-related logic for the datatable (row actions and bulk actions).
 * When action issues occur, search for "useDatatableActions" to find all action-related code.
 */

import { computed } from "vue"
import type { Ref, ComputedRef } from "vue"
import type { ActionConfig } from "./types"

export interface DatatableActionsComposable {
  /**
   * Whether the selection column should be shown (any bulk action exists)
   */
  showSelectionColumn: ComputedRef<boolean>

  /**
   * Whether the actions column should be shown (any action exists)
   */
  showActionsColumn: ComputedRef<boolean>

  /**
   * Array of row actions (non-bulk actions)
   */
  rowActions: ComputedRef<ActionConfig[]>

  /**
   * Array of bulk actions (actions with bulk: true)
   */
  bulkActions: ComputedRef<ActionConfig[]>

  /**
   * Get visible actions for a specific row
   */
  getVisibleActions: (row: Record<string, any>) => ActionConfig[]

  /**
   * Handle action click (calls action handler with proper row data)
   */
  handleActionClick: (action: ActionConfig, row: Record<string, any>) => void

  /**
   * Handle bulk action click (calls action handler with selected rows)
   */
  handleBulkActionClick: (action: ActionConfig, selectedRows: Record<string, any>[]) => void
}

export interface DatatableActionsOptions {
  /**
   * Array of action configurations
   */
  actions: Ref<ActionConfig[]>
}

/**
 * Composable for managing datatable actions (row and bulk)
 */
export function useDatatableActions(options: DatatableActionsOptions): DatatableActionsComposable {
  const { actions } = options

  // Computed: Should the selection column be shown?
  // Selection column appears when any action has bulk: true
  const showSelectionColumn = computed(() => {
    return actions.value.some((action) => action.bulk === true)
  })

  // Computed: Should the actions column be shown?
  // Actions column appears when any action exists
  const showActionsColumn = computed(() => {
    return actions.value.length > 0
  })

  // Computed: Filter row actions (non-bulk)
  const rowActions = computed(() => {
    return actions.value.filter((action) => !action.bulk)
  })

  // Computed: Filter bulk actions
  const bulkActions = computed(() => {
    return actions.value.filter((action) => action.bulk === true)
  })

  // Get visible actions for a specific row
  const getVisibleActions = (row: Record<string, any>): ActionConfig[] => {
    return rowActions.value.filter((action) => {
      // If no visible function provided, action is always visible
      if (!action.visible) return true
      // Otherwise, check the visible function
      return action.visible(row)
    })
  }

  // Handle action click for row actions
  const handleActionClick = (action: ActionConfig, row: Record<string, any>) => {
    // For row actions, pass the single row wrapped in an array
    action.handler([row])
  }

  // Handle bulk action click
  const handleBulkActionClick = (action: ActionConfig, selectedRows: Record<string, any>[]) => {
    // For bulk actions, pass all selected rows
    action.handler(selectedRows)
  }

  return {
    showSelectionColumn,
    showActionsColumn,
    rowActions,
    bulkActions,
    getVisibleActions,
    handleActionClick,
    handleBulkActionClick,
  }
}
