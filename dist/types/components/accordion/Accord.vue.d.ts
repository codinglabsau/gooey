import { AccordionRootProps } from 'reka-ui';
interface Item {
    title: string;
    content: string;
}
interface ExtendedAccordionRootProps extends AccordionRootProps {
    content?: Item[] | Record<string, Item>;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<string, (_: {
        item: Item;
    }) => any>> & Partial<Record<string, (_: {
        item: Item;
    }) => any>>;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ExtendedAccordionRootProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | string[] | undefined) => any;
}, string, import('vue').PublicProps, Readonly<ExtendedAccordionRootProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | string[] | undefined) => any) | undefined;
}>, {
    type: "single" | "multiple";
    collapsible: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
