<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "@/lib/utils"
import { useCollapsibleSidebar } from "./collapsible-utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { state, isMobile, collapsible } = useCollapsibleSidebar()

const isCollapsed = computed(() => collapsible === "icon" && state.value === "collapsed")
</script>

<template>
  <div
    v-if="!isMobile"
    :class="
      cn(
        'fixed inset-y-0 top-16 z-50 flex flex-col px-6 py-6 transition-[width] duration-200 ease-linear',
        isCollapsed
          ? 'w-[var(--collapsible-sidebar-width-icon)] px-2'
          : 'w-[var(--collapsible-sidebar-width)]',
        props.class,
      )
    "
    :data-state="state"
    :data-collapsible="collapsible"
  >
    <div class="flex-1 overflow-y-auto">
      <slot />
    </div>
  </div>
</template>
