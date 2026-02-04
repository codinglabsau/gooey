<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Checkbox } from "@/components/checkbox"
import { Label } from "@/components/label"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { Checkbox } from '@codinglabsau/gooey'
import { Label } from '@codinglabsau/gooey'
<\/script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" />
    <Label for="terms">Accept terms and conditions</Label>
  </div>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />

        <Label for="terms">Accept terms and conditions</Label>
      </div>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
