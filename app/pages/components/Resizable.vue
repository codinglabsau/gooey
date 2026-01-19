<script setup lang="ts">
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/resizable"
</script>

<template>
  <div class="h-[200px] max-w-md">
    <ResizablePanelGroup direction="horizontal" class="rounded-lg border">
      <ResizablePanel :default-size="50">
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">One</span>
        </div>
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel :default-size="50">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel :default-size="50">
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Two</span>
            </div>
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel :default-size="50">
            <div class="flex h-full items-center justify-center p-6">
              <span class="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>
