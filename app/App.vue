<script setup lang="ts">
import { ref, computed } from "vue"
import { useColorMode } from "@vueuse/core"
import { Moon, Sun } from "lucide-vue-next"

import {
  TwoColumnLayout,
  TwoColumnLayoutSidebar,
  TwoColumnLayoutSidebarDesktop,
  TwoColumnLayoutSidebarMobile,
  TwoColumnLayoutSidebarTrigger,
  Header,
  Main,
} from "@/components/layout"
import { Switch } from "@/components/switch"
import { ScrollArea } from "@/components/scroll-area"
import { SidebarNavigation } from "@app/components"
import { navigation } from "@app/router/navigation"
import MobileSidebar from "@app/components/MobileSidebar.vue"
import Logo from "@app/components/Logo.vue"

const mode = useColorMode()
const isDark = computed({
  get: () => mode.value === "dark",
  set: (val) => {
    mode.value = val ? "dark" : "light"
  },
})

const sidebarOpen = ref(false)
</script>

<template>
  <TwoColumnLayout>
    <Header>
      <RouterLink to="/" class="hidden lg:block">
        <div class="flex items-center space-x-2">
          <Logo alt="Coding Labs UI" class="w-6" />

          <div class="text-xl font-semibold tracking-tight">GOOEY</div>
        </div>
      </RouterLink>

      <TwoColumnLayoutSidebarTrigger @click="sidebarOpen = true" />

      <div class="flex w-full justify-end">
        <div class="group flex cursor-pointer items-center space-x-2">
          <Sun class="size-5 text-primary" @click="mode = 'light'" />

          <Switch v-model="isDark" />

          <Moon class="size-5 text-primary" @click="mode = 'dark'" />
        </div>
      </div>
    </Header>

    <TwoColumnLayoutSidebar>
      <TwoColumnLayoutSidebarMobile>
        <MobileSidebar v-model:open="sidebarOpen" />
      </TwoColumnLayoutSidebarMobile>

      <TwoColumnLayoutSidebarDesktop>
        <ScrollArea class="h-full px-2">
          <SidebarNavigation :items="navigation" />
        </ScrollArea>
      </TwoColumnLayoutSidebarDesktop>
    </TwoColumnLayoutSidebar>

    <Main>
      <component :is="$route.meta.layout || 'div'" class="sm:px-6 lg:px-8">
        <RouterView />
      </component>
    </Main>
  </TwoColumnLayout>
</template>
