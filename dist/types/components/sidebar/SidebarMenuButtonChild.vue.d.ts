import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import type { SidebarMenuButtonVariants } from ".";
export interface SidebarMenuButtonProps extends PrimitiveProps {
    variant?: SidebarMenuButtonVariants["variant"];
    size?: SidebarMenuButtonVariants["size"];
    isActive?: boolean;
    class?: HTMLAttributes["class"];
}
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<SidebarMenuButtonProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SidebarMenuButtonProps> & Readonly<{}>, {
    variant: "default" | "outline" | null;
    size: "default" | "sm" | "lg" | null;
    as: import("reka-ui").AsTag | import("vue").Component;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
