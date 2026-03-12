<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { LaravelPaginator } from "@/components/laravel-paginator"
import { CodeBlock, ComponentHeading, ComponentProps } from "@app/components"
import { type ComponentProp } from "@app/types/globals"

const componentProps: ComponentProp[] = [
  {
    name: "paginator",
    type: ["Paginator<T>", "CursorPaginatorResponse<T>"],
    description:
      "A Laravel paginated response. Accepts both LengthAwarePaginator and CursorPaginator JSON shapes. The component auto-detects which type was provided.",
  },
]

const lengthAwarePaginator = ref<Paginator<{ id: number; name: string }>>({
  current_page: 3,
  first_page_url: "/users?page=1",
  from: 21,
  last_page: 10,
  last_page_url: "/users?page=10",
  next_page_url: "/users?page=4",
  path: "/users",
  per_page: 10,
  prev_page_url: "/users?page=2",
  to: 30,
  total: 100,
  links: [
    { url: "/users?page=2", label: "&laquo; Previous", active: false },
    { url: "/users?page=1", label: "1", active: false },
    { url: "/users?page=2", label: "2", active: false },
    { url: "/users?page=3", label: "3", active: true },
    { url: "/users?page=4", label: "4", active: false },
    { url: "/users?page=5", label: "5", active: false },
    { url: null, label: "...", active: false },
    { url: "/users?page=10", label: "10", active: false },
    { url: "/users?page=4", label: "Next &raquo;", active: false },
  ],
  data: [],
})

const cursorPaginator = ref<CursorPaginatorResponse<{ id: number; name: string }>>({
  path: "/users",
  per_page: 10,
  next_cursor: "eyJpZCI6MTB9",
  prev_cursor: "eyJpZCI6MX0",
  next_page_url: "/users?cursor=eyJpZCI6MTB9",
  prev_page_url: "/users?cursor=eyJpZCI6MX0",
  data: [],
})

const emptyPaginator = ref<Paginator<never>>({
  current_page: 1,
  first_page_url: "/users?page=1",
  from: null,
  last_page: 1,
  last_page_url: "/users?page=1",
  next_page_url: null,
  path: "/users",
  per_page: 10,
  prev_page_url: null,
  to: null,
  total: 0,
  links: [
    { url: null, label: "&laquo; Previous", active: false },
    { url: "/users?page=1", label: "1", active: true },
    { url: null, label: "Next &raquo;", active: false },
  ],
  data: [],
})

const inertiaSetupCode = `import { gooey } from '@codinglabsau/gooey'
import { Link } from '@inertiajs/vue3'

app.use(gooey, { link: Link })`

const nuxtSetupCode = `import { gooey } from '@codinglabsau/gooey'
import { NuxtLink } from '#components'

app.use(gooey, { link: NuxtLink })`

const basicCode = `<script setup lang="ts">
import { LaravelPaginator } from '@codinglabsau/gooey'

// Pass any Laravel paginated response directly
const props = defineProps<{
  users: Paginator<User>
}>()
<\/script>

<template>
  <LaravelPaginator :paginator="users" />
</template>`

const cursorCode = `<script setup lang="ts">
import { LaravelPaginator } from '@codinglabsau/gooey'

// Works with CursorPaginator too — auto-detected
const props = defineProps<{
  users: CursorPaginatorResponse<User>
}>()
<\/script>

<template>
  <LaravelPaginator :paginator="users" />
</template>`
</script>

<template>
  <div class="space-y-8">
    <section>
      <ComponentHeading>Description</ComponentHeading>

      <p>
        LaravelPaginator renders navigation links from a standard Laravel paginated JSON response.
        Pass the paginator prop and it handles the rest — no configuration needed.
      </p>

      <p class="mt-2">It supports both paginator types:</p>

      <ul class="mt-2 list-disc pl-6">
        <li>
          <strong>LengthAwarePaginator</strong> — numbered page links with "Showing X to Y of Z
          results" on desktop, simple prev/next on mobile
        </li>

        <li><strong>CursorPaginator</strong> — previous/next navigation only (no page numbers)</li>
      </ul>

      <p class="mt-2">
        The component auto-detects which type was provided by checking for the
        <code class="bg-muted px-1 py-0.5 font-mono text-xs">last_page</code> property.
      </p>
    </section>

    <section>
      <ComponentHeading>Plugin Setup (optional)</ComponentHeading>

      <p>
        By default, pagination links render as plain
        <code class="bg-muted px-1 py-0.5 font-mono text-xs">&lt;a&gt;</code> tags. To use your
        framework's link component (for SPA navigation without full page reloads), configure the
        Gooey plugin once at app setup:
      </p>

      <div class="mt-4 space-y-4">
        <div>
          <p class="mb-2 text-sm font-medium">Inertia.js</p>

          <CodeBlock lang="ts" :code="inertiaSetupCode" />
        </div>

        <div>
          <p class="mb-2 text-sm font-medium">Nuxt</p>

          <CodeBlock lang="ts" :code="nuxtSetupCode" />
        </div>
      </div>
    </section>

    <section>
      <ComponentHeading>LengthAwarePaginator</ComponentHeading>

      <p class="mb-4 text-sm text-muted-foreground">
        Standard Laravel paginator with numbered page links. Resize the browser to see the
        responsive layout.
      </p>

      <div class="rounded-lg border p-4" data-cy="length-aware">
        <LaravelPaginator :paginator="lengthAwarePaginator" />
      </div>

      <CodeBlock class="mt-4" lang="vue" :code="basicCode" />
    </section>

    <section>
      <ComponentHeading>CursorPaginator</ComponentHeading>

      <p class="mb-4 text-sm text-muted-foreground">
        Cursor-based pagination with previous/next navigation only.
      </p>

      <div class="rounded-lg border p-4" data-cy="cursor">
        <LaravelPaginator :paginator="cursorPaginator" />
      </div>

      <CodeBlock class="mt-4" lang="vue" :code="cursorCode" />
    </section>

    <section>
      <ComponentHeading>Empty State</ComponentHeading>

      <p class="mb-4 text-sm text-muted-foreground">
        When there are no results, navigation buttons are disabled gracefully.
      </p>

      <div class="rounded-lg border p-4" data-cy="empty">
        <LaravelPaginator :paginator="emptyPaginator" />
      </div>
    </section>

    <ComponentProps :props="componentProps" :meta="$route.meta" />
  </div>
</template>
