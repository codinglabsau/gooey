import { type AccordionRootProps } from "radix-vue";
interface Item {
    title: string;
    content: string;
}
interface ExtendedAccordionRootProps extends AccordionRootProps {
    content?: Item[];
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ExtendedAccordionRootProps>, {
    type: string;
    collapsible: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | string[] | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ExtendedAccordionRootProps>, {
    type: string;
    collapsible: boolean;
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | string[] | undefined) => any) | undefined;
}>, {
    collapsible: boolean;
    type: "single" | "multiple";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Partial<Record<string, (_: {
    item: Item;
}) => any>> & Partial<Record<string, (_: {
    item: Item;
}) => any>>>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
