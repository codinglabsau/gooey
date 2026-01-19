import type { PinInputRootProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
declare const __VLS_export: <Type extends "text" | "number" = "text">(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_exposed?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: import("vue").PublicProps & __VLS_PrettifyLocal<(PinInputRootProps<Type> & {
        class?: HTMLAttributes["class"];
    }) & {
        "onUpdate:modelValue"?: ((value: [Type] extends ["number"] ? number[] : string[]) => any) | undefined;
        onComplete?: ((value: [Type] extends ["number"] ? number[] : string[]) => any) | undefined;
    }> & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: {}) => void;
    attrs: any;
    slots: {
        default?: (props: {}) => any;
    };
    emit: ((evt: "update:modelValue", value: [Type] extends ["number"] ? number[] : string[]) => void) & ((evt: "complete", value: [Type] extends ["number"] ? number[] : string[]) => void);
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PrettifyLocal<T> = (T extends any ? {
    [K in keyof T]: T[K];
} : {
    [K in keyof T as K]: T[K];
}) & {};
