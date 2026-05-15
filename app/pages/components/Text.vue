<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { Text } from "@/components/text"
import { CodeBlock, ComponentHeading } from "@app/components"

const value = ref<string>()

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { Text } from '@codinglabsau/gooey'

const value = ref<string>()
<\/script>

<template>
  <Text v-model="value" placeholder="Enter your name" />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      <code>Text</code>

      is a thin wrapper around <code>Input</code>

      with <code>type="text"</code>
      baked in. It exists so form schemas can declare semantic intent without the
      <code>type</code> prop.
    </p>

    <div class="mt-4 max-w-xs space-y-2">
      <Text v-model="value" placeholder="Enter your name" data-cy="basic" />

      <p v-if="value" class="text-sm text-muted-foreground" data-cy="model-value">
        Value: {{ value }}
      </p>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />

    <ComponentHeading class="mt-8">Disabled</ComponentHeading>

    <div class="mt-4 max-w-xs">
      <Text disabled placeholder="Disabled" />
    </div>
  </div>
</template>
