<script setup lang="ts">
import { type AccordionRootEmits, type AccordionRootProps, useForwardPropsEmits } from "radix-vue"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion"
import Accordion from "@/components/accordion/Accordion.vue"

interface Item {
  title: string
  content: string
}

interface ExtendedAccordionRootProps extends AccordionRootProps {
  content?: Item[]
}

const props = withDefaults(defineProps<ExtendedAccordionRootProps>(), {
  type: "single",
  collapsible: true,
})

const emits = defineEmits<AccordionRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <Accordion v-bind="forwarded">
    <AccordionItem v-for="(item, key) in content" :key="key" :value="'item-' + key">
      <AccordionTrigger>
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
  </Accordion>
</template>
