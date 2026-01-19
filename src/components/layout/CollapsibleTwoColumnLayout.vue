<script setup lang="ts">
import type { HTMLAttributes, Ref } from "vue"
import { defaultDocument, useEventListener, useMediaQuery, useVModel } from "@vueuse/core"
import { TooltipProvider } from "reka-ui"
import { computed, ref } from "vue"
import { cn } from "@/lib/utils"
import {
  type CollapsibleMode,
  COLLAPSIBLE_SIDEBAR_COOKIE_MAX_AGE,
  COLLAPSIBLE_SIDEBAR_COOKIE_NAME,
  COLLAPSIBLE_SIDEBAR_KEYBOARD_SHORTCUT,
  COLLAPSIBLE_SIDEBAR_WIDTH,
  COLLAPSIBLE_SIDEBAR_WIDTH_ICON,
  provideCollapsibleSidebarContext,
} from "./collapsible-utils"

const props = withDefaults(
  defineProps<{
    defaultOpen?: boolean
    open?: boolean
    collapsible?: CollapsibleMode
    class?: HTMLAttributes["class"]
  }>(),
  {
    defaultOpen: !defaultDocument?.cookie.includes(`${COLLAPSIBLE_SIDEBAR_COOKIE_NAME}=false`),
    open: undefined,
    collapsible: "icon",
  },
)

const emits = defineEmits<{
  "update:open": [open: boolean]
}>()

const isMobile = useMediaQuery("(max-width: 1023px)") // lg breakpoint
const openMobile = ref(false)

const open = useVModel(props, "open", emits, {
  defaultValue: props.defaultOpen ?? true,
  passive: (props.open === undefined) as false,
}) as Ref<boolean>

function setOpen(value: boolean) {
  open.value = value

  // Persist state to cookies when collapsible is enabled
  if (props.collapsible !== "none") {
    document.cookie = `${COLLAPSIBLE_SIDEBAR_COOKIE_NAME}=${open.value}; path=/; max-age=${COLLAPSIBLE_SIDEBAR_COOKIE_MAX_AGE}`
  }
}

function setOpenMobile(value: boolean) {
  openMobile.value = value
}

function toggleSidebar() {
  return isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value)
}

// Keyboard shortcut (Cmd/Ctrl+B)
if (props.collapsible !== "none") {
  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === COLLAPSIBLE_SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
      event.preventDefault()
      toggleSidebar()
    }
  })
}

const state = computed(() => (open.value ? "expanded" : "collapsed"))

provideCollapsibleSidebarContext({
  state,
  open,
  setOpen,
  isMobile,
  openMobile,
  setOpenMobile,
  toggleSidebar,
  collapsible: props.collapsible,
})
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <div
      :style="{
        '--collapsible-sidebar-width': COLLAPSIBLE_SIDEBAR_WIDTH,
        '--collapsible-sidebar-width-icon': COLLAPSIBLE_SIDEBAR_WIDTH_ICON,
      }"
      :class="cn('group/collapsible-layout h-full bg-background dark:text-white', props.class)"
      :data-state="state"
      :data-collapsible="collapsible"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </TooltipProvider>
</template>
