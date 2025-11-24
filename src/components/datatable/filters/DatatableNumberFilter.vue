<script setup lang="ts">
import { ref, watch, computed } from "vue"
import DatatableFilter from "../DatatableFilter.vue"
import type { FilterConfig } from "@/components/datatable/types"
import type { DatatableState } from "@/components/datatable/useDatatable"

interface Props {
  table: DatatableState
  config: FilterConfig
}

const props = defineProps<Props>()

const id = computed(() => props.config.id)
const label = computed(() => props.config.label || props.config.id)
const placeholder = computed(() => props.config.placeholder || String(label.value))

const current = computed<any>(() => props.table.filters.value[id.value]?.value ?? null)
const active = computed<boolean>(() => props.table.filters.value[id.value]?.enabled ?? false)

const local = ref<string | number | null>(current.value)
watch(current, (v) => {
  if (v !== local.value) local.value = v
})

const onApply = () => {
  const n = local.value === "" || local.value === null ? null : Number(local.value)
  props.table.filter(id.value, isNaN(n as number) ? null : n)
}
const onReset = () => {
  props.table.resetFilter(id.value)
  local.value = props.table.filters.value[id.value]?.value ?? null
}
const onClear = () => props.table.resetFilter(id.value)

const summary = computed(() =>
  active.value ? String(current.value) : props.table.strings?.any ?? "Any"
)
</script>

<template>
  <DatatableFilter :label="label" :active="active" @clear="onClear">
    <template #label>{{ label }}</template>

    <template #summary>
      <span>{{ summary }}</span>
    </template>

    <template #form>
      <div class="flex w-64 flex-col gap-2">
        <input
          v-model="local"
          :placeholder="placeholder"
          class="h-9 w-full rounded-md border px-2 text-sm"
          type="number"
        />

        <div class="flex items-center justify-end gap-2">
          <button type="button" class="h-8 rounded-md border px-2 text-sm" @click="onReset">
            Reset
          </button>

          <button
            type="button"
            class="h-8 rounded-md bg-primary px-2 text-sm text-primary-foreground"
            @click="onApply"
          >
            Apply
          </button>
        </div>
      </div>
    </template>
  </DatatableFilter>
</template>
