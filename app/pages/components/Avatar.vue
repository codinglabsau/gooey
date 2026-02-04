<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@codinglabsau/gooey'
<\/script>

<template>
  <Avatar>
    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Avatar>
        <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />

        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
