<script setup lang="ts">
import { Expand } from "lucide-vue-next"

import { Button } from "@/components/button"
</script>

<template>
  <div class="space-y-8">
    <div class="space-y-4">
      <h3 class="text-lg font-semibold">Basic Two Column Layout</h3>

      <p class="text-muted-foreground">
        A fixed sidebar layout with a mobile sheet for navigation. The sidebar is always visible on
        desktop (lg breakpoint and above).
      </p>

      <Button variant="outline" data-cy="basic-demo" as-child>
        <RouterLink to="/demo/two-column-layout">
          <Expand class="mr-2 h-4 w-4" />
          Fullscreen Demo
        </RouterLink>
      </Button>
    </div>

    <div class="space-y-4">
      <h3 class="text-lg font-semibold">Collapsible Two Column Layout</h3>

      <p class="text-muted-foreground">
        Enhanced version with collapsible sidebar support. Press
        <kbd class="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">⌘B</kbd>
        /
        <kbd class="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">Ctrl+B</kbd>
        to toggle the sidebar. Features include:
      </p>

      <ul class="list-inside list-disc space-y-1 text-sm text-muted-foreground">
        <li>Smooth 200ms width transition</li>

        <li>State persistence via cookies (7 days)</li>

        <li>Tooltips on menu items when collapsed</li>

        <li>Group labels auto-hide when collapsed</li>

        <li>Tailwind v3 & v4 compatible CSS variables</li>
      </ul>

      <Button variant="outline" data-cy="collapsible-demo" as-child>
        <RouterLink to="/demo/collapsible-two-column-layout">
          <Expand class="mr-2 h-4 w-4" />
          Fullscreen Demo
        </RouterLink>
      </Button>
    </div>
  </div>
</template>
