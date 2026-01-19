import type { BulletLegendItemInterface } from "@unovis/ts";
type __VLS_Props = {
    items: BulletLegendItemInterface[];
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    legendItemClick: (d: BulletLegendItemInterface, i: number) => any;
    "update:items": (payload: BulletLegendItemInterface[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onLegendItemClick?: ((d: BulletLegendItemInterface, i: number) => any) | undefined;
    "onUpdate:items"?: ((payload: BulletLegendItemInterface[]) => any) | undefined;
}>, {
    items: BulletLegendItemInterface[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
