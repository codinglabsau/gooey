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
  <div>
    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
      {{ currentRoute.value.name }} is a <span v-if="modified" class="underline">modified</span> Shadcn-vue component.
    </h2>

    <p class="mt-6 text-lg leading-8 text-card-foreground">
        <span v-if="modified">
          This component is imported from Shadcn Vue <span class="underline">with</span> modifications.
        </span>

      <span v-else>
          This component is imported from Shadcn Vue without modification.
        </span>
    </p>

    <div class="mt-10 flex items-center gap-x-6">
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
</template>
