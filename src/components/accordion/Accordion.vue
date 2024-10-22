<script setup lang="ts">
import {
  AccordionRoot,
  type AccordionRootEmits,
  type AccordionRootProps,
  useForwardPropsEmits,
} from 'radix-vue'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/accordion'

const props = defineProps<AccordionRootProps>()
const emits = defineEmits<AccordionRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
      <AccordionRoot  >
        <AccordionItem v-for="(item, index) in content" :value="'item-' + index" :key="index">
          <AccordionTrigger>
            <slot :name="index + '.title'" :item="item"> {{ item.title }}</slot>
          </AccordionTrigger>
          <AccordionContent>
            <slot :name="index + '.content'" :item="item"> {{ item.content }}</slot>
          </AccordionContent>
        </AccordionItem>
    </AccordionRoot>
</template>
