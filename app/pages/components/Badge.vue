<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Badge } from "@/components/badge"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { Badge } from '@codinglabsau/gooey'
<\/script>

<template>
  <div class="flex gap-2">
    <Badge>Badge</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
  </div>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Variants</ComponentHeading>

    <div class="mt-4 flex gap-2">
      <Badge data-cy="badge"> Badge </Badge>

      <Badge data-cy="badge-secondary" variant="secondary"> Secondary Badge </Badge>

      <Badge data-cy="badge-destructive" variant="destructive"> Destructive Badge </Badge>

      <Badge data-cy="badge-outline" variant="outline"> Outline Badge </Badge>

      <Badge data-cy="badge-success" variant="success"> Success Badge </Badge>

      <Badge data-cy="badge-warning" variant="warning"> Warning Badge </Badge>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
