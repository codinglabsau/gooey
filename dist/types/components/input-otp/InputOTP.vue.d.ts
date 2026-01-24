import { HTMLAttributes } from 'vue';
import { OTPInputProps } from 'vue-input-otp';
type __VLS_Props = OTPInputProps & {
    class?: HTMLAttributes["class"];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            slots: import('vue-input-otp').SlotProps[];
            isFocused: boolean;
            isHovering: boolean;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    blur: (e: FocusEvent) => any;
    change: (e: Event) => any;
    focus: (e: FocusEvent) => any;
    input: (value: string) => any;
    mouseleave: (e: MouseEvent) => any;
    mouseover: (e: MouseEvent) => any;
    paste: (e: ClipboardEvent) => any;
    select: (e: Event) => any;
    complete: (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onBlur?: ((e: FocusEvent) => any) | undefined;
    onChange?: ((e: Event) => any) | undefined;
    onFocus?: ((e: FocusEvent) => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
    onMouseleave?: ((e: MouseEvent) => any) | undefined;
    onMouseover?: ((e: MouseEvent) => any) | undefined;
    onPaste?: ((e: ClipboardEvent) => any) | undefined;
    onSelect?: ((e: Event) => any) | undefined;
    onComplete?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
