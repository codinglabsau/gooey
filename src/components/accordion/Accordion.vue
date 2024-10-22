<script setup lang="ts">
import {
  AccordionRoot,
  type AccordionRootEmits,
  type AccordionRootProps,
  useForwardPropsEmits,
} from 'radix-vue'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/accordion'

interface AccordionItem {
  title: string
  content: string
}

interface ExtendedAccordionRootProps extends AccordionRootProps  {
  content?: AccordionItem[];
}

const props = withDefaults(defineProps<ExtendedAccordionRootProps>(), {
  type: 'single',
  collapsible: true,
})

const emits = defineEmits<AccordionRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
      <AccordionRoot v-bind="forwarded">
        <AccordionItem v-for="(item, key) in content" :value="'item-' + key" :key="key">
          <AccordionTrigger  >
            <slot :name="key + '.title'" :item="item">
              {{ item.title }}
            </slot>
          </AccordionTrigger>
          <AccordionContent>
            <slot :name="key + '.content'" :item="item">
              {{ item.content }}
            </slot>
          </AccordionContent>
        </AccordionItem>
    </AccordionRoot>
</template>
