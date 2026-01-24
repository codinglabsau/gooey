import { PinInputRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
declare const _default: <Type extends "text" | "number" = "text">(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:modelValue"?: ((value: [Type] extends ["number"] ? number[] : string[]) => any) | undefined;
        readonly onComplete?: ((value: [Type] extends ["number"] ? number[] : string[]) => any) | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, "onUpdate:modelValue" | "onComplete"> & (PinInputRootProps<Type> & {
        class?: HTMLAttributes["class"];
    }) & Partial<{}>> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        default?(_: {}): any;
    };
    emit: ((evt: "update:modelValue", value: [Type] extends ["number"] ? number[] : string[]) => void) & ((evt: "complete", value: [Type] extends ["number"] ? number[] : string[]) => void);
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
