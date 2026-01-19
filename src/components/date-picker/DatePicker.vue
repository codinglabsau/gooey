<script setup lang="ts">
import type { DateValue } from "@internationalized/date"
import type { HTMLAttributes } from "vue"
import { getLocalTimeZone, today } from "@internationalized/date"
import { CalendarIcon } from "lucide-vue-next"
import { computed } from "vue"
import { Button } from "@/components/button"
import { Calendar } from "@/components/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover"
import { cn } from "@/lib/utils"

const props = withDefaults(
  defineProps<{
    placeholder?: string
    disabled?: boolean
    class?: HTMLAttributes["class"]
  }>(),
  {
    placeholder: "Pick a date",
    disabled: false,
  }
)

const modelValue = defineModel<DateValue | undefined>()

const defaultPlaceholder = today(getLocalTimeZone())

const displayValue = computed(() => {
  if (!modelValue.value) return props.placeholder
  return modelValue.value.toString()
})
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :disabled="disabled"
        :class="
          cn(
            'w-[280px] justify-start text-left font-normal',
            !modelValue && 'text-muted-foreground',
            props.class
          )
        "
      >
        <CalendarIcon class="mr-2 size-4" />
        {{ displayValue }}
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-auto p-0">
      <Calendar
        v-model="modelValue"
        :initial-focus="true"
        :default-placeholder="defaultPlaceholder"
      />
    </PopoverContent>
  </Popover>
</template>
