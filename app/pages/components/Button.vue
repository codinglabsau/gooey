<script setup lang="ts">
import { Loader2, Mail, ChevronRight } from "lucide-vue-next"
import { Button } from "@/components/button"
import { ComponentHeading } from "@app/components"
</script>

<template>
  <div class="space-y-8">
    <div>
      <ComponentHeading>Variants</ComponentHeading>

      <div class="mt-4 flex flex-wrap gap-4">
        <Button data-cy="button">Default</Button>

        <Button variant="secondary">Secondary</Button>

        <Button variant="destructive">Destructive</Button>

        <Button variant="outline">Outline</Button>

        <Button variant="ghost">Ghost</Button>

        <Button variant="link">Link</Button>
      </div>
    </div>

    <div>
      <ComponentHeading>Sizes</ComponentHeading>

      <div class="mt-4 flex flex-wrap items-center gap-4">
        <Button size="sm">Small</Button>

        <Button size="default">Default</Button>

        <Button size="lg">Large</Button>

        <Button size="icon"><Mail class="h-4 w-4" /></Button>
      </div>
    </div>

    <div>
      <ComponentHeading>With Icons</ComponentHeading>

      <div class="mt-4 flex flex-wrap gap-4">
        <Button>
          <Mail class="mr-2 h-4 w-4" />
          Login with Email
        </Button>

        <Button variant="outline">
          Next
          <ChevronRight class="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>

    <div>
      <ComponentHeading>States</ComponentHeading>

      <div class="mt-4 flex flex-wrap gap-4">
        <Button disabled>Disabled</Button>

        <Button disabled>
          <Loader2 class="mr-2 h-4 w-4 animate-spin" />
          Loading
        </Button>
      </div>
    </div>
  </div>
</template>
