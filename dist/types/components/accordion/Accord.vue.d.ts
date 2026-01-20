import { type AccordionRootProps } from "reka-ui";
interface Item {
    title: string;
    content: string;
}
interface ExtendedAccordionRootProps extends AccordionRootProps {
    content?: Item[] | Record<string, Item>;
}
declare var __VLS_21: string, __VLS_22: {
    item: Item;
}, __VLS_31: string, __VLS_32: {
    item: Item;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_21>]?: (props: typeof __VLS_22) => any;
} & {
    [K in NonNullable<typeof __VLS_31>]?: (props: typeof __VLS_32) => any;
};
declare const __VLS_base: import("vue").DefineComponent<ExtendedAccordionRootProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | string[] | undefined) => any;
}, string, import("vue").PublicProps, Readonly<ExtendedAccordionRootProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | string[] | undefined) => any) | undefined;
}>, {
    type: "single" | "multiple";
    collapsible: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
