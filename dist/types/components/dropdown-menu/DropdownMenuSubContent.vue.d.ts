import { DropdownMenuSubContentProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = DropdownMenuSubContentProps & {
    class?: HTMLAttributes["class"];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import('reka-ui').PointerDownOutsideEvent) => any;
    focusOutside: (event: import('reka-ui').FocusOutsideEvent) => any;
    interactOutside: (event: import('reka-ui').PointerDownOutsideEvent | import('reka-ui').FocusOutsideEvent) => any;
    openAutoFocus: (event: Event) => any;
    closeAutoFocus: (event: Event) => any;
    entryFocus: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: import('reka-ui').PointerDownOutsideEvent) => any) | undefined;
    onFocusOutside?: ((event: import('reka-ui').FocusOutsideEvent) => any) | undefined;
    onInteractOutside?: ((event: import('reka-ui').PointerDownOutsideEvent | import('reka-ui').FocusOutsideEvent) => any) | undefined;
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
    onEntryFocus?: ((event: Event) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
