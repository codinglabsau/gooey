import { type AccordionRootProps } from "radix-vue";
interface Item {
    title: string;
    content: string;
}
interface ExtendedAccordionRootProps extends AccordionRootProps {
    content?: Item[] | Record<string, Item>;
}
declare var __VLS_14: string, __VLS_15: {
    item: Item;
}, __VLS_22: string, __VLS_23: {
    item: Item;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_14>]?: (props: typeof __VLS_15) => any;
} & {
    [K in NonNullable<typeof __VLS_22>]?: (props: typeof __VLS_23) => any;
};
declare const __VLS_component: import("vue").DefineComponent<ExtendedAccordionRootProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | string[] | undefined) => any;
}, string, import("vue").PublicProps, Readonly<ExtendedAccordionRootProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | string[] | undefined) => any) | undefined;
}>, {
    type: "multiple" | "single";
    collapsible: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
