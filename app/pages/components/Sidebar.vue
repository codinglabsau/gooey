<script setup lang="ts">
import { ComponentHeading } from "@app/components"
</script>

<template>
  <div class="space-y-8">
    <div>
      <ComponentHeading>Sidebar</ComponentHeading>

      <p class="mt-2 text-sm text-muted-foreground">
        The Sidebar component provides a responsive navigation sidebar with mobile support. It
        includes collapsible behavior, nested menus, and integrates with the Sheet component for
        mobile views.
      </p>

      <div class="mt-4 rounded-lg border bg-muted/50 p-6">
        <p class="text-sm text-muted-foreground">
          The Sidebar component uses fixed positioning and is designed to be used as the main
          navigation for an application. See the
          <a
            href="https://ui.shadcn.com/docs/components/sidebar"
            target="_blank"
            class="font-medium text-primary underline"
          >
            shadcn/ui sidebar documentation
          </a>
          for interactive examples and full usage details.
        </p>

        <div class="mt-4 space-y-2 text-sm">
          <p class="font-medium">Available components:</p>

          <ul class="list-inside list-disc space-y-1 text-muted-foreground">
            <li><code class="rounded bg-muted px-1">SidebarProvider</code> - Context provider</li>

            <li><code class="rounded bg-muted px-1">Sidebar</code> - Main container</li>

            <li>
              <code class="rounded bg-muted px-1">SidebarHeader</code>
,
              <code class="rounded bg-muted px-1">SidebarContent</code>
,
              <code class="rounded bg-muted px-1">SidebarFooter</code> - Layout sections
            </li>

            <li>
              <code class="rounded bg-muted px-1">SidebarGroup</code>
,
              <code class="rounded bg-muted px-1">SidebarGroupLabel</code>
,
              <code class="rounded bg-muted px-1">SidebarGroupContent</code> - Grouping
            </li>

            <li>
              <code class="rounded bg-muted px-1">SidebarMenu</code>
,
              <code class="rounded bg-muted px-1">SidebarMenuItem</code>
,
              <code class="rounded bg-muted px-1">SidebarMenuButton</code> - Navigation items
            </li>

            <li>
              <code class="rounded bg-muted px-1">SidebarTrigger</code> - Toggle button for
              collapsible behavior
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
