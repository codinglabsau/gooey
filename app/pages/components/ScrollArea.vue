<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ScrollArea } from "@/components/scroll-area"
import { Separator } from "@/components/separator"
import { CodeBlock, ComponentHeading } from "@app/components"

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

const code = `<script setup lang="ts">
import { ScrollArea, Separator } from '@codinglabsau/gooey'

const tags = Array.from({ length: 50 }).map((_, i, a) => \`v1.2.0-beta.\${a.length - i}\`)
<\/script>

<template>
  <ScrollArea class="h-72 w-48 rounded-md border">
    <div class="p-4">
      <h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
      <div v-for="tag in tags" :key="tag">
        <div class="text-sm">{{ tag }}</div>
        <Separator class="my-2" />
      </div>
    </div>
  </ScrollArea>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <ScrollArea class="h-72 w-48 rounded-md border">
        <div class="p-4">
          <h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>

          <div v-for="tag in tags" :key="tag">
            <div class="text-sm">
              {{ tag }}
            </div>

            <Separator class="my-2" />
          </div>
        </div>
      </ScrollArea>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
