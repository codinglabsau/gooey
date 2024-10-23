import type { CarouselProps, WithClassAsProps } from "./interface";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CarouselProps & WithClassAsProps>, {
    orientation: string;
}>>, {
    canScrollNext: import("vue").Ref<boolean, boolean>;
    canScrollPrev: import("vue").Ref<boolean, boolean>;
    carouselApi: import("vue").Ref<import("embla-carousel").EmblaCarouselType | undefined, import("embla-carousel").EmblaCarouselType | undefined>;
    carouselRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    orientation: "vertical" | "horizontal" | undefined;
    scrollNext: () => void;
    scrollPrev: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "init-api": (payload: import("embla-carousel").EmblaCarouselType | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<CarouselProps & WithClassAsProps>, {
    orientation: string;
}>>> & Readonly<{
    "onInit-api"?: ((payload: import("embla-carousel").EmblaCarouselType | undefined) => any) | undefined;
}>, {
    orientation: "vertical" | "horizontal";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {
        canScrollNext: boolean;
        canScrollPrev: boolean;
        carouselApi: import("embla-carousel").EmblaCarouselType | undefined;
        carouselRef: HTMLElement | undefined;
        orientation: "vertical" | "horizontal";
        scrollNext: () => void;
        scrollPrev: () => void;
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
