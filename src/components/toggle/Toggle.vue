<script setup lang="ts">
import type { ToggleEmits, ToggleProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ToggleVariants } from "."
import { reactiveOmit } from "@vueuse/core"
import { Toggle as ToggleRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"
import { toggleVariants } from "."

const props = withDefaults(
  defineProps<
    ToggleProps & {
      class?: HTMLAttributes["class"]
      variant?: ToggleVariants["variant"]
      size?: ToggleVariants["size"]
    }
  >(),
  {
    variant: "default",
    size: "default",
    disabled: false,
  },
)

const emits = defineEmits<ToggleEmits>()

const delegatedProps = reactiveOmit(props, "class", "size", "variant")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ToggleRoot
    v-slot="slotProps"
    v-bind="forwarded"
    :class="cn(toggleVariants({ variant, size }), props.class)"
  >
    <slot v-bind="slotProps" />
  </ToggleRoot>
</template>
