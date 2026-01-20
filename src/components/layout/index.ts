export { default as TwoColumnLayout } from "./TwoColumnLayout.vue"

export { default as Header } from "./Header.vue"
export { default as Main } from "./Main.vue"

export { default as TwoColumnLayoutSidebar } from "./TwoColumnLayoutSidebar.vue"
export { default as TwoColumnLayoutSidebarDesktop } from "./TwoColumnLayoutSidebarDesktop.vue"
export { default as TwoColumnLayoutSidebarMobile } from "./TwoColumnLayoutSidebarMobile.vue"
export { default as TwoColumnLayoutSidebarTrigger } from "./TwoColumnLayoutSidebarTrigger.vue"

// Collapsible variants
export { default as CollapsibleTwoColumnLayout } from "./CollapsibleTwoColumnLayout.vue"
export { default as CollapsibleSidebarDesktop } from "./CollapsibleSidebarDesktop.vue"
export { default as CollapsibleMain } from "./CollapsibleMain.vue"
export { default as CollapsibleSidebarTrigger } from "./CollapsibleSidebarTrigger.vue"
export { default as CollapsibleMenuButton } from "./CollapsibleMenuButton.vue"
export { default as CollapsibleMenuGroup } from "./CollapsibleMenuGroup.vue"

// Collapsible utilities
export {
  useCollapsibleSidebar,
  type CollapsibleMode,
  type CollapsibleSidebarContext,
  COLLAPSIBLE_SIDEBAR_WIDTH,
  COLLAPSIBLE_SIDEBAR_WIDTH_ICON,
  COLLAPSIBLE_SIDEBAR_WIDTH_MOBILE,
} from "./collapsible-utils"
