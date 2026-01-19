<script setup lang="ts">
import { ref, watch } from "vue"
import { VisuallyHidden } from "reka-ui"
import { useColorMode } from "@vueuse/core"
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline"

import {
  TwoColumnLayout,
  TwoColumnLayoutSidebar,
  TwoColumnLayoutSidebarDesktop,
  TwoColumnLayoutSidebarMobile,
  TwoColumnLayoutSidebarTrigger,
  Header,
  Main,
} from "@/components/layout"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/sheet"
import { Switch } from "@/components/switch"
import { ScrollArea } from "@/components/scroll-area"
import { Separator } from "@/components/separator"
import { SidebarNavigation } from "@app/components"
import { navigation } from "@app/router/navigation"

const mode = useColorMode()
const colourMode = ref(mode.value === "dark")
watch(colourMode, (value) => (mode.value = value ? "dark" : "light"))

const sidebarOpen = ref(false)
</script>

<template>
  <TwoColumnLayout>
    <Header>
      <RouterLink to="/" class="hidden lg:block">
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

          <div class="text-xl font-semibold tracking-tight">GOOEY</div>
        </div>
      </RouterLink>

      <TwoColumnLayoutSidebarTrigger @click="sidebarOpen = true" />

      <div class="flex w-full justify-end">
        <div class="group flex cursor-pointer items-center space-x-2">
          <SunIcon class="size-5 text-primary" @click="colourMode = false" />

          <Switch v-model:checked="colourMode" />

          <MoonIcon class="size-5 text-primary" @click="colourMode = true" />
        </div>
      </div>
    </Header>

    <TwoColumnLayoutSidebar>
      <TwoColumnLayoutSidebarMobile>
        <Sheet :open="sidebarOpen" @update:open="sidebarOpen = !sidebarOpen">
          <SheetContent side="left" class="w-72 p-0">
            <SheetHeader class="px-4 py-4">
              <SheetTitle class="flex items-center space-x-2">
                <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

                <div class="text-xl font-semibold tracking-tight">GOOEY</div>
              </SheetTitle>
            </SheetHeader>

            <VisuallyHidden as-child>
              <SheetDescription>Sidebar navigation</SheetDescription>
            </VisuallyHidden>

            <Separator />

            <ScrollArea class="h-[calc(100vh-5rem)]">
              <div class="px-2 py-2">
                <SidebarNavigation :items="navigation" @navigated="sidebarOpen = false" />
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </TwoColumnLayoutSidebarMobile>

      <TwoColumnLayoutSidebarDesktop>
        <ScrollArea class="h-full px-2">
          <SidebarNavigation :items="navigation" />
        </ScrollArea>
      </TwoColumnLayoutSidebarDesktop>
    </TwoColumnLayoutSidebar>

    <Main>
      <component :is="$route.meta.layout || 'div'" class="sm:px-6 lg:px-8">
        <RouterView />
      </component>
    </Main>
  </TwoColumnLayout>
</template>
