<script setup lang="ts">
/* eslint-disable no-useless-escape */
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-vue-next"

import { Button } from "@/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"
import { CodeBlock, ComponentHeading } from "@app/components"

const code = `<script setup lang="ts">
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@codinglabsau/gooey'
import { User, Settings, LogOut } from 'lucide-vue-next'
<\/script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">Open</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User class="mr-2 h-4 w-4" />
          <span>Profile</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut class="mr-2 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline" data-cy="button"> Open </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User class="mr-2 h-4 w-4" />

              <span>Profile</span>

              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <CreditCard class="mr-2 h-4 w-4" />

              <span>Billing</span>

              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings class="mr-2 h-4 w-4" />

              <span>Settings</span>

              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Keyboard class="mr-2 h-4 w-4" />

              <span>Keyboard shortcuts</span>

              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users class="mr-2 h-4 w-4" />

              <span>Team</span>
            </DropdownMenuItem>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus class="mr-2 h-4 w-4" />

                <span>Invite users</span>
              </DropdownMenuSubTrigger>

              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail class="mr-2 h-4 w-4" />

                    <span>Email</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <MessageSquare class="mr-2 h-4 w-4" />

                    <span>Message</span>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <PlusCircle class="mr-2 h-4 w-4" />

                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuItem>
              <Plus class="mr-2 h-4 w-4" />

              <span>New Team</span>

              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Github class="mr-2 h-4 w-4" />

            <span>GitHub</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <LifeBuoy class="mr-2 h-4 w-4" />

            <span>Support</span>
          </DropdownMenuItem>

          <DropdownMenuItem disabled>
            <Cloud class="mr-2 h-4 w-4" />

            <span>API</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <LogOut class="mr-2 h-4 w-4" />

            <span>Log out</span>

            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
