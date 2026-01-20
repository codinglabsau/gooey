import type { Component } from "vue";
import type { SidebarMenuButtonProps } from "./SidebarMenuButtonChild.vue";
type __VLS_Props = SidebarMenuButtonProps & {
    tooltip?: string | Component;
};
declare var __VLS_8: {}, __VLS_29: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
} & {
    default?: (props: typeof __VLS_29) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    variant: "default" | "outline" | null;
    size: "default" | "sm" | "lg" | null;
    as: import("reka-ui").AsTag | Component;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
