import type { DialogContentProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
type __VLS_Props = DialogContentProps & {
    class?: HTMLAttributes["class"];
};
declare var __VLS_19: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_19) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import("reka-ui").PointerDownOutsideEvent) => any;
    focusOutside: (event: import("reka-ui").FocusOutsideEvent) => any;
    interactOutside: (event: import("reka-ui").PointerDownOutsideEvent | import("reka-ui").FocusOutsideEvent) => any;
    openAutoFocus: (event: Event) => any;
    closeAutoFocus: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: import("reka-ui").PointerDownOutsideEvent) => any) | undefined;
    onFocusOutside?: ((event: import("reka-ui").FocusOutsideEvent) => any) | undefined;
    onInteractOutside?: ((event: import("reka-ui").PointerDownOutsideEvent | import("reka-ui").FocusOutsideEvent) => any) | undefined;
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
