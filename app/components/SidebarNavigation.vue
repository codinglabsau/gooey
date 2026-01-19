<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
import { ChevronRight } from "lucide-vue-next"
import type { NavigationGroup } from "@app/router/navigation"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/collapsible"

const props = defineProps<{
  items: NavigationGroup[]
}>()

defineEmits<{
  navigated: []
}>()

const route = useRoute()

// Track which groups are open (all open by default)
const openGroups = ref<Set<string>>(new Set(props.items.map((g) => g.name)))

function toggleGroup(name: string) {
  if (openGroups.value.has(name)) {
    openGroups.value.delete(name)
  } else {
    openGroups.value.add(name)
  }
}

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <nav class="flex flex-col gap-1 py-2">
    <Collapsible
      v-for="group in items"
      :key="group.name"
      :open="openGroups.has(group.name)"
      class="group/collapsible"
    >
      <CollapsibleTrigger
        class="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
        @click="toggleGroup(group.name)"
      >
        <component
          :is="group.icon"
          v-if="group.icon"
          class="size-4 shrink-0 text-muted-foreground"
        />

        <span class="flex-1 text-left">{{ group.name }}</span>

        <ChevronRight
          class="size-4 shrink-0 text-muted-foreground transition-transform duration-200"
          :class="{ 'rotate-90': openGroups.has(group.name) }"
        />
      </CollapsibleTrigger>

      <CollapsibleContent
        class="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
      >
        <ul class="mt-1 space-y-0.5 pl-4">
          <li v-for="item in group.children" :key="item.name">
            <RouterLink
              :to="item.path"
              class="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors"
              :class="[
                isActive(item.path)
                  ? 'bg-accent font-medium text-accent-foreground'
                  : 'text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground',
              ]"
              @click="$emit('navigated')"
            >
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </CollapsibleContent>
    </Collapsible>
  </nav>
</template>
