import type { HTMLAttributes } from "vue";
import type { OTPInputProps } from "vue-input-otp";
type __VLS_Props = OTPInputProps & {
    class?: HTMLAttributes["class"];
};
declare var __VLS_8: {
    slots: import("vue-input-otp").SlotProps[];
    isFocused: boolean;
    isHovering: boolean;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    blur: (e: FocusEvent) => any;
    change: (e: Event) => any;
    focus: (e: FocusEvent) => any;
    input: (value: string) => any;
    mouseleave: (e: MouseEvent) => any;
    mouseover: (e: MouseEvent) => any;
    paste: (e: ClipboardEvent) => any;
    select: (e: Event) => any;
    complete: (value: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onBlur?: ((e: FocusEvent) => any) | undefined;
    onChange?: ((e: Event) => any) | undefined;
    onFocus?: ((e: FocusEvent) => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
    onMouseleave?: ((e: MouseEvent) => any) | undefined;
    onMouseover?: ((e: MouseEvent) => any) | undefined;
    onPaste?: ((e: ClipboardEvent) => any) | undefined;
    onSelect?: ((e: Event) => any) | undefined;
    onComplete?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
