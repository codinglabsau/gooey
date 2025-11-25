<script setup lang="ts">
import type { DatatableProps } from "./types"
import type { ColumnConfig } from "@/components/datatable/types"
import {
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table"
import type { DatatableState } from "@/components/datatable/useDatatable"
import { computed, unref, ref, onMounted, onBeforeUnmount, watch } from "vue"
import DatatableSearch from "./DatatableSearch.vue"
import DatatableTextFilter from "./filters/DatatableTextFilter.vue"
import DatatableSelectFilter from "./filters/DatatableSelectFilter.vue"
import DatatableDateFilter from "./filters/DatatableDateFilter.vue"
import DatatableNumberFilter from "./filters/DatatableNumberFilter.vue"
import DatatableNumberRangeFilter from "./filters/DatatableNumberRangeFilter.vue"
import { Button } from "@/components/button"
import { Checkbox } from "@/components/checkbox"
import { ChevronUp, ChevronDown, ChevronsUpDown, MoreHorizontal } from "lucide-vue-next"

const props = defineProps<DatatableProps>()

const table = props.table as DatatableState

const columns = computed<ColumnConfig[]>(() => table.columns.value)

const tableRef = ref<any | null>(null)
const leftOffsets = ref<Record<string, number>>({})
const rightOffsets = ref<Record<string, number>>({})

const isSticky = (col: ColumnConfig) => {
  const stickable = col.sticky !== false
  const always = col.alwaysSticky === true
  return always || (stickable && table.stickyColumns.value.includes(col.id))
}

const stickySide = (col: ColumnConfig) => (col.stickTo === "right" ? "right" : "left") as "left" | "right"

function measureOffsets() {
  const containerEl: HTMLElement | null = tableRef.value?.$el ?? null
  if (!containerEl) return
  const ths = Array.from(containerEl.querySelectorAll<HTMLTableCellElement>("thead th[data-col-id]"))
  if (!ths.length) return

  const ids: string[] = []
  const widths: number[] = []
  ths.forEach((th) => {
    const id = th.getAttribute("data-col-id")
    if (!id) return
    ids.push(id)
    widths.push(th.getBoundingClientRect().width)
  })

  // Compute left cumulative offsets
  const l: Record<string, number> = {}
  let run = 0
  ids.forEach((id, idx) => {
    l[id] = run
    run += widths[idx] || 0
  })

  // Compute right cumulative offsets
  const r: Record<string, number> = {}
  run = 0
  for (let i = ids.length - 1; i >= 0; i--) {
    const id = ids[i]
    r[id] = run
    run += widths[i] || 0
  }

  leftOffsets.value = l
  rightOffsets.value = r
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  measureOffsets()
  const containerEl: HTMLElement | null = tableRef.value?.$el ?? null
  if (containerEl && "ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(() => measureOffsets())
    resizeObserver.observe(containerEl)
  }
  window.addEventListener("resize", measureOffsets)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", measureOffsets)
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
})

// Recalculate when columns change
watch(columns, () => {
  // Next tick is not strictly necessary; query based on updated DOM soon after
  setTimeout(measureOffsets, 0)
})

function stickyStyleFor(col: ColumnConfig) {
  if (!isSticky(col)) return {}
  const side = stickySide(col)
  const map = side === "left" ? leftOffsets.value : rightOffsets.value
  const offset = map[col.id] ?? 0
  // z-index: header will override, cells get 10
  return { position: "sticky", [side]: `${offset}px`, zIndex: 10 }
}

// Special columns (_select left, _actions right)
function stickyStyleForSpecialHeader(id: string, side: "left" | "right") {
  const map = side === "left" ? leftOffsets.value : rightOffsets.value
  const offset = map[id] ?? 0
  return { position: "sticky", [side]: `${offset}px`, zIndex: 20 }
}
function stickyStyleForSpecialCell(id: string, side: "left" | "right") {
  const map = side === "left" ? leftOffsets.value : rightOffsets.value
  const offset = map[id] ?? 0
  return { position: "sticky", [side]: `${offset}px`, zIndex: 10 }
}

// Helpers for actions
const getRowActions = (row: any) => table.getVisibleActions(row)
</script>

