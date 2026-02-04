<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Button } from "@/components/button"
import { Heading } from "@/components/heading"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { Heading, Button } from '@codinglabsau/gooey'
<\/script>

<template>
  <Heading>Default</Heading>

  <Heading as="h1">Heading 1</Heading>

  <Heading>
    Actions
    <template #actions>
      <Button>Do the thing</Button>
    </template>
  </Heading>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 space-y-12">
      <Heading data-cy="default"> Default </Heading>

      <Heading data-cy="h1" as="h1"> Heading 1 </Heading>

      <Heading data-cy="actions">
        Actions

        <template #actions>
          <Button>Do the thing</Button>
        </template>
      </Heading>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
