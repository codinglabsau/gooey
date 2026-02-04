<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Skeleton } from "@/components/skeleton"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { Skeleton } from '@codinglabsau/gooey'
<\/script>

<template>
  <div class="flex items-center space-x-4">
    <Skeleton class="h-12 w-12 rounded-full" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-[250px]" />
      <Skeleton class="h-4 w-[200px]" />
    </div>
  </div>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <div class="flex items-center space-x-4">
        <Skeleton class="h-12 w-12 rounded-full" />

        <div class="space-y-2">
          <Skeleton class="h-4 w-[250px]" />

          <Skeleton class="h-4 w-[200px]" />
        </div>
      </div>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
