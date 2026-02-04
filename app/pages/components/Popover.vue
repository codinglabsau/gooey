<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover"
import { Button } from "@/components/button"
import { Label } from "@/components/label"
import { Input } from "@/components/input"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from '@codinglabsau/gooey'
<\/script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline">Open popover</Button>
    </PopoverTrigger>
    <PopoverContent class="w-80">
      <p>Popover content goes here.</p>
    </PopoverContent>
  </Popover>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline"> Open popover </Button>
        </PopoverTrigger>

        <PopoverContent class="w-80">
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="leading-none font-medium">Dimensions</h4>

              <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
            </div>

            <div class="grid gap-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="width">Width</Label>

                <Input id="width" type="text" default-value="100%" class="col-span-2 h-8" />
              </div>

              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="maxWidth">Max. width</Label>

                <Input id="maxWidth" type="text" default-value="300px" class="col-span-2 h-8" />
              </div>

              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="height">Height</Label>

                <Input id="height" type="text" default-value="25px" class="col-span-2 h-8" />
              </div>

              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="maxHeight">Max. height</Label>

                <Input id="maxHeight" type="text" default-value="none" class="col-span-2 h-8" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
