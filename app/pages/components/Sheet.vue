<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { Button } from "@/components/button"
import { Sheet, SheetContent, SheetDescription } from "@/components/sheet"
import { CodeBlock, ComponentHeading } from "@app/components"

const sheetOpen = ref(false)

const code = `<script setup lang="ts">
import { ref } from 'vue'
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
} from '@codinglabsau/gooey'

const open = ref(false)
<\/script>

<template>
  <Sheet :open="open" @update:open="open = !open">
    <SheetContent>
      <SheetDescription>Sheet content goes here.</SheetDescription>
    </SheetContent>
  </Sheet>

  <Button @click="open = !open">Open Sheet</Button>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <Sheet :open="sheetOpen" @update:open="sheetOpen = !sheetOpen">
      <SheetContent>
        <SheetDescription>
          Dwight Schrute: "I am ready to face any challenges that might be foolish enough to face
          me."
        </SheetDescription>
      </SheetContent>
    </Sheet>

    <div class="mt-4">
      <Button data-cy="button" @click="sheetOpen = !sheetOpen"> Sheet </Button>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
