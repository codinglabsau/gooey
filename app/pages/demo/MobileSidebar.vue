<script setup lang="ts">
import type { Component } from "vue"
import { VisuallyHidden } from "reka-ui"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/sheet"
import { useCollapsibleSidebar } from "@/components/layout"
import { Logo } from "@app/components"

defineProps<{
  activeRoute: string
  navItems: Array<{
    route: string
    icon: Component
    label: string
    group: string
  }>
}>()

const emit = defineEmits<{
  navigate: [route: string]
}>()

const { openMobile, setOpenMobile } = useCollapsibleSidebar()

function navigate(route: string) {
  emit("navigate", route)
  setOpenMobile(false)
}
</script>

<template>
  <Sheet :open="openMobile" @update:open="setOpenMobile">
    <SheetContent side="left" class="w-72 p-0">
      <SheetHeader class="border-b p-4">
        <SheetTitle>
          <Logo alt="Gooey" class="w-36" />
        </SheetTitle>
      </SheetHeader>

      <VisuallyHidden as-child>
        <SheetDescription>Sidebar navigation</SheetDescription>
      </VisuallyHidden>

      <nav class="space-y-1 p-4">
        <button
          v-for="item in navItems"
          :key="item.route"
          class="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          :class="activeRoute === item.route && 'bg-accent text-accent-foreground'"
          @click="navigate(item.route)"
        >
          <component :is="item.icon" class="h-5 w-5" />
          {{ item.label }}
        </button>
      </nav>
    </SheetContent>
  </Sheet>
</template>
