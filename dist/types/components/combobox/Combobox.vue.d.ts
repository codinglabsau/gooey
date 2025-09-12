import type { ComboboxRootProps } from "reka-ui";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ComboboxRootProps<import("reka-ui").AcceptableValue>>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("reka-ui").AcceptableValue) => void;
    "update:open": (value: boolean) => void;
    highlight: (payload: {
        ref: HTMLElement;
        value: import("reka-ui").AcceptableValue;
    } | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ComboboxRootProps<import("reka-ui").AcceptableValue>>>> & Readonly<{
    "onUpdate:modelValue"?: ((value: import("reka-ui").AcceptableValue) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    onHighlight?: ((payload: {
        ref: HTMLElement;
        value: import("reka-ui").AcceptableValue;
    } | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
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
