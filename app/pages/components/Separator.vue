<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Separator } from "@/components/separator"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { Separator } from '@codinglabsau/gooey'
<\/script>

<template>
  <div>
    <div class="space-y-1">
      <h4 class="text-sm leading-none font-medium">Gooey UI</h4>
      <p class="text-sm text-muted-foreground">An open-source UI component library.</p>
    </div>
    <Separator class="my-4" />
    <div class="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </div>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <div class="space-y-1">
        <h4 class="text-sm leading-none font-medium">Gooey UI</h4>

        <p class="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>

      <Separator class="my-4" />

      <div class="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>

        <Separator orientation="vertical" />

        <div>Docs</div>

        <Separator orientation="vertical" />

        <div>Source</div>
      </div>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
