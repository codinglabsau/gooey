<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { Textarea } from "@/components/textarea"
import { CodeBlock, ComponentHeading } from "@app/components"

const message = ref("")

const code = `<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@codinglabsau/gooey'

const message = ref('')
<\/script>

<template>
  <Textarea v-model="message" placeholder="Type your message here..." />
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 space-y-8">
      <div class="space-y-2">
        <h3 class="text-sm font-medium">Default</h3>

        <Textarea v-model="message" placeholder="Type your message here..." />

        <p class="text-sm text-muted-foreground">Value: {{ message || "(empty)" }}</p>
      </div>

      <div class="space-y-2">
        <h3 class="text-sm font-medium">Disabled</h3>

        <Textarea placeholder="Disabled textarea" disabled />
      </div>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
