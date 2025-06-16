import type { DialogContentProps } from "reka-ui";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<DialogContentProps & {
    class?: any;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => void;
    pointerDownOutside: (event: CustomEvent<{
        originalEvent: PointerEvent;
    }>) => void;
    focusOutside: (event: CustomEvent<{
        originalEvent: FocusEvent;
    }>) => void;
    interactOutside: (event: CustomEvent<{
        originalEvent: PointerEvent;
    }> | CustomEvent<{
        originalEvent: FocusEvent;
    }>) => void;
    openAutoFocus: (event: Event) => void;
    closeAutoFocus: (event: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<DialogContentProps & {
    class?: any;
}>>> & Readonly<{
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: CustomEvent<{
        originalEvent: PointerEvent;
    }>) => any) | undefined;
    onFocusOutside?: ((event: CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any) | undefined;
    onInteractOutside?: ((event: CustomEvent<{
        originalEvent: PointerEvent;
    }> | CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any) | undefined;
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
