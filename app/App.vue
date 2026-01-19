<script setup lang="ts">
import { ref, watch } from "vue"
import { useColorMode } from "@vueuse/core"
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline"

import {
  CollapsibleTwoColumnLayout,
  CollapsibleSidebarDesktop,
  CollapsibleMain,
  CollapsibleSidebarTrigger,
  TwoColumnLayoutSidebar,
  TwoColumnLayoutSidebarMobile,
  Header,
} from "@/components/layout"
import { Switch } from "@/components/switch"
import { ScrollArea } from "@/components/scroll-area"
import { SidebarNavigation } from "@app/components"
import { navigation } from "@app/router/navigation"
import MobileSidebar from "@app/components/MobileSidebar.vue"

const mode = useColorMode()
const colourMode = ref(mode.value === "dark")
watch(colourMode, (value) => (mode.value = value ? "dark" : "light"))
</script>

<template>
  <CollapsibleTwoColumnLayout collapsible="icon">
    <Header>
      <RouterLink to="/" class="hidden lg:block">
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Coding Labs UI" class="w-6" />

          <div
            class="text-xl font-semibold tracking-tight group-data-[state=collapsed]/collapsible-layout:hidden"
          >
            GOOEY
          </div>
        </div>
      </RouterLink>

      <CollapsibleSidebarTrigger />

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
        <MobileSidebar />
      </TwoColumnLayoutSidebarMobile>

      <CollapsibleSidebarDesktop>
        <ScrollArea class="flex-1 px-2">
          <SidebarNavigation :items="navigation" />
        </ScrollArea>
      </CollapsibleSidebarDesktop>
    </TwoColumnLayoutSidebar>

    <CollapsibleMain>
      <component :is="$route.meta.layout || 'div'" class="sm:px-6 lg:px-8">
        <RouterView />
      </component>
    </CollapsibleMain>
  </CollapsibleTwoColumnLayout>
</template>
