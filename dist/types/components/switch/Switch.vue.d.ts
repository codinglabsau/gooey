import { type HTMLAttributes } from "vue";
import { type SwitchRootProps } from "radix-vue";
type __VLS_Props = SwitchRootProps & {
    class?: HTMLAttributes["class"];
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:checked": (payload: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:checked"?: ((payload: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
