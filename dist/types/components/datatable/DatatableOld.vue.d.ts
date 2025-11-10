import type { DatatableProps } from "./types";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DatatableProps>, {
    tableClasses: string;
    actions: () => never[];
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "state-change": (state: any) => void;
    "selection-change": (selectedRows: Set<number>) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DatatableProps>, {
    tableClasses: string;
    actions: () => never[];
}>>> & Readonly<{
    "onState-change"?: ((state: any) => any) | undefined;
    "onSelection-change"?: ((selectedRows: Set<number>) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Partial<Record<`row-${any}`, (_: {
    row: Record<string, any>;
    column: import("./types").ColumnConfig;
    value: any;
}) => any>> & {
    "row-actions"?(_: {
        row: Record<string, any> | undefined;
        rowIndex: number | undefined;
        visibleActions: import("./types").ActionConfig[];
    }): any;
    empty?(_: {}): any;
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
