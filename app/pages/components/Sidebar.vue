<script setup lang="ts">
import { Home, Settings, User, ChevronDown } from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/sidebar"
import { ComponentHeading } from "@app/components"
</script>

<template>
  <div class="space-y-8">
    <div>
      <ComponentHeading>Default</ComponentHeading>

      <p class="mt-2 text-sm text-muted-foreground">
        The Sidebar component provides a responsive navigation sidebar with mobile support. It
        includes collapsible behavior, nested menus, and integrates with the Sheet component for
        mobile views.
      </p>

      <div class="relative mt-4 h-[400px] overflow-hidden rounded-lg border">
        <SidebarProvider data-cy="sidebar" class="!min-h-0">
          <Sidebar collapsible="none">
            <SidebarHeader class="border-b p-4">
              <div class="font-semibold">My App</div>
            </SidebarHeader>

            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>

                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Home class="h-4 w-4" />

                        <span>Home</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <User class="h-4 w-4" />

                        <span>Profile</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Settings class="h-4 w-4" />

                        <span>Settings</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter class="border-t p-4">
              <div class="text-xs text-muted-foreground">v1.0.0</div>
            </SidebarFooter>
          </Sidebar>

          <SidebarInset>
            <div class="flex h-full items-center justify-center p-8">
              <div class="text-center">
                <p class="text-muted-foreground">Main content area</p>

                <SidebarTrigger class="mt-4" />
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  </div>
</template>
