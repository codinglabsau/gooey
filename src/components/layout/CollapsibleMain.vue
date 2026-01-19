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
  <main
    :class="
      cn(
        'px-4 py-6 transition-[padding-left] duration-200 ease-linear sm:px-6 lg:px-8',
        !isMobile &&
          (isCollapsed
            ? 'lg:pl-[var(--collapsible-sidebar-width-icon)]'
            : 'lg:pl-[var(--collapsible-sidebar-width)]'),
        props.class,
      )
    "
    :data-state="state"
  >
    <slot />
  </main>
</template>
