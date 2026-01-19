<script setup lang="ts">
import { ButtonGroup } from "@/components/button-group"
import { Button } from "@/components/button"
</script>

<template>
  <div class="space-y-4">
    <ButtonGroup>
      <Button variant="outline">Left</Button>

      <Button variant="outline">Center</Button>

      <Button variant="outline">Right</Button>
    </ButtonGroup>

    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>

      <Button variant="outline">Middle</Button>

      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  </div>
</template>
