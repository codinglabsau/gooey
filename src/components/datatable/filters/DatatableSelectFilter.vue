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
const options = computed(() => props.config.options || [])

const current = computed<any>(() => props.table.filters.value[id.value]?.value ?? "")
const active = computed<boolean>(() => props.table.filters.value[id.value]?.enabled ?? false)

const local = ref<any>(current.value)
watch(current, (v) => {
  if (v !== local.value) local.value = v
})

const onApply = () => {
  props.table.filter(id.value, local.value)
}
const onReset = () => {
  props.table.resetFilter(id.value)
  local.value = props.table.filters.value[id.value]?.value ?? ""
}
const onClear = () => props.table.resetFilter(id.value)

const summary = computed(() => {
  if (!active.value) return props.table.strings?.any ?? "Any"
  const opt = options.value.find((o) => o.value === current.value)
  return opt ? opt.label : String(current.value ?? "")
})
</script>

<template>
  <DatatableFilter :label="label" :active="active" @clear="onClear">
    <template #label>{{ label }}</template>

    <template #display-value>
      <span>{{ summary }}</span>
    </template>

    <template #form>
      <div class="flex w-64 flex-col gap-2">
        <select v-model="local" class="h-9 w-full rounded-md border px-2 text-sm">
          <option value="">Any</option>

          <option v-for="opt in options" :key="String(opt.value)" :value="opt.value">
            {{ opt.label }}
          </option>
        </select>

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
