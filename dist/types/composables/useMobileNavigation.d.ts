import { SwipeDirection } from "@vueuse/core";
import { type Ref } from "vue";
export interface SwipeNavigationOptions {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    threshold?: number;
    enabled?: boolean;
}
export declare function useMobileNavigation(): {
    isMobile: Ref<boolean, boolean>;
    isTablet: Ref<boolean, boolean>;
    isTouchDevice: Ref<boolean, boolean>;
    isSmallScreen: import("vue").ComputedRef<boolean>;
};
export declare function useSwipeNavigation(target: Ref<HTMLElement | null>, options?: SwipeNavigationOptions): {
    direction: import("vue").ComputedRef<SwipeDirection | null>;
    lengthX: import("vue").ComputedRef<number>;
};
export declare function useMobileBottomNav(): {
    isVisible: Ref<boolean, boolean>;
};
