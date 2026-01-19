import type { HTMLAttributes } from "vue";
type __VLS_Props = {
    as?: string;
    class?: HTMLAttributes["class"];
};
declare var __VLS_7: {}, __VLS_9: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_7) => any;
} & {
    actions?: (props: typeof __VLS_9) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    as: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
