<script setup lang="ts">
import Tooltip from "@/components/tooltip/Tooltip.vue"
import TooltipContent from "@/components/tooltip/TooltipContent.vue"
import TooltipTrigger from "@/components/tooltip/TooltipTrigger.vue"
import { computed, type Component } from "vue"
import SidebarMenuButtonChild, { type SidebarMenuButtonProps } from "./SidebarMenuButtonChild.vue"
import { useSidebar } from "./utils"

const props = withDefaults(
  defineProps<
    SidebarMenuButtonProps & {
      tooltip?: string | Component
    }
  >(),
  {
    as: "button",
    variant: "default",
    size: "default",
  },
)

defineOptions({
  inheritAttrs: false,
})

const { isMobile, state } = useSidebar()

const delegatedProps = computed(() => {
  const { tooltip, ...delegated } = props
  return delegated
})
</script>

<template>
  <SidebarMenuButtonChild v-if="!tooltip" v-bind="{ ...delegatedProps, ...$attrs }">
    <slot />
  </SidebarMenuButtonChild>

  <Tooltip v-else>
    <TooltipTrigger as-child>
      <SidebarMenuButtonChild v-bind="{ ...delegatedProps, ...$attrs }">
        <slot />
      </SidebarMenuButtonChild>
    </TooltipTrigger>

    <TooltipContent side="right" align="center" :hidden="state !== 'collapsed' || isMobile">
      <template v-if="typeof tooltip === 'string'">
        {{ tooltip }}
      </template>

      <component :is="tooltip" v-else />
    </TooltipContent>
  </Tooltip>
</template>
