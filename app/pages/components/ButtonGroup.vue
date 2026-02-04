<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ButtonGroup } from "@/components/button-group"
import { Button } from "@/components/button"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { ButtonGroup, Button } from '@codinglabsau/gooey'
<\/script>

<template>
  <ButtonGroup>
    <Button variant="outline">Left</Button>
    <Button variant="outline">Center</Button>
    <Button variant="outline">Right</Button>
  </ButtonGroup>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 space-y-4">
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

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
