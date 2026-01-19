import type { CarouselProps, WithClassAsProps } from "./interface";
type __VLS_Props = CarouselProps & WithClassAsProps;
declare var __VLS_1: {
    canScrollNext: boolean;
    canScrollPrev: boolean;
    carouselApi: import("embla-carousel").EmblaCarouselType | undefined;
    carouselRef: HTMLElement | undefined;
    orientation: "vertical" | "horizontal" | undefined;
    scrollNext: () => void;
    scrollPrev: () => void;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {
    canScrollNext: import("vue").Ref<boolean, boolean>;
    canScrollPrev: import("vue").Ref<boolean, boolean>;
    carouselApi: import("vue").Ref<import("embla-carousel").EmblaCarouselType | undefined, import("embla-carousel").EmblaCarouselType | undefined>;
    carouselRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    orientation: "vertical" | "horizontal" | undefined;
    scrollNext: () => void;
    scrollPrev: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "init-api": (payload: import("embla-carousel").EmblaCarouselType | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onInit-api"?: ((payload: import("embla-carousel").EmblaCarouselType | undefined) => any) | undefined;
}>, {
    orientation: "horizontal" | "vertical";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
