<script setup lang="ts">
import Button from "@/components/button/Button.vue"
import { cn } from "@/lib/utils"
import { Menu, PanelLeft } from "lucide-vue-next"
import type { HTMLAttributes } from "vue"
import { useSidebar } from "./utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { toggleSidebar, isMobile } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-9 w-9 touch-manipulation md:h-7 md:w-7', props.class)"
    @click="toggleSidebar"
  >
    <Menu v-if="isMobile" class="h-5 w-5" />

    <PanelLeft v-else />

    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
