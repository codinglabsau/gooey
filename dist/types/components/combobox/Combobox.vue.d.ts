import { ComboboxRootProps } from 'reka-ui';
type __VLS_Props = ComboboxRootProps;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
    "update:modelValue": (value: import('reka-ui').AcceptableValue) => any;
    highlight: (payload: {
        ref: HTMLElement;
        value: import('reka-ui').AcceptableValue;
    } | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('reka-ui').AcceptableValue) => any) | undefined;
    onHighlight?: ((payload: {
        ref: HTMLElement;
        value: import('reka-ui').AcceptableValue;
    } | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
