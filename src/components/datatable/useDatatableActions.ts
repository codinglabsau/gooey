import { computed, ref, unref } from "vue"
import type { ComputedRef, Ref } from "vue"
import type { ActionConfig } from "./types"

export interface DatatableActionsComposable {
  actions: ComputedRef<ActionConfig[]>

  actionDefinitions: ActionConfig[]

  showSelectionColumn: ComputedRef<boolean>

  showActionsColumn: ComputedRef<boolean>

  rowActions: ComputedRef<ActionConfig[]>

  bulkActions: ComputedRef<ActionConfig[]>

  getVisibleActions: (row: Record<string, any>) => ActionConfig[]

  // Action execution
  performAction: (action: ActionConfig, rows: Record<string, any>[]) => Promise<void>
  isPerformingAction: Ref<boolean>

  // Selection state
  rowKey: (row: Record<string, any>) => string
  selectedIds: Ref<Set<string>>
  isRowSelected: (row: Record<string, any>) => boolean
  toggleRow: (row: Record<string, any>, next?: boolean) => void
  clearSelection: () => void
  selectedRows: ComputedRef<Record<string, any>[]>
  anySelected: ComputedRef<boolean>
  allOnPageSelected: ComputedRef<boolean>
  toggleAllOnPage: (next?: boolean) => void
}

export function useDatatableActions(
  actionDefinitions: ActionConfig[],
  getPageRows: () => Record<string, any>[],
  rowKeyInput?: string | ((row: Record<string, any>) => string)
): DatatableActionsComposable {
  const actions = computed(() => actionDefinitions)

  // Row identity resolver
  const rowKey = (row: Record<string, any>) => {
    if (typeof rowKeyInput === "function") return (rowKeyInput as any)(row)
    const key = typeof rowKeyInput === "string" ? rowKeyInput : "id"
    return String(row[key])
  }

  // Selection state
  const selectedIds = ref<Set<string>>(new Set())

  const isRowSelected = (row: Record<string, any>) => selectedIds.value.has(rowKey(row))

  const toggleRow = (row: Record<string, any>, next?: boolean) => {
    const id = rowKey(row)
    const nextVal = typeof next === "boolean" ? next : !selectedIds.value.has(id)
    const s = new Set(selectedIds.value)
    if (nextVal) s.add(id)
    else s.delete(id)
    selectedIds.value = s
  }

  const clearSelection = () => {
    selectedIds.value = new Set()
  }

  const pageRows = computed(() => getPageRows() || [])
  const selectedRows = computed(() => pageRows.value.filter((r) => selectedIds.value.has(rowKey(r))))

  const allOnPageSelected = computed(() => {
    const rows = unref(pageRows)
    if (!rows.length) return false
    return rows.every((r) => selectedIds.value.has(rowKey(r)))
  })

  const anySelected = computed(() => selectedIds.value.size > 0)

  const toggleAllOnPage = (next?: boolean) => {
    const rows = unref(pageRows)
    const shouldSelect = typeof next === "boolean" ? next : !rows.every((r) => selectedIds.value.has(rowKey(r)))
    const s = new Set(selectedIds.value)
    if (shouldSelect) rows.forEach((r) => s.add(rowKey(r)))
    else rows.forEach((r) => s.delete(rowKey(r)))
    selectedIds.value = s
  }

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

  // Action execution with optional confirmation and modal support
  const isPerformingAction = ref(false)
  const performAction = async (action: ActionConfig, rows: Record<string, any>[]) => {
    if (action.disabled && action.disabled(rows)) return

    // If a modal is provided, delegate entirely
    if (typeof action.openModal === "function") {
      action.openModal(rows)
      return
    }

    // If no handler and no modal, nothing to execute (slot-only action)
    if (typeof action.handler !== "function") {
      return
    }

    // Confirmation (only for handler-driven actions)
    if (action.confirm) {
      let message = "Are you sure?"
      if (typeof action.confirm === "string") message = action.confirm
      else if (typeof action.confirm === "object") message = action.confirm.message || message
      // eslint-disable-next-line no-alert
      const ok = window.confirm(message)
      if (!ok) return
    }

    try {
      isPerformingAction.value = true
      await action.handler(rows)
    } finally {
      isPerformingAction.value = false
    }
  }

  return {
    actions,
    actionDefinitions,
    showSelectionColumn,
    showActionsColumn,
    rowActions,
    bulkActions,
    getVisibleActions,
    performAction,
    isPerformingAction,
    rowKey,
    selectedIds,
    isRowSelected,
    toggleRow,
    clearSelection,
    selectedRows,
    anySelected,
    allOnPageSelected,
    toggleAllOnPage,
  }
}
