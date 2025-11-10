import type { ActionConfig } from "./types";
interface Props {
    /**
     * Whether this is a header cell (th) or body cell (td)
     */
    isHeader?: boolean;
    /**
     * Array of visible actions for this row (body cells only)
     */
    visibleActions?: ActionConfig[];
    /**
     * Row data object (body cells only)
     */
    row?: Record<string, any>;
    /**
     * Row index (body cells only)
     */
    rowIndex?: number;
    /**
     * Whether sticky positioning is enabled (desktop only)
     */
    stickyColumns?: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    isHeader: boolean;
    visibleActions: () => never[];
    stickyColumns: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "action-click": (action: ActionConfig, row: Record<string, any>) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    isHeader: boolean;
    visibleActions: () => never[];
    stickyColumns: boolean;
}>>> & Readonly<{
    "onAction-click"?: ((action: ActionConfig, row: Record<string, any>) => any) | undefined;
}>, {
    isHeader: boolean;
    stickyColumns: boolean;
    visibleActions: ActionConfig[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    actions?(_: {
        row: Record<string, any> | undefined;
        rowIndex: number | undefined;
        visibleActions: ActionConfig[];
    }): any;
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
