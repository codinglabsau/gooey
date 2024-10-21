<script setup lang="ts">
import { Button } from "@/components/button"
import { Heading } from "@/components/heading"
</script>

<template>
  <div class="space-y-12">
    <Heading data-cy="default">
      Default
    </Heading>

    <Heading data-cy="h1" as="h1">
      Heading 1
    </Heading>

    <Heading data-cy="actions">
      Actions

      <template #actions>
        <Button>Do the thing</Button>
      </template>
    </Heading>
  </div>
</template>
