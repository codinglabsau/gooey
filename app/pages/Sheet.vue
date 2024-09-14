<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/button"
import { Sheet, SheetContent, SheetDescription } from "@/components/sheet"

const sheetOpen = ref(false)
</script>

<template>
  <Sheet :open="sheetOpen" @update:open="sheetOpen = !sheetOpen">
    <SheetContent>
      <SheetDescription>
        Dwight Schrute: "I am ready to face any challenges that might be foolish enough to face me."
      </SheetDescription>
    </SheetContent>
  </Sheet>

  <section>
    <Button data-cy="button" @click="sheetOpen = !sheetOpen">
      Sheet
    </Button>
  </section>
</template>
