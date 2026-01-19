import type { TagsInputRootProps } from "reka-ui";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<TagsInputRootProps<import("reka-ui").AcceptableInputValue> & {
    class?: any;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    invalid: (payload: import("reka-ui").AcceptableInputValue) => void;
    "update:modelValue": (payload: import("reka-ui").AcceptableInputValue[]) => void;
    addTag: (payload: import("reka-ui").AcceptableInputValue) => void;
    removeTag: (payload: import("reka-ui").AcceptableInputValue) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<TagsInputRootProps<import("reka-ui").AcceptableInputValue> & {
    class?: any;
}>>> & Readonly<{
    onInvalid?: ((payload: import("reka-ui").AcceptableInputValue) => any) | undefined;
    "onUpdate:modelValue"?: ((payload: import("reka-ui").AcceptableInputValue[]) => any) | undefined;
    onAddTag?: ((payload: import("reka-ui").AcceptableInputValue) => any) | undefined;
    onRemoveTag?: ((payload: import("reka-ui").AcceptableInputValue) => any) | undefined;
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
