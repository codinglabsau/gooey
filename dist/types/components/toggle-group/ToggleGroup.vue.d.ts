import type { VariantProps } from "class-variance-authority";
import type { ToggleGroupRootProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import type { toggleVariants } from "@/components/toggle";
type ToggleGroupVariants = VariantProps<typeof toggleVariants>;
type __VLS_Props = ToggleGroupRootProps & {
    class?: HTMLAttributes["class"];
    variant?: ToggleGroupVariants["variant"];
    size?: ToggleGroupVariants["size"];
};
declare var __VLS_8: {
    modelValue: import("reka-ui").AcceptableValue | import("reka-ui").AcceptableValue[] | undefined;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (payload: import("reka-ui").AcceptableValue | import("reka-ui").AcceptableValue[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((payload: import("reka-ui").AcceptableValue | import("reka-ui").AcceptableValue[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
