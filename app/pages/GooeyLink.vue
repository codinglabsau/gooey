<script setup lang="ts">
import { useRouter } from "vue-router"
import { GooeyLink } from "@/components/gooey-link"
import { Button } from "@/components/button"

const router = useRouter()
</script>

<template>
  <div class="space-y-12">
    <section>
      <h2 class="text-2xl">Vue RouterLink example</h2>

      <div class="mt-2 flex flex-col gap-x-2 md:flex-row">
        <Button as-child>
          <GooeyLink :to="$route.path + '?router-link=true'" data-cy="router-link">
            Reload this page
          </GooeyLink>
        </Button>

        <Button as-child>
          <GooeyLink :to="{ name: 'Notification' }">
            Navigate away
          </GooeyLink>
        </Button>
      </div>
    </section>
  </div>
</template>
