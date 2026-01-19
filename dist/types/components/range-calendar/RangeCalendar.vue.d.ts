import type { RangeCalendarRootProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<RangeCalendarRootProps & {
    class?: HTMLAttributes["class"];
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (date: import("reka-ui/dist/index2").DateRange) => void;
    "update:placeholder": (date: import("reka-ui").DateValue) => void;
    "update:validModelValue": (date: import("reka-ui/dist/index2").DateRange) => void;
    "update:startValue": (date: import("reka-ui").DateValue | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<RangeCalendarRootProps & {
    class?: HTMLAttributes["class"];
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((date: import("reka-ui/dist/index2").DateRange) => any) | undefined;
    "onUpdate:placeholder"?: ((date: import("reka-ui").DateValue) => any) | undefined;
    "onUpdate:validModelValue"?: ((date: import("reka-ui/dist/index2").DateRange) => any) | undefined;
    "onUpdate:startValue"?: ((date: import("reka-ui").DateValue | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
