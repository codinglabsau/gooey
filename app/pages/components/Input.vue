<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { Input } from "@/components/input"
import { CodeBlock, ComponentHeading } from "@app/components"

const date = ref("")
const datetime = ref("")

const code = `<script setup lang="ts">
import { Input } from '@codinglabsau/gooey'
<\/script>

<template>
  <Input placeholder="Enter text..." />
</template>`

const typeCode = `<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@codinglabsau/gooey'

const date = ref('')
const datetime = ref('')
<\/script>

<template>
  <!-- Input never binds \`type\` itself — it falls through to the
       native <input> via Vue attribute fallthrough (inheritAttrs). -->
  <Input type="date" v-model="date" />
  <Input type="datetime-local" v-model="datetime" />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Input data-cy="input" />
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />

    <ComponentHeading class="mt-10">Input Type</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      <code>Input</code> does not declare a <code>type</code> prop. Any native attribute you pass —
      <code>type</code>, <code>min</code>, <code>step</code>, <code>autocomplete</code> and so on —
      falls through to the underlying <code>&lt;input&gt;</code> via Vue's attribute fallthrough, and
      works alongside <code>v-model</code>.
    </p>

    <div class="mt-4 flex flex-col gap-4">
      <div class="flex items-center gap-4">
        <Input type="date" v-model="date" data-cy="input-date" />
        <span v-if="date" class="text-sm text-muted-foreground" data-cy="date-value">
          Selected: {{ date }}
        </span>
      </div>

      <div class="flex items-center gap-4">
        <Input type="datetime-local" v-model="datetime" data-cy="input-datetime" />
        <span v-if="datetime" class="text-sm text-muted-foreground" data-cy="datetime-value">
          Selected: {{ datetime }}
        </span>
      </div>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="typeCode" />
  </div>
</template>