<template>
  <Table ref="tableRef" :class="table.tableClass" :container-class="table.tableContainerClass">
    <!-- Topbar injected into Table's named slot so it renders above the <table> element -->
    <template #topbar>
      <div class="mb-3 flex flex-col gap-2">
        <slot
          name="topbar"
          :table="table"
          :filters="table.filters"
          :active-filters="table.activeFilters"
          :active-filter-count="table.activeFilterCount"
          :is-any-filter-active="table.isAnyFilterActive"
          :filter="table.filter"
          :filter-without-applying="table.filterWithoutApplying"
          :apply-filters="table.applyFilters"
          :reset-filter="table.resetFilter"
          :clear-filters="table.clearFilters"
          :set-search="table.setSearch"
          :clear-search="table.clearSearch"
          :search="table.search"
          :has-search="table.hasSearch"
          :applied-query="table.appliedQuery"
          :filter-configs="table.filterConfigs"
        >
          <!-- Default Topbar: filters left (wrap), search right -->
          <div class="flex flex-wrap items-start justify-between gap-2">
            <div class="flex min-w-0 flex-1 flex-wrap items-center gap-2">
              <template v-for="cfg in table.filterConfigs || []" :key="`flt-pill-${cfg.id}`">
                <component
                  :is="
                    cfg.type === 'select'
                      ? DatatableSelectFilter
                      : cfg.type === 'date'
                      ? DatatableDateFilter
                      : cfg.type === 'number'
                      ? DatatableNumberFilter
                      : cfg.type === 'number-range'
                      ? DatatableNumberRangeFilter
                      : DatatableTextFilter
                  "
                  :table="table"
                  :config="cfg"
                />
              </template>

              <Button
                v-if="table.isAnyFilterActive"
                variant="ghost"
                class="h-8 px-3 text-xs"
                @click="table.clearFilters"
              >
                {{ table.strings?.clearAll ?? "Clear all" }}
              </Button>

              <!-- Bulk action buttons (slot-overridable per action) -->
              <template v-if="unref(table.bulkActions).length > 0">
                <div class="ml-2 inline-flex flex-wrap items-center gap-2">
                  <template v-for="act in unref(table.bulkActions)" :key="`bulk-${act.id}`">
                    <slot
                      :name="'bulk-action-' + act.id"
                      :action="act"
                      :table="table"
                      :selected-rows="unref(table.selectedRows)"
                      :any-selected="table.anySelected"
                      :perform-action="(rows: any) => table.performAction(act, rows)"
                    >
                      <Button
                        size="sm"
                        :variant="act.destructive ? 'destructive' : 'secondary'"
                        :disabled="!table.anySelected || (act.disabled ? act.disabled(unref(table.selectedRows)) : false)"
                        @click="() => table.performAction(act, unref(table.selectedRows))"
                      >
                        <component v-if="act.icon" :is="act.icon" class="mr-1 h-4 w-4" />
                        <span>{{ act.label }}</span>
                        <span v-if="table.anySelected" class="ml-1 rounded bg-gray-200 px-1 text-[10px] font-medium text-gray-700 dark:bg-zinc-800 dark:text-zinc-300">
                          {{ unref(table.selectedRows).length }}
                        </span>
                      </Button>
                    </slot>
                  </template>
                </div>
              </template>
            </div>

            <div class="flex shrink-0 items-center">
              <DatatableSearch
                v-if="table.searchEnabled"
                :model-value="unref(table.search)"
                :placeholder="table.strings?.searchPlaceholder ?? 'Search…'"
                :auto="table.searchAutoEnabled"
                @update:model-value="(v: string) => table.setSearch(v)"
                @submit="() => table.applyFilters()"
                @clear="
                  () => {
                    table.clearSearch()
                    table.applyFilters()
                  }
                "
              />
            </div>
          </div>
        </slot>
      </div>
    </template>

    <TableHeader :class="table.stickyHeader ? 'sticky top-0 z-20 bg-white dark:bg-zinc-900' : ''">
      <TableRow>
        <!-- Sticky selection column (left) when bulk actions exist -->
        <template v-if="table.showSelectionColumn">
          <slot name="head-cell:_select" :table="table">
            <TableHead
              data-col-id="_select"
              class="w-8 px-2 align-middle"
              :class="['bg-white dark:bg-zinc-900', 'z-20']"
              :style="stickyStyleForSpecialHeader('_select', 'left')"
            >
              <Checkbox
                :checked="table.allOnPageSelected"
                :indeterminate="!table.allOnPageSelected && table.anySelected"
                @update:checked="(v: boolean) => table.toggleAllOnPage(v)"
                aria-label="Select all on page"
              />
            </TableHead>
          </slot>
        </template>

        <template v-for="col in columns" :key="'head-cell-' + col.id">
          <slot :name="'head-cell:' + col.id" :column="col" :table="table">
            <TableHead
              :data-col-id="col.id"
              :class="[
                col.headerCellClasses,
                isSticky(col) ? 'bg-white dark:bg-zinc-900' : '',
                isSticky(col) ? 'z-20' : '',
              ]"
              :style="stickyStyleFor(col)"
            >
              <slot :name="'head-content:' + col.id" :column="col" :table="table">
                <button
                  v-if="col.sortable"
                  type="button"
                  class="group inline-flex items-center gap-1 text-left hover:text-foreground"
                  @click="() => { const key = (col.sortableAs ?? col.id) as string; table.toggleSort(key); table.applyFilters() }"
                >
                  <span :class="col.headerContentClasses">{{ col.label }}</span>

                  <span class="inline-flex items-center">
                    <ChevronUp
                      v-if="table.getSortDirection((col.sortableAs ?? col.id) as string) === 'ascending'"
                      class="h-3.5 w-3.5 opacity-80 group-hover:opacity-100"
                    />

                    <ChevronDown
                      v-else-if="table.getSortDirection((col.sortableAs ?? col.id) as string) === 'descending'"
                      class="h-3.5 w-3.5 opacity-80 group-hover:opacity-100"
                    />

                    <ChevronsUpDown v-else class="h-3.5 w-3.5 opacity-50 group-hover:opacity-80" />
                  </span>
                </button>

                <span v-else :class="col.headerContentClasses">{{ col.label }}</span>
              </slot>
            </TableHead>
          </slot>
        </template>

        <!-- Sticky actions column (right) when any actions exist -->
        <template v-if="table.showActionsColumn">
          <slot name="head-cell:_actions" :table="table">
            <TableHead
              data-col-id="_actions"
              class="w-12 px-2 align-middle text-right"
              :class="['bg-white dark:bg-zinc-900', 'z-20']"
              :style="stickyStyleForSpecialHeader('_actions', 'right')"
            >
              <span class="sr-only">Actions</span>
            </TableHead>
          </slot>
        </template>
      </TableRow>
    </TableHeader>

    <TableBody>
      <template v-if="table.hasData">
        <TableRow v-for="(row, rIdx) in unref(table.data).data" :key="'body-row-' + rIdx">
          <!-- Selection cell -->
          <template v-if="table.showSelectionColumn">
            <slot name="body-cell:_select" :row="row" :table="table">
              <TableCell
                class="w-8 px-2 align-middle bg-white dark:bg-zinc-900"
                :style="stickyStyleForSpecialCell('_select', 'left')"
              >
                <Checkbox
                  :checked="table.isRowSelected(row)"
                  @update:checked="(v: boolean) => table.toggleRow(row, v)"
                  aria-label="Select row"
                />
              </TableCell>
            </slot>
          </template>

          <template v-for="col in columns" :key="'body-cell-' + col.id">
            <slot :name="'body-cell:' + col.id" :column="col" :row="row" :table="table">
              <TableCell
                :class="[col.cellClasses, isSticky(col) ? 'bg-white dark:bg-zinc-900' : '']"
                :style="stickyStyleFor(col)"
              >
                <slot :name="'body-content:' + col.id" :row="row" :table="table">
                  <span :class="col.cellContentClasses">{{ row[col.id] }}</span>
                </slot>
              </TableCell>
            </slot>
          </template>

          <!-- Actions cell -->
          <template v-if="table.showActionsColumn">
            <slot name="body-cell:_actions" :row="row" :table="table">
              <TableCell
                class="relative w-12 px-2 align-middle bg-white dark:bg-zinc-900 group/actions"
                :style="stickyStyleForSpecialCell('_actions', 'right')"
              >
                <template v-if="getRowActions(row).length <= 1">
                  <template v-if="getRowActions(row)[0]">
                    <slot
                      :name="'action-' + getRowActions(row)[0].id"
                      :action="getRowActions(row)[0]"
                      :row="row"
                      :table="table"
                      :perform-action="(rows: any) => table.performAction(getRowActions(row)[0], rows)"
                    >
                      <Button
                        v-if="getRowActions(row)[0].handler"
                        class="h-7 w-7 p-0"
                        :class="[getRowActions(row)[0]?.destructive ? 'text-red-600' : '']"
                        variant="ghost"
                        size="icon"
                        @click="() => table.performAction(getRowActions(row)[0], [row])"
                        aria-label="Run action"
                      >
                        <component
                          :is="getRowActions(row)[0]?.icon || MoreHorizontal"
                          class="h-4 w-4"
                        />
                      </Button>
                    </slot>
                  </template>
                </template>
                <template v-else>
                  <!-- Ellipsis trigger; overlay appears on hover -->
                  <Button class="h-7 w-7 p-0" variant="ghost" size="icon" aria-label="Show actions">
                    <MoreHorizontal class="h-4 w-4" />
                  </Button>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-full mr-2 hidden items-center gap-1 opacity-0 group-hover/actions:flex group-hover/actions:opacity-100 z-30"
                  >
                    <template v-for="act in getRowActions(row)" :key="act.id">
                      <slot
                        :name="'action-' + act.id"
                        :action="act"
                        :row="row"
                        :table="table"
                        :perform-action="(rows: any) => table.performAction(act, rows)"
                      >
                        <Button
                          v-if="act.handler"
                          class="pointer-events-auto h-7 px-2"
                          :class="[act.destructive ? 'text-red-600' : '']"
                          variant="secondary"
                          @click="() => table.performAction(act, [row])"
                        >
                          <component v-if="act.icon" :is="act.icon" class="mr-1 h-4 w-4" />
                          <span>{{ act.label }}</span>
                        </Button>
                      </slot>
                    </template>
                  </div>
                </template>
              </TableCell>
            </slot>
          </template>
        </TableRow>
      </template>

      <template v-else>
        <TableEmpty :colspan="columns.length + (table.showSelectionColumn ? 1 : 0) + (table.showActionsColumn ? 1 : 0)">
          {{ table.emptyMessage }}
        </TableEmpty>
      </template>
    </TableBody>
  </Table>
</template>
