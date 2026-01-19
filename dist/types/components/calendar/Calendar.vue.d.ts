import type { CalendarRootProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
type __VLS_Props = CalendarRootProps & {
    class?: HTMLAttributes["class"];
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (date: import("reka-ui").DateValue | undefined) => any;
    "update:placeholder": (date: import("reka-ui").DateValue) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((date: import("reka-ui").DateValue | undefined) => any) | undefined;
    "onUpdate:placeholder"?: ((date: import("reka-ui").DateValue) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
