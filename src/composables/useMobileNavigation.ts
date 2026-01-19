import { SwipeDirection, useMediaQuery, useSwipe } from "@vueuse/core"
import { computed, onMounted, onUnmounted, ref, type Ref } from "vue"

export interface SwipeNavigationOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  threshold?: number
  enabled?: boolean
}

export function useMobileNavigation() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)")
  const isTouchDevice = ref(false)

  onMounted(() => {
    isTouchDevice.value = "ontouchstart" in window || navigator.maxTouchPoints > 0
  })

  const isSmallScreen = computed(() => isMobile.value || isTablet.value)

  return {
    isMobile,
    isTablet,
    isTouchDevice,
    isSmallScreen,
  }
}

export function useSwipeNavigation(
  target: Ref<HTMLElement | null>,
  options: SwipeNavigationOptions = {}
) {
  const { threshold = 50, enabled = true, onSwipeLeft, onSwipeRight } = options

  const { direction, lengthX } = useSwipe(target, {
    passive: true,
    onSwipeEnd() {
      if (!enabled) return

      if (Math.abs(lengthX.value) >= threshold) {
        if (direction.value === SwipeDirection.LEFT && onSwipeLeft) {
          onSwipeLeft()
        } else if (direction.value === SwipeDirection.RIGHT && onSwipeRight) {
          onSwipeRight()
        }
      }
    },
  })

  return {
    direction,
    lengthX,
  }
}

export function useMobileBottomNav() {
  const isVisible = ref(true)
  let lastScrollY = 0
  let ticking = false

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        const scrollDelta = currentScrollY - lastScrollY

        // Hide bottom nav when scrolling down, show when scrolling up
        if (scrollDelta > 10 && currentScrollY > 100) {
          isVisible.value = false
        } else if (scrollDelta < -10) {
          isVisible.value = true
        }

        lastScrollY = currentScrollY
        ticking = false
      })

      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
  })

  return {
    isVisible,
  }
}
