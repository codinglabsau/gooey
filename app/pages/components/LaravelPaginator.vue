<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ref } from "vue"
import { LaravelPaginator } from "@/components/laravel-paginator"
import { CodeBlock, ComponentHeading } from "@app/components"

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

const setupCode = `import { gooey } from '@codinglabsau/gooey'
import { Link } from '@inertiajs/vue3'

app.use(gooey, { link: Link })`

const basicCode = `<script setup lang="ts">
import { LaravelPaginator } from '@codinglabsau/gooey'
<\/script>

<template>
  <LaravelPaginator :paginator="users" />
</template>`

const cursorCode = `<!-- Works with CursorPaginator too — auto-detected -->
<LaravelPaginator :paginator="cursorPaginatedUsers" />`
</script>

<template>
  <div>
    <ComponentHeading>Plugin Setup (optional)</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      Configure a link component once at app setup. Falls back to plain
      <code class="text-xs">&lt;a&gt;</code> tags if not configured.
    </p>

    <CodeBlock class="mt-4" lang="ts" :code="setupCode" />

    <ComponentHeading class="mt-10">LengthAwarePaginator</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      Standard Laravel paginator with numbered page links. Shows "Showing X to Y of Z results" on
      desktop, simple prev/next on mobile.
    </p>

    <div class="mt-4 rounded-lg border p-4" data-cy="length-aware">
      <LaravelPaginator :paginator="lengthAwarePaginator" />
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="basicCode" />

    <ComponentHeading class="mt-10">CursorPaginator</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      Cursor-based pagination with previous/next navigation only.
    </p>

    <div class="mt-4 rounded-lg border p-4" data-cy="cursor">
      <LaravelPaginator :paginator="cursorPaginator" />
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="cursorCode" />

    <ComponentHeading class="mt-10">Empty State</ComponentHeading>

    <p class="mt-2 text-sm text-muted-foreground">
      When there are no results, navigation is disabled gracefully.
    </p>

    <div class="mt-4 rounded-lg border p-4" data-cy="empty">
      <LaravelPaginator :paginator="emptyPaginator" />
    </div>
  </div>
</template>
