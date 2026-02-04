<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Label } from "@/components/label"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { Label } from '@codinglabsau/gooey'
<\/script>

<template>
  <Label>Label</Label>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Label data-cy="label"> Label </Label>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
