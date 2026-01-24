import { TagsInputRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = TagsInputRootProps & {
    class?: HTMLAttributes["class"];
};
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
    invalid: (payload: import('reka-ui').AcceptableInputValue) => any;
    "update:modelValue": (payload: import('reka-ui').AcceptableInputValue[]) => any;
    addTag: (payload: import('reka-ui').AcceptableInputValue) => any;
    removeTag: (payload: import('reka-ui').AcceptableInputValue) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onInvalid?: ((payload: import('reka-ui').AcceptableInputValue) => any) | undefined;
    "onUpdate:modelValue"?: ((payload: import('reka-ui').AcceptableInputValue[]) => any) | undefined;
    onAddTag?: ((payload: import('reka-ui').AcceptableInputValue) => any) | undefined;
    onRemoveTag?: ((payload: import('reka-ui').AcceptableInputValue) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
