<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Toggle } from "@/components/toggle"
import { Bold, Italic, Underline } from "lucide-vue-next"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { Toggle } from '@codinglabsau/gooey'
import { Bold } from 'lucide-vue-next'
<\/script>

<template>
  <Toggle aria-label="Toggle bold">
    <Bold class="size-4" />
  </Toggle>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 space-y-4">
      <div class="flex gap-2">
        <Toggle aria-label="Toggle bold">
          <Bold class="size-4" />
        </Toggle>

        <Toggle aria-label="Toggle italic">
          <Italic class="size-4" />
        </Toggle>

        <Toggle aria-label="Toggle underline">
          <Underline class="size-4" />
        </Toggle>
      </div>

      <div class="flex gap-2">
        <Toggle variant="outline" aria-label="Toggle bold">
          <Bold class="size-4" />
        </Toggle>

        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic class="size-4" />
        </Toggle>

        <Toggle variant="outline" aria-label="Toggle underline">
          <Underline class="size-4" />
        </Toggle>
      </div>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
