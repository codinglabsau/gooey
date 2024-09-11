import { type ToastProps } from ".";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ToastProps>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    pause: () => void;
    escapeKeyDown: (event: KeyboardEvent) => void;
    resume: () => void;
    swipeStart: (event: import("radix-vue/dist/Toast/utils").SwipeEvent) => void;
    swipeMove: (event: import("radix-vue/dist/Toast/utils").SwipeEvent) => void;
    swipeCancel: (event: import("radix-vue/dist/Toast/utils").SwipeEvent) => void;
    swipeEnd: (event: import("radix-vue/dist/Toast/utils").SwipeEvent) => void;
    "update:open": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ToastProps>>> & Readonly<{
    onPause?: (() => any) | undefined;
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onResume?: (() => any) | undefined;
    onSwipeStart?: ((event: import("radix-vue/dist/Toast/utils").SwipeEvent) => any) | undefined;
    onSwipeMove?: ((event: import("radix-vue/dist/Toast/utils").SwipeEvent) => any) | undefined;
    onSwipeCancel?: ((event: import("radix-vue/dist/Toast/utils").SwipeEvent) => any) | undefined;
    onSwipeEnd?: ((event: import("radix-vue/dist/Toast/utils").SwipeEvent) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
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
