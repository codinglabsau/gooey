<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/menubar"
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>

      <MenubarContent>
        <MenubarItem> New Tab <MenubarShortcut>Cmd+T</MenubarShortcut> </MenubarItem>

        <MenubarItem> New Window <MenubarShortcut>Cmd+N</MenubarShortcut> </MenubarItem>

        <MenubarSeparator />

        <MenubarItem>Share</MenubarItem>

        <MenubarSeparator />

        <MenubarItem>Print <MenubarShortcut>Cmd+P</MenubarShortcut></MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>

      <MenubarContent>
        <MenubarItem> Undo <MenubarShortcut>Cmd+Z</MenubarShortcut> </MenubarItem>

        <MenubarItem> Redo <MenubarShortcut>Shift+Cmd+Z</MenubarShortcut> </MenubarItem>

        <MenubarSeparator />

        <MenubarItem> Cut <MenubarShortcut>Cmd+X</MenubarShortcut> </MenubarItem>

        <MenubarItem> Copy <MenubarShortcut>Cmd+C</MenubarShortcut> </MenubarItem>

        <MenubarItem> Paste <MenubarShortcut>Cmd+V</MenubarShortcut> </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>

      <MenubarContent>
        <MenubarItem> Toggle Fullscreen </MenubarItem>

        <MenubarSeparator />

        <MenubarItem>Hide Sidebar</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
