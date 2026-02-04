<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Kbd, KbdGroup } from "@/components/kbd"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { Kbd, KbdGroup } from '@codinglabsau/gooey'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <span class="text-sm text-muted-foreground">Copy:</span>
    <KbdGroup>
      <Kbd>Cmd</Kbd>
      <Kbd>C</Kbd>
    </KbdGroup>
  </div>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 space-y-4">
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

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
