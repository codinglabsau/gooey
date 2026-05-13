<script lang="ts" setup>
import type { StepperItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { StepperItem as StepperItemRoot, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<StepperItemProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperItemRoot
    v-slot="slotProps"
    v-bind="forwarded"
    :class="cn('group flex items-center gap-2 data-[disabled]:pointer-events-none', props.class)"
  >
    <slot v-bind="slotProps" />
  </StepperItemRoot>
</template>
