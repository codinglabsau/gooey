import { type HTMLAttributes } from "vue";
import type { ComboboxRootProps } from "radix-vue";
type __VLS_Props = ComboboxRootProps & {
    class?: HTMLAttributes["class"];
};
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
    "update:modelValue": (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => any;
    "update:searchTerm": (value: string) => any;
    "update:selectedValue": (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => any) | undefined;
    "onUpdate:searchTerm"?: ((value: string) => any) | undefined;
    "onUpdate:selectedValue"?: ((value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue | undefined) => any) | undefined;
}>, {
    open: boolean;
    modelValue: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue | import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
