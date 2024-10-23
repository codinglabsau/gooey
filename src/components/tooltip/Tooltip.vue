<script setup lang="ts">
import { TooltipRoot, type TooltipRootEmits, type TooltipRootProps, useForwardPropsEmits } from 'radix-vue'
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/tooltip'

interface ExtendedTooltipRootProps extends TooltipRootProps {
  tooltip?: string,
  indicator?: boolean,
}

const props = withDefaults(defineProps<ExtendedTooltipRootProps>(), {
  delayDuration: 300,
})

const emits = defineEmits<TooltipRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TooltipProvider>
    <TooltipRoot v-bind="forwarded" >
      <TooltipTrigger :class=" indicator ? 'underline decoration-dotted underline-offset-4' : ''" >
          <slot />
      </TooltipTrigger>
      <TooltipContent v-bind="$attrs" >
        <slot name="tooltip" > {{ tooltip }} </slot>
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
