import type { ComputedRef, Ref } from "vue"
import { createContext } from "reka-ui"

// Constants - use same cookie name as shadcn sidebar for consistency
export const COLLAPSIBLE_SIDEBAR_COOKIE_NAME = "sidebar_state"
export const COLLAPSIBLE_SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 days
export const COLLAPSIBLE_SIDEBAR_WIDTH = "18rem" // 288px - expanded
export const COLLAPSIBLE_SIDEBAR_WIDTH_ICON = "3rem" // 48px - collapsed
export const COLLAPSIBLE_SIDEBAR_WIDTH_MOBILE = "18rem" // 288px - mobile sheet
export const COLLAPSIBLE_SIDEBAR_KEYBOARD_SHORTCUT = "b"

export type CollapsibleMode = "none" | "icon"

export interface CollapsibleSidebarContext {
  state: ComputedRef<"expanded" | "collapsed">
  open: Ref<boolean>
  setOpen: (value: boolean) => void
  isMobile: Ref<boolean>
  openMobile: Ref<boolean>
  setOpenMobile: (value: boolean) => void
  toggleSidebar: () => void
  collapsible: CollapsibleMode
}

export const [useCollapsibleSidebar, provideCollapsibleSidebarContext] =
  createContext<CollapsibleSidebarContext>("CollapsibleTwoColumnLayout")
