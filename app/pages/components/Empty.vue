<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { ArrowUpRightIcon, FolderCode } from "lucide-vue-next"
import { Button } from "@/components/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/empty"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { FolderCode } from 'lucide-vue-next'
import {
  Button, Empty, EmptyContent, EmptyDescription,
  EmptyHeader, EmptyMedia, EmptyTitle,
} from '@codinglabsau/gooey'
<\/script>

<template>
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <FolderCode />
      </EmptyMedia>
      <EmptyTitle>No Projects Yet</EmptyTitle>
      <EmptyDescription>Get started by creating your first project.</EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button>Create Project</Button>
    </EmptyContent>
  </Empty>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FolderCode />
          </EmptyMedia>

          <EmptyTitle>No Projects Yet</EmptyTitle>

          <EmptyDescription>
            You haven't created any projects yet. Get started by creating your first project.
          </EmptyDescription>
        </EmptyHeader>

        <EmptyContent>
          <div class="flex gap-2">
            <Button>Create Project</Button>

            <Button variant="outline"> Import Project </Button>
          </div>
        </EmptyContent>

        <Button variant="link" as-child class="text-muted-foreground" size="sm">
          <a href="#"> Learn More <ArrowUpRightIcon /> </a>
        </Button>
      </Empty>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
