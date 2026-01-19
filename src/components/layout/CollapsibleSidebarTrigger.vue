<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { PanelLeft } from "lucide-vue-next"
import { cn } from "@/lib/utils"
import { Button } from "@/components/button"
import { useCollapsibleSidebar } from "./collapsible-utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { toggleSidebar, collapsible } = useCollapsibleSidebar()
</script>

<template>
  <Button
    v-if="collapsible !== 'none'"
    data-sidebar="trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7', props.class)"
    @click="toggleSidebar"
  >
    <PanelLeft class="h-5 w-5" />

    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
