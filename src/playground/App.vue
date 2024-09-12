<script setup lang="ts">
import { ref, watch } from "vue"
import { VisuallyHidden } from "radix-vue"
import { useRouter } from "vue-router"
import { useColorMode } from "@vueuse/core"
import { MoonIcon, SunIcon, Bars3Icon, MagnifyingGlassIcon } from "@heroicons/vue/24/outline"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/sheet"

import { Switch } from "@/components/switch"
import SidebarNavigation from "./SidebarNavigation.vue"

const router = useRouter()
const mode = useColorMode()
const colorMode = ref(mode.value === "dark")
watch(colorMode, (value) => (mode.value = value ? "dark" : "light"))

const navigation = router.getRoutes().filter((route) => route.children.length > 0)

const sidebarOpen = ref(false)
</script>

<template>
  <div class="h-full bg-background dark:text-white">
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

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="gap-y-5 overflow-y-auto">
        <div class="flex h-16 shrink-0 items-center border-b border-accent">
          <div class="flex items-center space-x-4 px-6">
            <RouterLink to="/">
              <div class="flex items-center space-x-2">
                <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

                <div class="text-xl">GOOEY</div>
              </div>
            </RouterLink>
          </div>
        </div>

        <SidebarNavigation :items="navigation" />
      </div>
    </div>

    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-accent px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>

          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-accent lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="relative flex flex-1" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>

            <MagnifyingGlassIcon
              class="pointer-events-none absolute inset-y-0 left-4 h-full w-5 text-foreground"
              aria-hidden="true"
            />

            <input
              id="search-field"
              class="block h-full w-full border-0 bg-accent py-0 pl-12 pr-0 placeholder:text-foreground focus:ring-0 sm:text-sm"
              placeholder="Search..."
              type="search"
              name="search"
            />
          </form>

          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <div class="group flex cursor-pointer items-center space-x-2">
              <SunIcon class="size-5 text-primary" @click="colorMode = false" />

              <Switch v-model:checked="colorMode" />

              <MoonIcon class="size-5 text-primary" @click="colorMode = true" />
            </div>
          </div>
        </div>
      </div>

      <main class="py-10">
        <div class="sm:px-6 lg:px-8">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
