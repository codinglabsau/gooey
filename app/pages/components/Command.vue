<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-vue-next"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/command"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@codinglabsau/gooey'
import { Calendar, Settings, User } from 'lucide-vue-next'
<\/script>

<template>
  <Command class="max-w-[450px] rounded-lg border shadow-md">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="Calendar">
          <Calendar class="mr-2 h-4 w-4" />
          <span>Calendar</span>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem value="Profile">
          <User class="mr-2 h-4 w-4" />
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Command class="max-w-[450px] rounded-lg border shadow-md">
        <CommandInput placeholder="Type a command or search..." />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Suggestions">
            <CommandItem value="Calendar">
              <Calendar class="mr-2 h-4 w-4" />

              <span>Calendar</span>
            </CommandItem>

            <CommandItem value="Search Emoji">
              <Smile class="mr-2 h-4 w-4" />

              <span>Search Emoji</span>
            </CommandItem>

            <CommandItem value="Calculator">
              <Calculator class="mr-2 h-4 w-4" />

              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Settings">
            <CommandItem value="Profile">
              <User class="mr-2 h-4 w-4" />

              <span>Profile</span>

              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>

            <CommandItem value="Billing">
              <CreditCard class="mr-2 h-4 w-4" />

              <span>Billing</span>

              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>

            <CommandItem value="Settings">
              <Settings class="mr-2 h-4 w-4" />

              <span>Settings</span>

              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
