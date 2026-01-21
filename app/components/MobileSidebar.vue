<script setup lang="ts">
import { VisuallyHidden } from "reka-ui"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/sheet"
import { ScrollArea } from "@/components/scroll-area"
import { Separator } from "@/components/separator"
import { Logo, SidebarNavigation } from "@app/components"
import { navigation } from "@app/router/navigation"

const open = defineModel<boolean>("open", { default: false })

function onNavigated() {
  open.value = false
}
</script>

<template>
  <Sheet v-model:open="open">
    <SheetContent side="left" class="w-72 p-0">
      <SheetHeader class="px-4 py-4">
        <SheetTitle class="flex items-center space-x-2">
          <Logo alt="Coding Labs UI" class="w-6" />

          <div class="text-xl font-semibold tracking-tight">GOOEY</div>
        </SheetTitle>
      </SheetHeader>

      <VisuallyHidden as-child>
        <SheetDescription>Sidebar navigation</SheetDescription>
      </VisuallyHidden>

      <Separator />

      <ScrollArea class="h-[calc(100vh-5rem)]">
        <div class="px-2 py-2">
          <SidebarNavigation :items="navigation" @navigated="onNavigated" />
        </div>
      </ScrollArea>
    </SheetContent>
  </Sheet>
</template>
