<script setup lang="ts">
import { Terminal, AlertCircle } from "lucide-vue-next"
import { Alert, AlertTitle, AlertDescription } from "@/components/alert"
import { ComponentHeading } from "@app/components"
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
    </div>
  </div>
</template>
