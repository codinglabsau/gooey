<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/tags-input"
import { CodeBlock, ComponentHeading } from "@app/components"

const value = ref(["Vue", "TypeScript"])

const code = `<script setup lang="ts">
import { ref } from 'vue'
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from '@codinglabsau/gooey'

const value = ref(['Vue', 'TypeScript'])
<\/script>

<template>
  <TagsInput v-model="value">
    <TagsInputItem v-for="item in value" :key="item" :value="item">
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>
    <TagsInputInput placeholder="Add tag..." />
  </TagsInput>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 max-w-md space-y-4">
      <TagsInput v-model="value">
        <TagsInputItem v-for="item in value" :key="item" :value="item">
          <TagsInputItemText />

          <TagsInputItemDelete />
        </TagsInputItem>

        <TagsInputInput placeholder="Add tag..." />
      </TagsInput>

      <p class="text-sm text-muted-foreground">Tags: {{ value.join(", ") || "None" }}</p>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
