<script setup lang="ts">
import { ref } from "vue"
import { ToggleGroup, ToggleGroupItem } from "@/components/toggle-group"
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from "lucide-vue-next"

const alignment = ref("center")
const formatting = ref<string[]>(["bold"])
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <span class="text-sm text-muted-foreground">Single selection:</span>

      <ToggleGroup v-model="alignment" type="single">
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft class="size-4" />
        </ToggleGroupItem>

        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter class="size-4" />
        </ToggleGroupItem>

        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight class="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>

    <div class="space-y-2">
      <span class="text-sm text-muted-foreground">Multiple selection:</span>

      <ToggleGroup v-model="formatting" type="multiple" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold class="size-4" />
        </ToggleGroupItem>

        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic class="size-4" />
        </ToggleGroupItem>

        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline class="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  </div>
</template>
