<script setup lang="ts">
import type { Component, HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip"
import { useCollapsibleSidebar } from "./collapsible-utils"

const props = defineProps<{
  tooltip?: string | Component
  active?: boolean
  class?: HTMLAttributes["class"]
}>()

const { state, isMobile, collapsible } = useCollapsibleSidebar()

const isCollapsed = computed(() => collapsible === "icon" && state.value === "collapsed")
const showTooltip = computed(() => props.tooltip && isCollapsed.value && !isMobile.value)
</script>

<template>
  <Tooltip v-if="showTooltip">
    <TooltipTrigger as-child>
      <button
        type="button"
        :class="
          cn(
            'flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
            'hover:bg-accent hover:text-accent-foreground',
            active && 'bg-accent text-accent-foreground',
            isCollapsed && 'justify-center px-2',
            props.class,
          )
        "
        :data-active="active"
        :data-collapsed="isCollapsed"
      >
        <slot />
      </button>
    </TooltipTrigger>

    <TooltipContent side="right" align="center">
      <template v-if="typeof tooltip === 'string'">
        {{ tooltip }}
      </template>

      <component :is="tooltip" v-else />
    </TooltipContent>
  </Tooltip>

  <button
    v-else
    type="button"
    :class="
      cn(
        'flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
        'hover:bg-accent hover:text-accent-foreground',
        active && 'bg-accent text-accent-foreground',
        isCollapsed && 'justify-center px-2',
        props.class,
      )
    "
    :data-active="active"
    :data-collapsed="isCollapsed"
  >
    <slot />
  </button>
</template>
