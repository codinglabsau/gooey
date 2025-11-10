<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, toRef, watch } from "vue"
import { cn } from "@/lib/utils"

// Types
import type { DatatableProps } from "./types"

const props = defineProps<DatatableProps>()
</script>

<template>
  <div
    ref="tableContainerRef"
    class="group/table max-h-full max-w-full overflow-auto rounded-md bg-white dark:bg-zinc-900"
  >
    <table :class="cn('relative w-full caption-bottom text-sm border-collapse', tableClasses)">
      <thead v-if="!isEmpty" ref="theadRef" class="sticky top-0 z-20 bg-white dark:bg-zinc-900">
        <tr class="group border-b border-gray-200 dark:border-zinc-700">
          <!-- Selection Column Header -->
          <DatatableSelectionCell
            v-if="actions.showSelectionColumn.value"
            is-header
            :checked="selection.allSelected.value"
            :indeterminate="selection.someSelected.value"
            @change="selection.toggleAll"
          />

          <!-- Regular Column Headers -->
          <DatatableHeaderCell
            v-for="column in columns"
            :key="column.key"
            :column="column"
            :sticky-columns="isColumnSticky(column.key)"
            :is-last-sticky="isLastStickyColumn(column.key)"
            :sticky-offset-var="getStickyOffsetVar(column.key)"
          />

          <!-- Actions Column Header -->
          <DatatableActionsCell v-if="actions.showActionsColumn.value" is-header />
        </tr>
      </thead>

      <tbody>
        <!-- Data Rows -->
        <template v-if="!isEmpty">
          <tr
            v-for="(row, rowIndex) in tableData"
            :key="rowIndex"
            class="border-b border-gray-200 hover:bg-gray-100/50 dark:border-zinc-700 dark:hover:bg-zinc-900/50"
          >
            <!-- Selection Column Cell -->
            <DatatableSelectionCell
              v-if="actions.showSelectionColumn.value"
              :checked="selection.selectedRows.value.has(rowIndex)"
              @change="selection.toggleRow(rowIndex)"
            />

            <!-- Regular Column Cells -->
            <DatatableCell
              v-for="column in columns"
              :key="column.key"
              :column="column"
              :row="row"
              :sticky-columns="isColumnSticky(column.key)"
              :is-last-sticky="isLastStickyColumn(column.key)"
              :sticky-offset-var="getStickyOffsetVar(column.key)"
            >
              <!-- Pass through custom cell slot -->
              <template v-if="$slots[`row-${column.key}`]" #[`row-${column.key}`]="slotProps">
                <slot :name="`row-${column.key}`" v-bind="slotProps" />
              </template>
            </DatatableCell>

            <!-- Actions Column Cell -->
            <DatatableActionsCell
              v-if="actions.showActionsColumn.value"
              :row="row"
              :row-index="rowIndex"
              :visible-actions="actions.getVisibleActions(row)"
              @action-click="actions.handleActionClick"
            >
              <!-- Pass through custom actions slot -->
              <template v-if="$slots['row-actions']" #actions="slotProps">
                <slot name="row-actions" v-bind="slotProps" />
              </template>
            </DatatableActionsCell>
          </tr>
        </template>

        <!-- Empty State Row -->
        <tr v-else>
          <td
            :colspan="
              columns.length +
              (actions.showSelectionColumn.value ? 1 : 0) +
              (actions.showActionsColumn.value ? 1 : 0)
            "
            class="whitespace-nowrap p-4 align-middle text-sm text-foreground"
          >
            <div class="flex items-center justify-center py-10">
              <slot name="empty">No Records.</slot>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
