<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Terminal, AlertCircle } from "lucide-vue-next"
import { Alert, AlertTitle, AlertDescription } from "@/components/alert"
import { CodeBlock, ComponentHeading } from "@app/components"

const defaultCode = `<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@codinglabsau/gooey'
import { Terminal } from 'lucide-vue-next'
<\/script>

<template>
  <Alert>
    <Terminal class="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>You can add components to your app using the cli.</AlertDescription>
  </Alert>
</template>`

const destructiveCode = `<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@codinglabsau/gooey'
import { AlertCircle } from 'lucide-vue-next'
<\/script>

<template>
  <Alert variant="destructive">
    <AlertCircle class="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
  </Alert>
</template>`
</script>

<template>
  <div class="space-y-8">
    <div>
      <ComponentHeading>Default</ComponentHeading>

      <div class="mt-4">
        <Alert data-cy="alert">
          <Terminal class="h-4 w-4" />

          <AlertTitle>Heads up!</AlertTitle>

          <AlertDescription> You can add components to your app using the cli. </AlertDescription>
        </Alert>
      </div>

      <CodeBlock class="mt-4" lang="vue" :code="defaultCode" />
    </div>

    <div>
      <ComponentHeading>Destructive</ComponentHeading>

      <div class="mt-4">
        <Alert variant="destructive">
          <AlertCircle class="h-4 w-4" />

          <AlertTitle>Error</AlertTitle>

          <AlertDescription> Your session has expired. Please log in again. </AlertDescription>
        </Alert>
      </div>

      <CodeBlock class="mt-4" lang="vue" :code="destructiveCode" />
    </div>
  </div>
</template>
