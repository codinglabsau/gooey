<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { Email } from "@/components/email"
import { CodeBlock, ComponentHeading } from "@app/components"

const value = ref<string>()

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { Email } from '@codinglabsau/gooey'

const value = ref<string>()
<\/script>

<template>
  <Email v-model="value" placeholder="you@example.com" />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      <code>Email</code>

      wraps <code>Input</code>

      with <code>type="email"</code>

      and sensible defaults (<code>inputmode</code>

      , <code>autocomplete</code>

      , <code>spellcheck</code>). Browsers will surface their built-in email validation when the
      field is submitted as part of a form.
    </p>

    <div class="mt-4 max-w-xs space-y-2">
      <Email v-model="value" placeholder="you@example.com" data-cy="basic" />

      <p v-if="value" class="text-sm text-muted-foreground" data-cy="model-value">
        Value: {{ value }}
      </p>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />

    <ComponentHeading class="mt-8">Disabled</ComponentHeading>

    <div class="mt-4 max-w-xs">
      <Email disabled placeholder="Disabled" />
    </div>
  </div>
</template>
