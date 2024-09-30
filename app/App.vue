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
  Header,
  Main,
} from "@/components/layout"
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

      <div class="ml-6 flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form class="relative flex flex-1" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>

          <MagnifyingGlassIcon
            class="pointer-events-none absolute inset-y-0 left-4 h-full w-5 text-foreground"
            aria-hidden="true"
          />

          <input
            id="search-field"
            class="block h-full w-64 border-0 bg-accent py-0 pl-12 pr-0 placeholder:text-foreground focus:ring-0 sm:text-sm"
            placeholder="Search..."
            type="search"
            name="search"
          />
        </form>
      </div>

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

    <Main>
      <component :is="$route.meta.layout || 'div'" class="sm:px-6 lg:px-8">
        <RouterView />
      </component>
    </Main>
  </TwoColumnLayout>
</template>
