import type { BulletLegendItemInterface } from "@unovis/ts";
import type { Component } from "vue";
type __VLS_Props = {
    selector: string;
    index: string;
    items?: BulletLegendItemInterface[];
    valueFormatter?: (tick: number, i?: number, ticks?: number[]) => string;
    customTooltip?: Component;
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
