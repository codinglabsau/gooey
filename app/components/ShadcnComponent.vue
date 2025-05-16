<script setup lang="ts">
import { useRouter } from "vue-router"
import { computed } from "vue"
import { ArrowRight } from "lucide-vue-next"
import { Button } from "@/components/button"

withDefaults(
  defineProps<{
    modified: boolean,
  }>(), {
    modified: false
  }
)

const router = useRouter()
const currentRoute = computed(() => router.currentRoute)

</script>

<template>
  <div class="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8">
    <div
      class="relative isolate overflow-hidden bg-card px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
    >
      <h2 class="mx-auto text-3xl font-bold tracking-tight sm:text-4xl">
        {{ currentRoute.value.name }} is a <span v-if="modified" class="underline">modified</span> Shadcn-vue component.
      </h2>

      <p class="mx-auto mt-6 text-lg leading-8 text-card-foreground">
        <span v-if="modified">
          This component is imported from Shadcn Vue <span class="underline">with</span> modification.
        </span>

        <span v-else>
          This component is imported from Shadcn Vue without modification.
        </span>
      </p>

      <div class="mt-10 flex items-center justify-center gap-x-6">
        <Button as-child>
          <a
            :href="`https://www.shadcn-vue.com/docs${currentRoute.value.path}`"
            target="__blank"
          >
            See Shadcn Vue Docs
          </a>

          <ArrowRight />
        </Button>
      </div>
    </div>
  </div>
</template>
