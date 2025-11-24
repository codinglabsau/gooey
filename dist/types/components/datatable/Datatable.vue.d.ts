import type { DatatableProps } from "./types";
import type { ColumnConfig } from "@/components/datatable/types";
import type { DatatableState } from "@/components/datatable/useDatatable";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<DatatableProps>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<DatatableProps>>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Partial<Record<string, (_: {
    column: ColumnConfig;
    table: DatatableState;
}) => any>> & Partial<Record<string, (_: {
    column: ColumnConfig;
    table: DatatableState;
}) => any>> & Partial<Record<string, (_: {
    column: ColumnConfig;
    row: Record<string, any>;
    table: DatatableState;
}) => any>> & Partial<Record<string, (_: {
    row: Record<string, any>;
    table: DatatableState;
}) => any>> & {
    topbar?(_: {
        table: DatatableState;
        filters: import("vue").Ref<Record<string, import("./useDatatableFiltering").FilterState>, Record<string, import("./useDatatableFiltering").FilterState>>;
        activeFilters: import("vue").ComputedRef<Record<string, import("./useDatatableFiltering").FilterState>>;
        activeFilterCount: import("vue").ComputedRef<number>;
        isAnyFilterActive: import("vue").ComputedRef<boolean>;
        filter: (id: string, value: any) => void;
        filterWithoutApplying: (id: string, value: any) => void;
        applyFilters: () => void;
        resetFilter: (id: string) => void;
        clearFilters: () => void;
        setSearch: (query: string) => void;
        clearSearch: () => void;
        search: import("vue").Ref<string, string>;
        hasSearch: () => boolean;
        appliedQuery: import("vue").ComputedRef<Record<string, any>>;
        filterConfigs: import("./types").FilterConfig[] | undefined;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
