import type { HTMLAttributes } from "vue";
type __VLS_Props = {
    as?: string;
    class?: HTMLAttributes["class"];
};
declare var __VLS_5: {}, __VLS_7: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
} & {
    actions?: (props: typeof __VLS_7) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    as: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
