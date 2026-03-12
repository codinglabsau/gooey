<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next"
import { buttonVariants } from "@/components/button"
import { cn } from "@/lib/utils"
import GooeyLink from "@/components/gooey-link/GooeyLink.vue"

defineProps<{
  paginator: CursorPaginatorResponse<unknown>
}>()
</script>

<template>
  <nav role="navigation" aria-label="Pagination" class="flex w-full items-center justify-between">
    <component
      :is="paginator.prev_page_url ? GooeyLink : 'span'"
      :href="paginator.prev_page_url ?? undefined"
      :class="
        cn(
          buttonVariants({ variant: 'outline', size: 'sm' }),
          !paginator.prev_page_url && 'pointer-events-none opacity-50',
        )
      "
    >
      <ChevronLeftIcon class="size-4" />
      Previous
    </component>

    <component
      :is="paginator.next_page_url ? GooeyLink : 'span'"
      :href="paginator.next_page_url ?? undefined"
      :class="
        cn(
          buttonVariants({ variant: 'outline', size: 'sm' }),
          !paginator.next_page_url && 'pointer-events-none opacity-50',
        )
      "
    >
      Next
      <ChevronRightIcon class="size-4" />
    </component>
  </nav>
</template>
