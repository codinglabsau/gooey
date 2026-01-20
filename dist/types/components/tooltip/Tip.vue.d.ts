import { type TooltipRootProps } from "reka-ui";
interface ExtendedTooltipRootProps extends TooltipRootProps {
    tooltip?: string;
    indicator?: boolean;
}
declare var __VLS_20: {}, __VLS_28: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_20) => any;
} & {
    tooltip?: (props: typeof __VLS_28) => any;
};
declare const __VLS_base: import("vue").DefineComponent<ExtendedTooltipRootProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<ExtendedTooltipRootProps> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {
    delayDuration: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
