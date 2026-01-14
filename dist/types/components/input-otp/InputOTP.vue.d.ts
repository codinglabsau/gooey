import type { OTPInputProps } from "vue-input-otp";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<OTPInputProps & {
    class?: any;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    complete: (value: string) => void;
    change: (e: Event) => void;
    select: (e: Event) => void;
    input: (value: string) => void;
    focus: (e: FocusEvent) => void;
    blur: (e: FocusEvent) => void;
    mouseover: (e: MouseEvent) => void;
    mouseleave: (e: MouseEvent) => void;
    paste: (e: ClipboardEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<OTPInputProps & {
    class?: any;
}>>> & Readonly<{
    onPaste?: ((e: ClipboardEvent) => any) | undefined;
    onBlur?: ((e: FocusEvent) => any) | undefined;
    onChange?: ((e: Event) => any) | undefined;
    onFocus?: ((e: FocusEvent) => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
    onMouseleave?: ((e: MouseEvent) => any) | undefined;
    onMouseover?: ((e: MouseEvent) => any) | undefined;
    onSelect?: ((e: Event) => any) | undefined;
    onComplete?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {
        slots: import("vue-input-otp").SlotProps[];
        isFocused: boolean;
        isHovering: boolean;
    }): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
