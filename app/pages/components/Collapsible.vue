<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ChevronsUpDown } from "lucide-vue-next"
import { ref } from "vue"

import { Button } from "@/components/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/collapsible"
import { CodeBlock, ComponentHeading } from "@app/components"

const isOpen = ref(false)

const code = `<script setup lang="ts">
import { ref } from 'vue'
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@codinglabsau/gooey'

const isOpen = ref(false)
<\/script>

<template>
  <Collapsible v-model:open="isOpen" class="w-[350px] space-y-2">
    <div class="flex items-center justify-between space-x-4 px-4">
      <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
      <CollapsibleTrigger as-child>
        <Button variant="ghost" size="sm">Toggle</Button>
      </CollapsibleTrigger>
    </div>
    <div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
    <CollapsibleContent class="space-y-2">
      <div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
      <div class="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
    </CollapsibleContent>
  </Collapsible>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Collapsible v-model:open="isOpen" class="w-[350px] space-y-2">
        <div class="flex items-center justify-between space-x-4 px-4">
          <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>

          <CollapsibleTrigger as-child>
            <Button variant="ghost" size="sm" class="w-9 p-0">
              <ChevronsUpDown class="h-4 w-4" />

              <span class="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>

        <CollapsibleContent class="space-y-2">
          <div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>

          <div class="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
        </CollapsibleContent>
      </Collapsible>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
