<script setup lang="ts">
import { Expand } from "lucide-vue-next"

import { Button } from "@/components/button"
</script>

<template>
  <Button variant="outline" data-cy="button" as-child>
    <RouterLink to="/demo/single-column-layout">
      <Expand class="mr-2 h-4 w-4" />
      Fullscreen
    </RouterLink>
  </Button>
</template>
