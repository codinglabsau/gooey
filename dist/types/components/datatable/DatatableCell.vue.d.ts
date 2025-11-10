import type { ColumnConfig } from "./types";
interface Props {
    /**
     * Column configuration
     */
    column: ColumnConfig;
    /**
     * Row data object
     */
    row: Record<string, any>;
    /**
     * Whether this column is sticky
     */
    stickyColumns?: boolean;
    /**
     * Whether this is the last sticky column (for visual separator)
     */
    isLastSticky?: boolean;
    /**
     * CSS variable for sticky offset (e.g., "--column-id-offset")
     */
    stickyOffsetVar?: string;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    stickyColumns: boolean;
    isLastSticky: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    stickyColumns: boolean;
    isLastSticky: boolean;
}>>> & Readonly<{}>, {
    stickyColumns: boolean;
    isLastSticky: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Partial<Record<`row-${any}`, (_: {
    row: Record<string, any>;
    column: ColumnConfig;
    value: any;
}) => any>>>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
