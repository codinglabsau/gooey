<script setup lang="ts">
import { useRouter } from "vue-router"
import { computed } from "vue"
import { ArrowRight } from "lucide-vue-next"
import { Button } from "@/components/button"

const router = useRouter()
const currentRoute = computed(() => router.currentRoute)
</script>

<template>
  <div class="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8">
    <div
      class="relative isolate overflow-hidden bg-card px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
    >
      <h2 class="mx-auto text-3xl font-bold tracking-tight sm:text-4xl">
        {{ currentRoute.value.name }} is a Shadcn-vue component.
      </h2>

      <p class="mx-auto mt-6 text-lg leading-8 text-card-foreground">
        This component is imported directly from Shadcn Vue without modification.
      </p>

      <div class="mt-10 flex items-center justify-center gap-x-6">
        <Button
          :href="`https://www.shadcn-vue.com/docs${currentRoute.value.path}.html`"
          target="__blank"
          class="bg-foreground text-muted"
        >
          See Shadcn Vue Docs
          <ArrowRight />
        </Button>
      </div>
    </div>
  </div>
</template>
