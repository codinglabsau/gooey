<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/input-group"
import { Search, Mail } from "lucide-vue-next"
</script>

<template>
  <div class="max-w-md space-y-4">
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
</template>
