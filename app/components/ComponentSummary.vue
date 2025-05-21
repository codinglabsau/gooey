<script setup lang="ts">
import { useRouter } from "vue-router"
import { type Component, computed } from "vue"
import { ArrowRight } from "lucide-vue-next"
import { Button } from "@/components/button"
import { Heading } from "@"
import ShadcnLogo from "@app/components/ShadcnLogo.vue"
import CodingLabsLogo from "@app/components/CodingLabsLogo.vue"
import { type Meta } from "@app/types/globals"

const props = defineProps<{
  meta: Meta
}>()

const router = useRouter()
const currentRoute = computed(() => router.currentRoute)
const shadcnRoute = computed(() => {
  return props.meta.shadcn === true
    ? `${currentRoute.value.value.path}`
    : `/components/${props.meta.shadcn}`
})
</script>

<template>
  <div>
    <Heading as="h1">
      <div class="flex items-center gap-x-2">
        <CodingLabsLogo v-if="!meta.shadcn" class="size-8" />

        <ShadcnLogo v-if="meta.shadcn" class="size-8" />
        {{ currentRoute.value.name }}
      </div>
    </Heading>

    <h2 class="mt-4 text-2xl font-bold tracking-tight">
      {{ currentRoute.value.name }} is a
      <template v-if="meta.shadcn">
        <span v-if="meta.modified" class="italic">modified</span> Shadcn-vue component.
      </template>

      <template v-else>
        custom component.
      </template>
    </h2>

    <template v-if="meta.shadcn">
      <p class="mt-6 text-lg leading-8 text-card-foreground">
      <span v-if="meta.modified">
        This component is imported from Shadcn Vue
        <span class="italic">with</span> modifications.
      </span>

        <span v-else> This component is imported from Shadcn Vue without modification. </span>
      </p>

      <div class="mt-10 flex items-center gap-x-6">
        <Button as-child>
          <a :href="`https://www.shadcn-vue.com/docs${shadcnRoute}`" target="__blank">
            See Shadcn Vue Docs
          </a>

          <ArrowRight />
        </Button>
      </div>
    </template>
  </div>
</template>
