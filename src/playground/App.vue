<script setup lang="ts">
import { ref } from "vue"
import { VisuallyHidden } from "radix-vue"
import { useRouter } from "vue-router"
import { useColorMode } from "@vueuse/core"
import { MoonIcon, SunIcon, ComputerDesktopIcon,  Bars3Icon, MagnifyingGlassIcon } from "@heroicons/vue/24/outline"

const router = useRouter()
const mode = useColorMode()

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/dropdown-menu"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/sheet"

const navigation = router.getRoutes()
const components = navigation.filter((route) => route.path.startsWith("/components"))
const layouts = navigation.filter((route) => route.path.startsWith("/layouts"))

const sidebarOpen = ref(false)
</script>

<template>
  <div class="h-full bg-white dark:bg-zinc-950 dark:text-white">
    <Sheet :open="sidebarOpen" @update:open="sidebarOpen = !sidebarOpen">
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle class="flex items-center space-x-2">
            <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

            <div class="text-xl">GOOEY</div>
          </SheetTitle>
        </SheetHeader>

        <VisuallyHidden as-child>
          <SheetDescription>
            Sidebar navigation
          </SheetDescription>
        </VisuallyHidden>

        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <div class="text-xs font-semibold leading-6 text-gray-400">Components</div>

              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="component in components" :key="component.name">
                  <RouterLink
                    :to="component.path"
                    class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-zinc-800 hover:text-white"
                  >
                    {{ component.name }}
                  </RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto">
        <div class="flex h-16 shrink-0 items-center border-b border-zinc-600">
          <div class="flex items-center space-x-4 px-6">
            <RouterLink to="/">
              <div class="flex items-center space-x-2">
                <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

                <div class="text-xl">GOOEY</div>
              </div>
            </RouterLink>
          </div>
        </div>

        <nav class="flex flex-1 flex-col px-6 pb-4">
          <div class="text-md font-bold leading-6 text-white">Components</div>

          <ul role="list" class="mt-2 flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="component in components" :key="component.name">
                  <RouterLink
                    :to="component.path"
                    class="group flex gap-x-3 rounded-md px-2 text-sm font-light leading-5 text-gray-200 hover:bg-zinc-800 hover:text-white"
                  >
                    {{ component.name }}
                  </RouterLink>
                </li>
              </ul>
            </li>

            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="layout in layouts" :key="layout.name">
                  <RouterLink
                    :to="layout.path"
                    class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-zinc-800 hover:text-white"
                  >
                    {{ layout.name }}
                  </RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-zinc-600 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>

          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-zinc-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="relative flex flex-1" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>

            <MagnifyingGlassIcon
              class="pointer-events-none absolute inset-y-0 left-4 h-full w-5 text-gray-400"
              aria-hidden="true"
            />

            <input
              id="search-field"
              class="block h-full w-full border-0 py-0 pl-12 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 dark:bg-zinc-800 sm:text-sm"
              placeholder="Search..."
              type="search"
              name="search"
            />
          </form>

          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <!--            <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">-->
            <!--              <span class="sr-only">View notifications</span>-->

            <!--              <BellIcon class="h-6 w-6" aria-hidden="true" />-->
            <!--            </button>-->

            <!--            &lt;!&ndash; Separator &ndash;&gt;-->
            <!--            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-zinc-900/10" aria-hidden="true" />-->

            <!-- Dropdown -->
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoonIcon v-if="mode === 'dark'" class="size-6" />

                <SunIcon v-if="mode === 'light'" class="size-6" />

                <ComputerDesktopIcon v-if="mode === 'auto'" class="size-6" />
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem @click="mode = 'dark'">
                  <MoonIcon class="mr-1.5 h-4 w-4" />
                  Dark mode
                </DropdownMenuItem>

                <DropdownMenuItem @click="mode = 'light'">
                  <SunIcon class="mr-1.5 h-4 w-4" />
                  Day mode
                </DropdownMenuItem>

                <DropdownMenuItem @click="mode = 'auto'">
                  <ComputerDesktopIcon class="mr-1.5 h-4 w-4" />
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
