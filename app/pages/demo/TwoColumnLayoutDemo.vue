<script setup lang="ts">
import { ref, computed } from "vue"
import { VisuallyHidden } from "reka-ui"
import { useColorMode } from "@vueuse/core"
import {
  LayoutGrid,
  Settings,
  Users,
  FileText,
  BarChart3,
  HelpCircle,
  ChevronUp,
  User2,
  X,
  Sun,
  Moon,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/sheet"
import { Switch } from "@/components/switch"
import { Button } from "@/components/button"

const mode = useColorMode()
const isDark = computed({
  get: () => mode.value === "dark",
  set: (val) => {
    mode.value = val ? "dark" : "light"
  },
})

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
          <Sun class="size-5 text-primary" @click="mode = 'light'" />

          <Switch v-model="isDark" />

          <Moon class="size-5 text-primary" @click="mode = 'dark'" />
        </div>

        <Button variant="ghost" size="icon" as-child>
          <RouterLink to="/components/two-column-layout">
            <X class="h-4 w-4" />
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

      <TwoColumnLayoutSidebarDesktop class="flex h-full flex-col">
        <nav class="flex-1 space-y-1">
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

        <div class="border-t p-2">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <button
                class="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <User2 class="h-5 w-5" />
                Username
                <ChevronUp class="ml-auto h-4 w-4" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent side="top" class="w-[--reka-popper-anchor-width]">
              <DropdownMenuItem>
                <span>Account</span>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <span>Billing</span>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TwoColumnLayoutSidebarDesktop>
    </TwoColumnLayoutSidebar>

    <Main class="bg-background">
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

        <div class="rounded-lg border bg-card p-6 shadow-sm">
          <h2 class="mb-4 text-lg font-semibold">Recent Activity</h2>

          <div class="space-y-4">
            <div
              v-for="i in 8"
              :key="i"
              class="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div class="flex items-center gap-4">
                <div class="h-10 w-10 rounded-full bg-muted" />

                <div>
                  <div class="font-medium">Activity Item {{ i }}</div>

                  <div class="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>

              <div class="text-sm text-muted-foreground">{{ i }}h ago</div>
            </div>
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg border bg-card p-6 shadow-sm">
            <h2 class="mb-4 text-lg font-semibold">Performance Overview</h2>

            <div class="space-y-4">
              <div v-for="i in 5" :key="i">
                <div class="mb-1 flex justify-between text-sm">
                  <span>Metric {{ i }}</span>

                  <span class="text-muted-foreground">{{ 20 * i }}%</span>
                </div>

                <div class="h-2 rounded-full bg-muted">
                  <div class="h-2 rounded-full bg-primary" :style="{ width: `${20 * i}%` }" />
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-lg border bg-card p-6 shadow-sm">
            <h2 class="mb-4 text-lg font-semibold">Quick Actions</h2>

            <div class="grid grid-cols-2 gap-2">
              <button
                v-for="action in [
                  'Create Report',
                  'Export Data',
                  'Send Email',
                  'Schedule Task',
                  'View Logs',
                  'Settings',
                ]"
                :key="action"
                class="rounded-md border bg-background p-3 text-sm transition-colors hover:bg-accent"
              >
                {{ action }}
              </button>
            </div>
          </div>
        </div>

        <div class="rounded-lg border bg-card p-6 shadow-sm">
          <h2 class="mb-4 text-lg font-semibold">Data Table</h2>

          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b">
                  <th class="pb-3 text-left font-medium">Name</th>

                  <th class="pb-3 text-left font-medium">Status</th>

                  <th class="pb-3 text-left font-medium">Date</th>

                  <th class="pb-3 text-right font-medium">Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="i in 10" :key="i" class="border-b last:border-0">
                  <td class="py-3">Item {{ i }}</td>

                  <td class="py-3">
                    <span
                      class="rounded-full px-2 py-1 text-xs"
                      :class="
                        i % 3 === 0
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                          : i % 3 === 1
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                      "
                    >
                      {{ i % 3 === 0 ? "Complete" : i % 3 === 1 ? "Pending" : "In Progress" }}
                    </span>
                  </td>

                  <td class="py-3 text-muted-foreground">Jan {{ i + 10 }}, 2026</td>

                  <td class="py-3 text-right">${{ (Math.random() * 1000).toFixed(2) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Main>
  </TwoColumnLayout>
</template>
