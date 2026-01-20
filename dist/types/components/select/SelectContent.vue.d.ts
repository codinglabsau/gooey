import type { SelectContentProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
type __VLS_Props = SelectContentProps & {
    class?: HTMLAttributes["class"];
};
declare var __VLS_25: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_25) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import("reka-ui").PointerDownOutsideEvent) => any;
    closeAutoFocus: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: import("reka-ui").PointerDownOutsideEvent) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
}>, {
    position: "item-aligned" | "popper";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
