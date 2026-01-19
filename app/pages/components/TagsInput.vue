<script setup lang="ts">
import { ref } from "vue"
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/tags-input"

const value = ref(["Vue", "TypeScript"])
</script>

<template>
  <div class="max-w-md space-y-4">
    <TagsInput v-model="value">
      <TagsInputItem v-for="item in value" :key="item" :value="item">
        <TagsInputItemText />

        <TagsInputItemDelete />
      </TagsInputItem>

      <TagsInputInput placeholder="Add tag..." />
    </TagsInput>

    <p class="text-sm text-muted-foreground">Tags: {{ value.join(", ") || "None" }}</p>
  </div>
</template>
