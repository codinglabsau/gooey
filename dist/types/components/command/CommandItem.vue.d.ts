import type { ComboboxItemProps } from "radix-vue";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ComboboxItemProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: any;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (event: import("radix-vue/dist/Combobox/ComboboxItem").SelectEvent<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue>) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ComboboxItemProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: any;
}>>> & Readonly<{
    onSelect?: ((event: import("radix-vue/dist/Combobox/ComboboxItem").SelectEvent<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue>) => any) | undefined;
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
