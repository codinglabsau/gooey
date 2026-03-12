<script setup lang="ts">
import LengthAwarePaginator from "./LengthAwarePaginator.vue"
import CursorPaginator from "./CursorPaginator.vue"
import { computed } from "vue"

const props = defineProps<{
  paginator: Paginator<unknown> | CursorPaginatorResponse<unknown>
}>()

const isCursor = computed(() => !("last_page" in props.paginator))
</script>

<template>
  <LengthAwarePaginator v-if="!isCursor" :paginator="paginator as Paginator<unknown>" />

  <CursorPaginator v-else :paginator="paginator as CursorPaginatorResponse<unknown>" />
</template>
