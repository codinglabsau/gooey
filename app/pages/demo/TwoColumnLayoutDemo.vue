<script setup lang="ts">
import { ref, watch } from "vue"
import { VisuallyHidden } from "radix-vue"
import { useColorMode } from "@vueuse/core"
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline"

import {
  TwoColumnLayout,
  TwoColumnLayoutSidebar,
  TwoColumnLayoutSidebarDesktop,
  TwoColumnLayoutSidebarMobile,
  TwoColumnLayoutSidebarTrigger,
  Header,
  TwoColumnLayoutMain,
} from "@/components/layout"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/sheet"
import { Switch } from "@/components/switch"

const mode = useColorMode()
const colourMode = ref(mode.value === "dark")
watch(colourMode, (value) => (mode.value = value ? "dark" : "light"))

const sidebarOpen = ref(false)
</script>

<template>
  <TwoColumnLayout class="absolute inset-0 z-50">
    <Header>
      <RouterLink to="/" class="hidden lg:block">
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

          <div class="text-xl">Brand</div>
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
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle class="flex items-center space-x-2">
                <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

                <div class="text-xl">Brand</div>
              </SheetTitle>
            </SheetHeader>

            <VisuallyHidden as-child>
              <SheetDescription> Sidebar navigation</SheetDescription>
            </VisuallyHidden>

            mobile navigation
          </SheetContent>
        </Sheet>
      </TwoColumnLayoutSidebarMobile>

      <TwoColumnLayoutSidebarDesktop> desktop navigation </TwoColumnLayoutSidebarDesktop>
    </TwoColumnLayoutSidebar>

    <TwoColumnLayoutMain>
      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />

      main<br />
    </TwoColumnLayoutMain>
  </TwoColumnLayout>
</template>
