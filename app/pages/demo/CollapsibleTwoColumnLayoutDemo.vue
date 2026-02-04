<script setup lang="ts">
import { ref, computed } from "vue"
import { useColorMode } from "@vueuse/core"
import {
  LayoutGrid,
  Settings,
  Users,
  FileText,
  BarChart3,
  HelpCircle,
  X,
  Sun,
  Moon,
} from "lucide-vue-next"

import {
  CollapsibleTwoColumnLayout,
  CollapsibleSidebarDesktop,
  CollapsibleMain,
  CollapsibleSidebarTrigger,
  CollapsibleMenuButton,
  CollapsibleMenuGroup,
  TwoColumnLayoutSidebar,
  TwoColumnLayoutSidebarMobile,
  Header,
} from "@/components/layout"
import { Switch } from "@/components/switch"
import { Button } from "@/components/button"
import MobileSidebar from "./MobileSidebar.vue"
import { Logo } from "@app/components"

const mode = useColorMode()
const isDark = computed({
  get: () => mode.value === "dark",
  set: (val) => {
    mode.value = val ? "dark" : "light"
  },
})

const activeRoute = ref("/dashboard")

function setActiveRoute(route: string) {
  activeRoute.value = route
}

const navItems = [
  { route: "/dashboard", icon: LayoutGrid, label: "Dashboard", group: "Platform" },
  { route: "/analytics", icon: BarChart3, label: "Analytics", group: "Platform" },
  { route: "/users", icon: Users, label: "Users", group: "Platform" },
  { route: "/documents", icon: FileText, label: "Documents", group: "Platform" },
  { route: "/settings", icon: Settings, label: "Settings", group: "Settings" },
  { route: "/help", icon: HelpCircle, label: "Help", group: "Settings" },
]

const platformItems = navItems.filter((item) => item.group === "Platform")
const settingsItems = navItems.filter((item) => item.group === "Settings")
</script>

<template>
  <CollapsibleTwoColumnLayout class="absolute inset-0 z-50" collapsible="icon">
    <Header>
      <RouterLink to="/" class="hidden lg:block">
        <Logo alt="Gooey" class="w-36" />
      </RouterLink>

      <CollapsibleSidebarTrigger />

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
        <MobileSidebar
          :active-route="activeRoute"
          :nav-items="navItems"
          @navigate="setActiveRoute"
        />
      </TwoColumnLayoutSidebarMobile>

      <CollapsibleSidebarDesktop class="flex flex-col">
        <div class="flex-1">
          <CollapsibleMenuGroup label="Platform" class="mb-6">
            <CollapsibleMenuButton
              v-for="item in platformItems"
              :key="item.route"
              :tooltip="item.label"
              :active="activeRoute === item.route"
              @click="setActiveRoute(item.route)"
            >
              <component :is="item.icon" class="h-5 w-5 shrink-0" />

              <span class="group-data-[state=collapsed]/collapsible-layout:hidden">{{
                item.label
              }}</span>
            </CollapsibleMenuButton>
          </CollapsibleMenuGroup>

          <CollapsibleMenuGroup label="Settings" class="mb-6">
            <CollapsibleMenuButton
              v-for="item in settingsItems"
              :key="item.route"
              :tooltip="item.label"
              :active="activeRoute === item.route"
              @click="setActiveRoute(item.route)"
            >
              <component :is="item.icon" class="h-5 w-5 shrink-0" />

              <span class="group-data-[state=collapsed]/collapsible-layout:hidden">{{
                item.label
              }}</span>
            </CollapsibleMenuButton>
          </CollapsibleMenuGroup>
        </div>
      </CollapsibleSidebarDesktop>
    </TwoColumnLayoutSidebar>

    <CollapsibleMain class="bg-background">
      <div class="space-y-6">
        <div>
          <h1 class="text-2xl font-bold">
            {{ activeRoute.slice(1).charAt(0).toUpperCase() + activeRoute.slice(2) }}
          </h1>

          <p class="text-muted-foreground">
            This is the {{ activeRoute.slice(1) }} page. Use the collapse button at the bottom of
            the sidebar, or press
            <kbd class="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">⌘B</kbd>
            /
            <kbd class="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">Ctrl+B</kbd>
            to toggle the sidebar.
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="i in 4" :key="i" class="rounded-lg border bg-card p-6 shadow-sm">
            <div class="text-sm font-medium text-muted-foreground">Metric {{ i }}</div>

            <div class="mt-2 text-3xl font-bold">{{ Math.floor(Math.random() * 10000) }}</div>
          </div>
        </div>

        <div class="rounded-lg border bg-card p-6 shadow-sm">
          <h2 class="mb-4 text-lg font-semibold">Features</h2>

          <ul class="list-inside list-disc space-y-2 text-muted-foreground">
            <li>Collapsible sidebar with smooth 200ms transition</li>

            <li>Collapse button in sidebar footer</li>

            <li>Keyboard shortcut (⌘B / Ctrl+B) to toggle</li>

            <li>State persisted to cookies for 7 days</li>

            <li>Tooltips appear when sidebar is collapsed</li>

            <li>Group labels auto-hide when collapsed</li>

            <li>Works with existing TwoColumnLayout components</li>

            <li>Tailwind v3 and v4 compatible CSS variables</li>
          </ul>
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
    </CollapsibleMain>
  </CollapsibleTwoColumnLayout>
</template>
