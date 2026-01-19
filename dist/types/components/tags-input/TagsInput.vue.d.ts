import type { TagsInputRootProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
type __VLS_Props = TagsInputRootProps & {
    class?: HTMLAttributes["class"];
};
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    invalid: (payload: import("reka-ui").AcceptableInputValue) => any;
    "update:modelValue": (payload: import("reka-ui").AcceptableInputValue[]) => any;
    addTag: (payload: import("reka-ui").AcceptableInputValue) => any;
    removeTag: (payload: import("reka-ui").AcceptableInputValue) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onInvalid?: ((payload: import("reka-ui").AcceptableInputValue) => any) | undefined;
    "onUpdate:modelValue"?: ((payload: import("reka-ui").AcceptableInputValue[]) => any) | undefined;
    onAddTag?: ((payload: import("reka-ui").AcceptableInputValue) => any) | undefined;
    onRemoveTag?: ((payload: import("reka-ui").AcceptableInputValue) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
