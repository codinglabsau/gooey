<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Spinner } from "@/components/spinner"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { Spinner } from '@codinglabsau/gooey'
<\/script>

<template>
  <Spinner class="size-6" />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Sizes</ComponentHeading>

    <div class="mt-4 flex items-center gap-6">
      <div class="flex flex-col items-center gap-2">
        <Spinner class="size-4" />

        <span class="text-xs text-muted-foreground">Small</span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <Spinner class="size-6" />

        <span class="text-xs text-muted-foreground">Default</span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <Spinner class="size-8" />

        <span class="text-xs text-muted-foreground">Large</span>
      </div>

      <div class="flex flex-col items-center gap-2">
        <Spinner class="size-12" />

        <span class="text-xs text-muted-foreground">Extra Large</span>
      </div>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
