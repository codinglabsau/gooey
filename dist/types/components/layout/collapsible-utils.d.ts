import type { ComputedRef, Ref } from "vue";
export declare const COLLAPSIBLE_SIDEBAR_COOKIE_NAME = "sidebar_state";
export declare const COLLAPSIBLE_SIDEBAR_COOKIE_MAX_AGE: number;
export declare const COLLAPSIBLE_SIDEBAR_WIDTH = "18rem";
export declare const COLLAPSIBLE_SIDEBAR_WIDTH_ICON = "3rem";
export declare const COLLAPSIBLE_SIDEBAR_WIDTH_MOBILE = "18rem";
export declare const COLLAPSIBLE_SIDEBAR_KEYBOARD_SHORTCUT = "b";
export type CollapsibleMode = "none" | "icon";
export interface CollapsibleSidebarContext {
    state: ComputedRef<"expanded" | "collapsed">;
    open: Ref<boolean>;
    setOpen: (value: boolean) => void;
    isMobile: Ref<boolean>;
    openMobile: Ref<boolean>;
    setOpenMobile: (value: boolean) => void;
    toggleSidebar: () => void;
    collapsible: CollapsibleMode;
}
export declare const useCollapsibleSidebar: <T extends CollapsibleSidebarContext | null | undefined = CollapsibleSidebarContext>(fallback?: T | undefined) => T extends null ? CollapsibleSidebarContext | null : CollapsibleSidebarContext, provideCollapsibleSidebarContext: (contextValue: CollapsibleSidebarContext) => CollapsibleSidebarContext;
