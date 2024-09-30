import type { ComboboxRootProps } from "radix-vue";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ComboboxRootProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: any;
}>, {
    open: boolean;
    modelValue: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => void;
    "update:modelValue": (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => void;
    "update:searchTerm": (value: string) => void;
    "update:selectedValue": (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ComboboxRootProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: any;
}>, {
    open: boolean;
    modelValue: string;
}>>> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => any) | undefined;
    "onUpdate:searchTerm"?: ((value: string) => any) | undefined;
    "onUpdate:selectedValue"?: ((value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue | undefined) => any) | undefined;
}>, {
    open: boolean;
    modelValue: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue | import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
