<script setup lang="ts">
import { ref, watch } from "vue"
import { VisuallyHidden } from "radix-vue"
import { useRouter } from "vue-router"
import { useColorMode } from "@vueuse/core"
import { MoonIcon, SunIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/outline"

import {
  TwoColumnLayout,
  TwoColumnLayoutSidebar,
  TwoColumnLayoutSidebarDesktop,
  TwoColumnLayoutSidebarMobile,
  TwoColumnLayoutSidebarTrigger,
  TwoColumnLayoutMain,
} from "@/components/layout"
import { Header } from "@/components/header"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/sheet"
import { Switch } from "@/components/switch"

import SidebarNavigation from "@app/components/SidebarNavigation.vue"

const router = useRouter()
const mode = useColorMode()
const colourMode = ref(mode.value === "dark")
watch(colourMode, (value) => (mode.value = value ? "dark" : "light"))

const navigation = router.getRoutes().filter((route) => route.children.length > 0)

const sidebarOpen = ref(false)
</script>

<template>
  <TwoColumnLayout>
    <Header>
      <RouterLink to="/" class="hidden lg:block">
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

          <div class="text-xl">GOOEY</div>
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

                <div class="text-xl">GOOEY</div>
              </SheetTitle>
            </SheetHeader>

            <VisuallyHidden as-child>
              <SheetDescription> Sidebar navigation</SheetDescription>
            </VisuallyHidden>

            <SidebarNavigation :items="navigation" @navigated="sidebarOpen = false" />
          </SheetContent>
        </Sheet>
      </TwoColumnLayoutSidebarMobile>

      <TwoColumnLayoutSidebarDesktop>
        <SidebarNavigation :items="navigation" />
      </TwoColumnLayoutSidebarDesktop>
    </TwoColumnLayoutSidebar>

    <TwoColumnLayoutMain>
      <component :is="$route.meta.layout || 'div'" class="sm:px-6 lg:px-8">
        <RouterView />
      </component>
    </TwoColumnLayoutMain>
  </TwoColumnLayout>
</template>
