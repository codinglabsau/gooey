declare const _default: <Type extends "number" | "text" = "text">(__VLS_props: {
    disabled?: boolean | undefined;
    dir?: ("ltr" | "rtl") | undefined;
    asChild?: boolean | undefined;
    as?: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any> | undefined;
    type?: Type | undefined;
    modelValue?: ([Type] extends ["number"] ? number[] : string[]) | null | undefined;
    defaultValue?: ([Type] extends ["number"] ? number[] : string[]) | undefined;
    readonly "onUpdate:modelValue"?: ((value: [Type] extends ["number"] ? number[] : string[]) => any) | undefined;
    name?: string | undefined;
    placeholder?: string | undefined;
    mask?: boolean | undefined;
    required?: boolean | undefined;
    id?: string | undefined;
    readonly onComplete?: ((value: [Type] extends ["number"] ? number[] : string[]) => any) | undefined;
    otp?: boolean | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: {
        default?(_: {}): any;
    };
    emit: ((evt: "update:modelValue", value: [Type] extends ["number"] ? number[] : string[]) => void) & ((evt: "complete", value: [Type] extends ["number"] ? number[] : string[]) => void);
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        disabled?: boolean | undefined;
        dir?: ("ltr" | "rtl") | undefined;
        asChild?: boolean | undefined;
        as?: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any> | undefined;
        type?: Type | undefined;
        modelValue?: ([Type] extends ["number"] ? number[] : string[]) | null | undefined;
        defaultValue?: ([Type] extends ["number"] ? number[] : string[]) | undefined;
        readonly "onUpdate:modelValue"?: ((value: [Type] extends ["number"] ? number[] : string[]) => any) | undefined;
        name?: string | undefined;
        placeholder?: string | undefined;
        mask?: boolean | undefined;
        required?: boolean | undefined;
        id?: string | undefined;
        readonly onComplete?: ((value: [Type] extends ["number"] ? number[] : string[]) => any) | undefined;
        otp?: boolean | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        default?(_: {}): any;
    };
    emit: ((evt: "update:modelValue", value: [Type] extends ["number"] ? number[] : string[]) => void) & ((evt: "complete", value: [Type] extends ["number"] ? number[] : string[]) => void);
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            disabled?: boolean | undefined;
            dir?: ("ltr" | "rtl") | undefined;
            asChild?: boolean | undefined;
            as?: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any> | undefined;
            type?: Type | undefined;
            modelValue?: ([Type] extends ["number"] ? number[] : string[]) | null | undefined;
            defaultValue?: ([Type] extends ["number"] ? number[] : string[]) | undefined;
            readonly "onUpdate:modelValue"?: ((value: [Type] extends ["number"] ? number[] : string[]) => any) | undefined;
            name?: string | undefined;
            placeholder?: string | undefined;
            mask?: boolean | undefined;
            required?: boolean | undefined;
            id?: string | undefined;
            readonly onComplete?: ((value: [Type] extends ["number"] ? number[] : string[]) => any) | undefined;
            otp?: boolean | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {
            default?(_: {}): any;
        };
        emit: ((evt: "update:modelValue", value: [Type] extends ["number"] ? number[] : string[]) => void) & ((evt: "complete", value: [Type] extends ["number"] ? number[] : string[]) => void);
    } | undefined;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
