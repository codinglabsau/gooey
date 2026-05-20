import { ListboxItemProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = ListboxItemProps & {
    class?: HTMLAttributes["class"];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        itemRef: import('vue').ShallowUnwrapRef<{}> | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (event: import('reka-ui').ListboxItemSelectEvent<import('reka-ui').AcceptableValue>) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((event: import('reka-ui').ListboxItemSelectEvent<import('reka-ui').AcceptableValue>) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    itemRef: import('vue').ShallowUnwrapRef<{}> | null;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
