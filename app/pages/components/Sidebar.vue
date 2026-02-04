<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarProvider, SidebarTrigger,
} from '@codinglabsau/gooey'
<\/script>

<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Dashboard</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <main>
      <SidebarTrigger />
      <!-- page content -->
    </main>
  </SidebarProvider>
</template>`
</script>

<template>
  <div class="space-y-8">
    <div>
      <ComponentHeading>Sidebar</ComponentHeading>

      <p class="mt-2 text-muted-foreground">
        A composable, themeable and customizable sidebar component. See the
        <a
          href="https://www.shadcn-vue.com/docs/components/sidebar"
          target="_blank"
          class="font-medium text-primary underline"
        >
          shadcn-vue documentation
        </a>
        for full usage details.
      </p>
    </div>

    <CodeBlock lang="vue" :code="code" />
  </div>
</template>
