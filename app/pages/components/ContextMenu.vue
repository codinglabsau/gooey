<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/context-menu"
import { ComponentHeading } from "@app/components"
</script>

<template>
  <div class="space-y-8">
    <div>
      <ComponentHeading>Default</ComponentHeading>

      <div class="mt-4">
        <ContextMenu data-cy="context-menu">
          <ContextMenuTrigger
            class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
          >
            Right click here
          </ContextMenuTrigger>

          <ContextMenuContent class="w-64">
            <ContextMenuItem>
              Back
              <ContextMenuShortcut>Cmd+[</ContextMenuShortcut>
            </ContextMenuItem>

            <ContextMenuItem disabled>
              Forward
              <ContextMenuShortcut>Cmd+]</ContextMenuShortcut>
            </ContextMenuItem>

            <ContextMenuItem>
              Reload
              <ContextMenuShortcut>Cmd+R</ContextMenuShortcut>
            </ContextMenuItem>

            <ContextMenuSub>
              <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>

              <ContextMenuSubContent class="w-48">
                <ContextMenuItem>
                  Save Page As...
                  <ContextMenuShortcut>Cmd+S</ContextMenuShortcut>
                </ContextMenuItem>

                <ContextMenuItem>Create Shortcut...</ContextMenuItem>

                <ContextMenuItem>Name Window...</ContextMenuItem>

                <ContextMenuSeparator />

                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>

            <ContextMenuSeparator />

            <ContextMenuItem>
              View Page Source
              <ContextMenuShortcut>Cmd+U</ContextMenuShortcut>
            </ContextMenuItem>

            <ContextMenuItem>Inspect</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </div>
  </div>
</template>
