<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Input } from "@/components/input"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { Input } from '@codinglabsau/gooey'
<\/script>

<template>
  <Input placeholder="Enter text..." />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Input data-cy="input" />
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
