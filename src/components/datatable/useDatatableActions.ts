import { computed } from "vue"
import type { ComputedRef } from "vue"
import type { ActionConfig } from "./types"

export interface DatatableActionsComposable {
  actions: ComputedRef<ActionConfig[]>

  actionDefinitions: ActionConfig[]

  showSelectionColumn: ComputedRef<boolean>

  showActionsColumn: ComputedRef<boolean>

  rowActions: ComputedRef<ActionConfig[]>

  bulkActions: ComputedRef<ActionConfig[]>

  getVisibleActions: (row: Record<string, any>) => ActionConfig[]

  handleActionClick: (action: ActionConfig, row: Record<string, any>) => void

  handleBulkActionClick: (action: ActionConfig, selectedRows: Record<string, any>[]) => void
}

export function useDatatableActions(actionDefinitions: ActionConfig[]): DatatableActionsComposable {
  const actions = computed(() => actionDefinitions)

  const showSelectionColumn = computed(() => {
    return actions.value.some((action) => action.bulk === true)
  })

  const showActionsColumn = computed(() => {
    return actions.value.length > 0
  })

  const rowActions = computed(() => {
    return actions.value.filter((action) => !action.bulk)
  })

  const bulkActions = computed(() => {
    return actions.value.filter((action) => action.bulk === true)
  })

  const getVisibleActions = (row: Record<string, any>): ActionConfig[] => {
    return rowActions.value.filter((action) => {
      if (!action.visible) {
        return true
      }

      return action.visible(row)
    })
  }

  const handleActionClick = (action: ActionConfig, row: Record<string, any>) => {
    action.handler([row])
  }

  const handleBulkActionClick = (action: ActionConfig, selectedRows: Record<string, any>[]) => {
    action.handler(selectedRows)
  }

  return {
    actions,
    actionDefinitions,
    showSelectionColumn,
    showActionsColumn,
    rowActions,
    bulkActions,
    getVisibleActions,
    handleActionClick,
    handleBulkActionClick,
  }
}
