<script setup lang="ts">
import { computed } from "vue"
import { ChevronsLeft, ChevronsRight } from "lucide-vue-next"
import { useCollapsibleSidebar } from "@/components/layout"
import { Button } from "@/components/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip"

const { state, toggleSidebar } = useCollapsibleSidebar()

const isCollapsed = computed(() => state.value === "collapsed")
</script>

<template>
  <div class="border-t pt-4">
    <Tooltip>
      <TooltipTrigger as-child>
        <Button
          variant="ghost"
          size="sm"
          class="w-full justify-start"
          :class="isCollapsed && 'justify-center px-2'"
          @click="toggleSidebar"
        >
          <ChevronsLeft v-if="!isCollapsed" class="h-4 w-4 shrink-0" />

          <ChevronsRight v-else class="h-4 w-4 shrink-0" />

          <span v-if="!isCollapsed" class="ml-2">Collapse</span>
        </Button>
      </TooltipTrigger>

      <TooltipContent v-if="isCollapsed" side="right">Expand</TooltipContent>
    </Tooltip>
  </div>
</template>
