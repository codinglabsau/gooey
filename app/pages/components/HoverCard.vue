<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { Button } from "@/components/button"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
} from '@codinglabsau/gooey'
<\/script>

<template>
  <HoverCard>
    <HoverCardTrigger as-child>
      <Button variant="link">@nextjs</Button>
    </HoverCardTrigger>
    <HoverCardContent class="w-80">
      <p>The React Framework - created and maintained by @vercel.</p>
    </HoverCardContent>
  </HoverCard>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <HoverCard>
        <HoverCardTrigger as-child>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>

        <HoverCardContent class="w-80">
          <div class="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />

              <AvatarFallback>VC</AvatarFallback>
            </Avatar>

            <div class="space-y-1">
              <h4 class="text-sm font-semibold">@nextjs</h4>

              <p class="text-sm text-muted-foreground">
                The React Framework - created and maintained by @vercel.
              </p>

              <div class="flex items-center pt-2">
                <span class="text-xs text-muted-foreground"> Joined December 2021 </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
