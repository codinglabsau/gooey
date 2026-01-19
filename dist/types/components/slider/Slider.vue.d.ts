import type { SliderRootProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
type __VLS_Props = SliderRootProps & {
    class?: HTMLAttributes["class"];
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (payload: number[] | undefined) => any;
    valueCommit: (payload: number[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((payload: number[] | undefined) => any) | undefined;
    onValueCommit?: ((payload: number[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
