import type { ToggleGroupRootProps } from "reka-ui";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ToggleGroupRootProps<import("reka-ui").AcceptableValue | import("reka-ui").AcceptableValue[]> & {
    class?: any;
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (payload: import("reka-ui").AcceptableValue | import("reka-ui").AcceptableValue[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ToggleGroupRootProps<import("reka-ui").AcceptableValue | import("reka-ui").AcceptableValue[]> & {
    class?: any;
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((payload: import("reka-ui").AcceptableValue | import("reka-ui").AcceptableValue[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {
        modelValue: import("reka-ui").AcceptableValue | import("reka-ui").AcceptableValue[] | undefined;
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
