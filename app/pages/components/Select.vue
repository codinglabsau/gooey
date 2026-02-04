<script setup lang="ts">
/* eslint-disable no-useless-escape */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/select"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import {
  Select, SelectContent, SelectGroup, SelectItem,
  SelectLabel, SelectTrigger, SelectValue,
} from '@codinglabsau/gooey'
<\/script>

<template>
  <Select>
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Select>
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>

            <SelectItem value="apple"> Apple </SelectItem>

            <SelectItem value="banana"> Banana </SelectItem>

            <SelectItem value="blueberry"> Blueberry </SelectItem>

            <SelectItem value="grapes"> Grapes </SelectItem>

            <SelectItem value="pineapple"> Pineapple </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
