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
import { computed, unref } from "vue"
import DatatableSearch from "./DatatableSearch.vue"
import DatatableTextFilter from "./filters/DatatableTextFilter.vue"
import DatatableSelectFilter from "./filters/DatatableSelectFilter.vue"
import DatatableDateFilter from "./filters/DatatableDateFilter.vue"
import DatatableNumberFilter from "./filters/DatatableNumberFilter.vue"
import DatatableNumberRangeFilter from "./filters/DatatableNumberRangeFilter.vue"
import { Button } from "@/components/button"
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-vue-next"

const props = defineProps<DatatableProps>()

const table = props.table as DatatableState

const columns = computed<ColumnConfig[]>(() => table.columns.value)

// no local state required; typed filter components manage staging
</script>

<template>
  <Table :class="table.tableClass" :container-class="table.tableContainerClass">
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

    <TableHeader>
      <TableRow>
        <template v-for="col in columns" :key="'head-cell-' + col.id">
          <slot :name="'head-cell:' + col.id" :column="col" :table="table">
            <TableHead :class="col.headerCellClasses">
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
      </TableRow>
    </TableHeader>

    <TableBody>
      <template v-if="table.hasData">
        <TableRow v-for="(row, rIdx) in unref(table.data).data" :key="'body-row-' + rIdx">
          <template v-for="col in columns" :key="'body-cell-' + col.id">
            <slot :name="'body-cell:' + col.id" :column="col" :row="row" :table="table">
              <TableCell :class="col.cellClasses">
                <slot :name="'body-content:' + col.id" :row="row" :table="table">
                  <span :class="col.cellContentClasses">{{ row[col.id] }}</span>
                </slot>
              </TableCell>
            </slot>
          </template>
        </TableRow>
      </template>

      <template v-else>
        <TableEmpty :colspan="columns.length">{{ table.emptyMessage }}</TableEmpty>
      </template>
    </TableBody>
  </Table>
</template>
