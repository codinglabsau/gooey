<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-vue-next"
import { buttonVariants } from "@/components/button"
import { cn } from "@/lib/utils"
import GooeyLink from "@/components/gooey-link/GooeyLink.vue"

defineProps<{
  paginator: Paginator<unknown>
}>()
</script>

<template>
  <nav role="navigation" aria-label="Pagination" class="flex w-full items-center justify-between">
    <!-- Mobile: simple prev/next -->
    <div class="flex flex-1 justify-between sm:hidden">
      <component
        :is="paginator.prev_page_url ? GooeyLink : 'span'"
        :href="paginator.prev_page_url ?? undefined"
        :class="
          cn(
            buttonVariants({ variant: 'outline', size: 'sm' }),
            !paginator.prev_page_url && 'pointer-events-none opacity-50',
          )
        "
      >
        Previous
      </component>

      <component
        :is="paginator.next_page_url ? GooeyLink : 'span'"
        :href="paginator.next_page_url ?? undefined"
        :class="
          cn(
            buttonVariants({ variant: 'outline', size: 'sm' }),
            !paginator.next_page_url && 'pointer-events-none opacity-50',
          )
        "
      >
        Next
      </component>
    </div>

    <!-- Desktop: full pagination -->
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <p class="text-sm text-muted-foreground">
        Showing <span class="font-medium">{{ paginator.from ?? 0 }}</span>
        to
        <span class="font-medium">{{ paginator.to ?? 0 }}</span>
        of
        <span class="font-medium">{{ paginator.total }}</span> results
      </p>

      <div class="flex items-center gap-1">
        <component
          :is="paginator.prev_page_url ? GooeyLink : 'span'"
          :href="paginator.prev_page_url ?? undefined"
          :class="
            cn(
              buttonVariants({ variant: 'ghost', size: 'icon-sm' }),
              !paginator.prev_page_url && 'pointer-events-none opacity-50',
            )
          "
          aria-label="Previous page"
        >
          <ChevronLeftIcon class="size-4" />
        </component>

        <template v-for="(link, index) in paginator.links" :key="index">
          <!-- Skip the first and last entries (Laravel's built-in prev/next labels) -->
          <template v-if="index !== 0 && index !== paginator.links.length - 1">
            <span
              v-if="link.label === '...'"
              :class="
                cn(buttonVariants({ variant: 'ghost', size: 'icon-sm' }), 'pointer-events-none')
              "
            >
              <MoreHorizontalIcon class="size-4" />
            </span>

            <component
              :is="link.url ? GooeyLink : 'span'"
              v-else
              :href="link.url ?? undefined"
              :class="
                cn(
                  buttonVariants({ variant: link.active ? 'outline' : 'ghost', size: 'icon-sm' }),
                  !link.url && 'pointer-events-none opacity-50',
                )
              "
              :aria-current="link.active ? 'page' : undefined"
            >
              {{ link.label }}
            </component>
          </template>
        </template>

        <component
          :is="paginator.next_page_url ? GooeyLink : 'span'"
          :href="paginator.next_page_url ?? undefined"
          :class="
            cn(
              buttonVariants({ variant: 'ghost', size: 'icon-sm' }),
              !paginator.next_page_url && 'pointer-events-none opacity-50',
            )
          "
          aria-label="Next page"
        >
          <ChevronRightIcon class="size-4" />
        </component>
      </div>
    </div>
  </nav>
</template>
