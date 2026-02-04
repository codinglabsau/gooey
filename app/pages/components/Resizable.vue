<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/resizable"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@codinglabsau/gooey'
<\/script>

<template>
  <ResizablePanelGroup direction="horizontal" class="rounded-lg border">
    <ResizablePanel :default-size="50">
      <div class="flex h-full items-center justify-center p-6">
        <span class="font-semibold">One</span>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel :default-size="50">
      <div class="flex h-full items-center justify-center p-6">
        <span class="font-semibold">Two</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 h-[200px] max-w-md">
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

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
