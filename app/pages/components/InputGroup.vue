<script setup lang="ts">
/* eslint-disable no-useless-escape */
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/input-group"
import { Search, Mail } from "lucide-vue-next"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@codinglabsau/gooey'
import { Mail } from 'lucide-vue-next'
<\/script>

<template>
  <InputGroup>
    <InputGroupAddon>
      <Mail class="size-4" />
    </InputGroupAddon>
    <InputGroupInput placeholder="Email address" />
  </InputGroup>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4 max-w-md space-y-4">
      <InputGroup>
        <InputGroupAddon>
          <Mail class="size-4" />
        </InputGroupAddon>

        <InputGroupInput placeholder="Email address" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>https://</InputGroupAddon>

        <InputGroupInput placeholder="example.com" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Search..." />

        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            <Search class="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
