import type { PaginationNextProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import type { ButtonVariants } from "@/components/button";
type __VLS_Props = PaginationNextProps & {
    size?: ButtonVariants["size"];
    class?: HTMLAttributes["class"];
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: "default" | "xs" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
