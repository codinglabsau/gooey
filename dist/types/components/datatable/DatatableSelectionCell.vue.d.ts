interface Props {
    /**
     * Whether this is a header cell (th) or body cell (td)
     */
    isHeader?: boolean;
    /**
     * Whether the checkbox is checked
     */
    checked?: boolean;
    /**
     * Whether the checkbox is in indeterminate state (header only)
     */
    indeterminate?: boolean;
    /**
     * Whether sticky positioning is enabled (desktop only)
     */
    stickyColumns?: boolean;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    isHeader: boolean;
    checked: boolean;
    indeterminate: boolean;
    stickyColumns: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    isHeader: boolean;
    checked: boolean;
    indeterminate: boolean;
    stickyColumns: boolean;
}>>> & Readonly<{
    onChange?: (() => any) | undefined;
}>, {
    indeterminate: boolean;
    isHeader: boolean;
    checked: boolean;
    stickyColumns: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
