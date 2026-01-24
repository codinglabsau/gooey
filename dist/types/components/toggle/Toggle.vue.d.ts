import { ToggleProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { ToggleVariants } from '.';
type __VLS_Props = ToggleProps & {
    class?: HTMLAttributes["class"];
    variant?: ToggleVariants["variant"];
    size?: ToggleVariants["size"];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: any): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    variant: "default" | "outline" | null;
    size: "default" | "sm" | "lg" | null;
    disabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
