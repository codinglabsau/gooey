<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { CalendarIcon } from "lucide-vue-next"
import { DateFormatter, type DateValue, getLocalTimeZone } from "@internationalized/date"
import { cn } from "@/lib/utils"
import { Button } from "@/components/button"
import { Calendar } from "@/components/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover"

const props = withDefaults(
  defineProps<{
    placeholder?: string
    disabled?: boolean
    locale?: string
    class?: HTMLAttributes["class"]
  }>(),
  {
    placeholder: "Pick a date",
    locale: "en-AU",
  },
)

const model = defineModel<DateValue>()

const formatter = computed(() => new DateFormatter(props.locale, { dateStyle: "long" }))

const label = computed(() =>
  model.value ? formatter.value.format(model.value.toDate(getLocalTimeZone())) : props.placeholder,
)

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        v-bind="$attrs"
        variant="outline"
        :disabled="disabled"
        :class="
          cn(
            'w-[280px] justify-start text-left font-normal',
            !model && 'text-muted-foreground',
            props.class,
          )
        "
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{ label }}
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-auto p-0">
      <Calendar v-model="model" initial-focus />
    </PopoverContent>
  </Popover>
</template>
