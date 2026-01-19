<script setup lang="ts">
import { Kbd, KbdGroup } from "@/components/kbd"
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center gap-2">
      <span class="text-sm text-muted-foreground">Copy:</span>

      <KbdGroup>
        <Kbd>Cmd</Kbd>

        <Kbd>C</Kbd>
      </KbdGroup>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm text-muted-foreground">Paste:</span>

      <KbdGroup>
        <Kbd>Cmd</Kbd>

        <Kbd>V</Kbd>
      </KbdGroup>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm text-muted-foreground">Save:</span>

      <KbdGroup>
        <Kbd>Cmd</Kbd>

        <Kbd>S</Kbd>
      </KbdGroup>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm text-muted-foreground">Single key:</span>

      <Kbd>Esc</Kbd>
    </div>
  </div>
</template>
