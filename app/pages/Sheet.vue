<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/button"
import { Sheet, SheetContent, SheetDescription } from "@/components/sheet"
import ShadcnComponent from "@app/components/ShadcnComponent.vue"

const sheetOpen = ref(false)
</script>

<template>
  <h2 class="text-3xl">Sheet</h2>

  <ShadcnComponent />

  <Sheet :open="sheetOpen" @update:open="sheetOpen = !sheetOpen">
    <SheetContent>
      <SheetDescription>
        Dwight Schrute: "I am ready to face any challenges that might be foolish enough to face me."
      </SheetDescription>
    </SheetContent>
  </Sheet>

  <div class="mt-4 space-y-8">
    <section>
      <h2 class="text-2xl">Sheet</h2>

      <div class="mt-2 flex flex-col gap-x-2 md:flex-row">
        <Button data-cy="button" @click="sheetOpen = !sheetOpen">
          Sheet
        </Button>
      </div>
    </section>
  </div>
</template>
