<script setup lang="ts">
import { ref, watch } from "vue"
import { VisuallyHidden } from "reka-ui"
import { useColorMode } from "@vueuse/core"
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline"
import {
  LayoutGrid,
  Settings,
  Users,
  FileText,
  BarChart3,
  HelpCircle,
  ChevronLeft,
} from "lucide-vue-next"

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
import { Button } from "@/components/button"

const mode = useColorMode()
const colourMode = ref(mode.value === "dark")
watch(colourMode, (value) => (mode.value = value ? "dark" : "light"))

const sidebarOpen = ref(false)
const activeRoute = ref("/dashboard")

const navItems = [
  { route: "/dashboard", icon: LayoutGrid, label: "Dashboard" },
  { route: "/analytics", icon: BarChart3, label: "Analytics" },
  { route: "/users", icon: Users, label: "Users" },
  { route: "/documents", icon: FileText, label: "Documents" },
  { route: "/settings", icon: Settings, label: "Settings" },
  { route: "/help", icon: HelpCircle, label: "Help" },
]

function setActiveRoute(route: string) {
  activeRoute.value = route
  sidebarOpen.value = false
}
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

      <div class="flex w-full items-center justify-end gap-4">
        <div class="group flex cursor-pointer items-center space-x-2">
          <SunIcon class="size-5 text-primary" @click="colourMode = false" />

          <Switch v-model:checked="colourMode" />

          <MoonIcon class="size-5 text-primary" @click="colourMode = true" />
        </div>

        <Button variant="ghost" size="sm" as-child>
          <RouterLink to="/components/two-column-layout">
            <ChevronLeft class="mr-1 h-4 w-4" />
            Back
          </RouterLink>
        </Button>
      </div>
    </Header>

    <TwoColumnLayoutSidebar>
      <TwoColumnLayoutSidebarMobile>
        <Sheet :open="sidebarOpen" @update:open="sidebarOpen = !sidebarOpen">
          <SheetContent side="left" class="w-72 p-0">
            <SheetHeader class="border-b p-4">
              <SheetTitle class="flex items-center space-x-2">
                <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

                <span class="text-xl">Brand</span>
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
                @click="setActiveRoute(item.route)"
              >
                <component :is="item.icon" class="h-5 w-5" />
                {{ item.label }}
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </TwoColumnLayoutSidebarMobile>

      <TwoColumnLayoutSidebarDesktop>
        <nav class="space-y-1">
          <button
            v-for="item in navItems"
            :key="item.route"
            class="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            :class="activeRoute === item.route && 'bg-accent text-accent-foreground'"
            @click="activeRoute = item.route"
          >
            <component :is="item.icon" class="h-5 w-5" />
            {{ item.label }}
          </button>
        </nav>
      </TwoColumnLayoutSidebarDesktop>
    </TwoColumnLayoutSidebar>

    <Main>
      <div class="space-y-6">
        <div>
          <h1 class="text-2xl font-bold">
            {{ activeRoute.slice(1).charAt(0).toUpperCase() + activeRoute.slice(2) }}
          </h1>

          <p class="text-muted-foreground">
            This is a basic two-column layout. The sidebar is fixed on desktop and uses a sheet on
            mobile.
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="i in 4" :key="i" class="rounded-lg border bg-card p-6 shadow-sm">
            <div class="text-sm font-medium text-muted-foreground">Metric {{ i }}</div>

            <div class="mt-2 text-3xl font-bold">{{ Math.floor(Math.random() * 10000) }}</div>
          </div>
        </div>

        <div class="rounded-lg border bg-card p-6 shadow-sm">
          <h2 class="mb-4 text-lg font-semibold">About This Layout</h2>

          <p class="text-muted-foreground">
            The basic TwoColumnLayout provides a simple fixed sidebar that is always visible on
            desktop (lg breakpoint and above). On mobile, it collapses to a hamburger menu that
            opens a sheet from the left side.
          </p>

          <p class="mt-4 text-muted-foreground">
            For a more advanced layout with collapsible sidebar support and keyboard shortcuts, try
            the
            <RouterLink to="/demo/collapsible-two-column-layout" class="text-primary underline">
              Collapsible Two Column Layout
            </RouterLink>
            demo.
          </p>
        </div>
      </div>
    </Main>
  </TwoColumnLayout>
</template>
