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

// Expect value as [from, to] where each is YYYY-MM-DD or null
const current = computed<any>(() => props.table.filters.value[id.value]?.value ?? [null, null])
const active = computed<boolean>(() => props.table.filters.value[id.value]?.enabled ?? false)

const from = ref<string | null>(Array.isArray(current.value) ? current.value[0] : null)
const to = ref<string | null>(Array.isArray(current.value) ? current.value[1] : null)

watch(current, (v) => {
  if (Array.isArray(v)) {
    from.value = v[0]
    to.value = v[1]
  }
})

const onApply = () => {
  const payload: [string | null, string | null] = [from.value || null, to.value || null]
  props.table.filter(id.value, payload)
}
const onReset = () => {
  props.table.resetFilter(id.value)
  const v = props.table.filters.value[id.value]?.value
  if (Array.isArray(v)) {
    from.value = v[0]
    to.value = v[1]
  } else {
    from.value = null
    to.value = null
  }
}
const onClear = () => props.table.resetFilter(id.value)

const summary = computed(() => {
  if (!active.value || !Array.isArray(current.value)) return props.table.strings?.any ?? "Any"
  const [f, t] = current.value
  if (f && t) return `${f} – ${t}`
  if (f) return `From ${f}`
  if (t) return `Until ${t}`
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
      <div class="flex w-80 flex-col gap-2">
        <div class="grid grid-cols-2 gap-2">
          <input v-model="from" type="date" class="h-9 w-full rounded-md border px-2 text-sm" />

          <input v-model="to" type="date" class="h-9 w-full rounded-md border px-2 text-sm" />
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
