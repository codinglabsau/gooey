import type { CarouselEmits, CarouselProps } from "./interface";
declare const useProvideCarousel: (args_0: CarouselProps, emits: CarouselEmits) => {
    carouselRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    carouselApi: import("vue").Ref<import("embla-carousel").EmblaCarouselType | undefined, import("embla-carousel").EmblaCarouselType | undefined>;
    canScrollPrev: import("vue").Ref<boolean, boolean>;
    canScrollNext: import("vue").Ref<boolean, boolean>;
    scrollPrev: () => void;
    scrollNext: () => void;
    orientation: "horizontal" | "vertical" | undefined;
};
declare function useCarousel(): {
    carouselRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    carouselApi: import("vue").Ref<import("embla-carousel").EmblaCarouselType | undefined, import("embla-carousel").EmblaCarouselType | undefined>;
    canScrollPrev: import("vue").Ref<boolean, boolean>;
    canScrollNext: import("vue").Ref<boolean, boolean>;
    scrollPrev: () => void;
    scrollNext: () => void;
    orientation: "horizontal" | "vertical" | undefined;
};
export { useCarousel, useProvideCarousel };
