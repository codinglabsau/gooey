<script setup lang="ts">
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/item"
import { User, Settings, Bell } from "lucide-vue-next"
</script>

<template>
  <div class="max-w-md space-y-4">
    <ItemGroup class="divide-y rounded-lg border">
      <Item>
        <ItemMedia variant="icon">
          <User class="size-4" />
        </ItemMedia>

        <ItemContent>
          <ItemTitle>Profile</ItemTitle>

          <ItemDescription>Manage your account settings</ItemDescription>
        </ItemContent>
      </Item>

      <Item>
        <ItemMedia variant="icon">
          <Settings class="size-4" />
        </ItemMedia>

        <ItemContent>
          <ItemTitle>Settings</ItemTitle>

          <ItemDescription>Configure app preferences</ItemDescription>
        </ItemContent>
      </Item>

      <Item>
        <ItemMedia variant="icon">
          <Bell class="size-4" />
        </ItemMedia>

        <ItemContent>
          <ItemTitle>Notifications</ItemTitle>

          <ItemDescription>Manage notification settings</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  </div>
</template>
