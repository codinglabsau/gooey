import { DrawerRootProps } from 'vaul-vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DrawerRootProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    drag: (percentageDragged: number) => any;
    "update:open": (open: boolean) => any;
    animationEnd: (open: boolean) => any;
    release: (open: boolean) => any;
    "update:activeSnapPoint": (val: string | number) => any;
}, string, import('vue').PublicProps, Readonly<DrawerRootProps> & Readonly<{
    onClose?: (() => any) | undefined;
    onDrag?: ((percentageDragged: number) => any) | undefined;
    "onUpdate:open"?: ((open: boolean) => any) | undefined;
    onAnimationEnd?: ((open: boolean) => any) | undefined;
    onRelease?: ((open: boolean) => any) | undefined;
    "onUpdate:activeSnapPoint"?: ((val: string | number) => any) | undefined;
}>, {
    shouldScaleBackground: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
