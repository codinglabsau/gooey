<script setup lang="ts">
import { ref, watch } from "vue"
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
  ChevronsLeft,
  ChevronsRight,
} from "lucide-vue-next"

import {
  CollapsibleTwoColumnLayout,
  CollapsibleSidebarDesktop,
  CollapsibleMain,
  CollapsibleSidebarTrigger,
  CollapsibleMenuButton,
  CollapsibleMenuGroup,
  useCollapsibleSidebar,
  TwoColumnLayoutSidebar,
  TwoColumnLayoutSidebarMobile,
  Header,
} from "@/components/layout"
import { Switch } from "@/components/switch"
import { Button } from "@/components/button"
import MobileSidebar from "./MobileSidebar.vue"
import SidebarCollapseToggle from "./SidebarCollapseToggle.vue"

const mode = useColorMode()
const colourMode = ref(mode.value === "dark")
watch(colourMode, (value) => (mode.value = value ? "dark" : "light"))

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
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

          <div class="text-xl">Brand</div>
        </div>
      </RouterLink>

      <CollapsibleSidebarTrigger />

      <div class="flex w-full items-center justify-end gap-4">
        <div class="group flex cursor-pointer items-center space-x-2">
          <SunIcon class="size-5 text-primary" @click="colourMode = false" />

          <Switch v-model:checked="colourMode" />

          <MoonIcon class="size-5 text-primary" @click="colourMode = true" />
        </div>

        <Button variant="ghost" size="sm" as-child>
          <RouterLink to="/components/collapsible-two-column-layout">
            <ChevronLeft class="mr-1 h-4 w-4" />
            Back
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

        <SidebarCollapseToggle />
      </CollapsibleSidebarDesktop>
    </TwoColumnLayoutSidebar>

    <CollapsibleMain>
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
      </div>
    </CollapsibleMain>
  </CollapsibleTwoColumnLayout>
</template>
