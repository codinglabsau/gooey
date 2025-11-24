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

const current = computed<any>(() => props.table.filters.value[id.value]?.value ?? [null, null])
const active = computed<boolean>(() => props.table.filters.value[id.value]?.enabled ?? false)

const localMin = ref<string | number | null>(Array.isArray(current.value) ? current.value[0] : null)
const localMax = ref<string | number | null>(Array.isArray(current.value) ? current.value[1] : null)

watch(current, (v) => {
  if (Array.isArray(v)) {
    localMin.value = v[0]
    localMax.value = v[1]
  }
})

const onApply = () => {
  const min = localMin.value === "" || localMin.value === null ? null : Number(localMin.value)
  const max = localMax.value === "" || localMax.value === null ? null : Number(localMax.value)
  const payload = [isNaN(min as number) ? null : min, isNaN(max as number) ? null : max]
  props.table.filter(id.value, payload)
}
const onReset = () => {
  props.table.resetFilter(id.value)
  const v = props.table.filters.value[id.value]?.value
  if (Array.isArray(v)) {
    localMin.value = v[0]
    localMax.value = v[1]
  } else {
    localMin.value = null
    localMax.value = null
  }
}
const onClear = () => props.table.resetFilter(id.value)

const summary = computed(() => {
  if (!active.value || !Array.isArray(current.value)) return props.table.strings?.any ?? "Any"
  const [min, max] = current.value
  if (min != null && max != null) return `${min} – ${max}`
  if (min != null) return `≥ ${min}`
  if (max != null) return `≤ ${max}`
  return props.table.strings?.any ?? "Any"
})
</script>

<template>
  <DatatableFilter :label="label" :active="active" @clear="onClear">
    <template #label>{{ label }}</template>

    <template #display-value>
      <span>{{ summary }}</span>
    </template>

    <template #form>
      <div class="flex w-72 flex-col gap-2">
        <div class="grid grid-cols-2 gap-2">
          <input
            v-model="localMin"
            type="number"
            class="h-9 w-full rounded-md border px-2 text-sm"
            placeholder="Min"
          />

          <input
            v-model="localMax"
            type="number"
            class="h-9 w-full rounded-md border px-2 text-sm"
            placeholder="Max"
          />
        </div>

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
