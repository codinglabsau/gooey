<script setup lang="ts">
import { type TooltipRootEmits, type TooltipRootProps, useForwardPropsEmits } from "reka-ui"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/tooltip"

interface ExtendedTooltipRootProps extends TooltipRootProps {
  tooltip?: string
  indicator?: boolean
}

const props = withDefaults(defineProps<ExtendedTooltipRootProps>(), {
  delayDuration: 300,
})

const emits = defineEmits<TooltipRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TooltipProvider>
    <Tooltip v-bind="forwarded">
      <TooltipTrigger :class="indicator ? 'underline decoration-dotted underline-offset-4' : ''">
        <slot />
      </TooltipTrigger>

      <TooltipContent v-bind="$attrs">
        <slot name="tooltip"> {{ tooltip }} </slot>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
