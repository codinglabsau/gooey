import { type HTMLAttributes } from "vue";
import type { SliderRootProps } from "radix-vue";
type __VLS_Props = SliderRootProps & {
    class?: HTMLAttributes["class"];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (payload: number[] | undefined) => any;
    valueCommit: (payload: number[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((payload: number[] | undefined) => any) | undefined;
    onValueCommit?: ((payload: number[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
