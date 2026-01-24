import { VariantProps } from 'class-variance-authority';
import { ToggleGroupRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { toggleVariants } from '../toggle';
type ToggleGroupVariants = VariantProps<typeof toggleVariants>;
type __VLS_Props = ToggleGroupRootProps & {
    class?: HTMLAttributes["class"];
    variant?: ToggleGroupVariants["variant"];
    size?: ToggleGroupVariants["size"];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            modelValue: import('reka-ui').AcceptableValue | import('reka-ui').AcceptableValue[] | undefined;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (payload: import('reka-ui').AcceptableValue | import('reka-ui').AcceptableValue[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((payload: import('reka-ui').AcceptableValue | import('reka-ui').AcceptableValue[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
