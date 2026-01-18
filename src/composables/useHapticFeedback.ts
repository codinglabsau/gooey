/**
 * Composable for providing haptic feedback on touch interactions
 * Uses the Vibration API when available
 */
export function useHapticFeedback() {
  const isSupported = "vibrate" in navigator

  /**
   * Light haptic feedback - for selections, toggles
   */
  const light = () => {
    if (isSupported) {
      navigator.vibrate(10)
    }
  }

  /**
   * Medium haptic feedback - for confirmations, important actions
   */
  const medium = () => {
    if (isSupported) {
      navigator.vibrate(25)
    }
  }

  /**
   * Heavy haptic feedback - for errors, warnings
   */
  const heavy = () => {
    if (isSupported) {
      navigator.vibrate(50)
    }
  }

  /**
   * Success pattern - double tap
   */
  const success = () => {
    if (isSupported) {
      navigator.vibrate([10, 50, 10])
    }
  }

  /**
   * Error pattern - triple tap
   */
  const error = () => {
    if (isSupported) {
      navigator.vibrate([50, 50, 50, 50, 50])
    }
  }

  /**
   * Custom vibration pattern
   */
  const pattern = (vibrationPattern: number | number[]) => {
    if (isSupported) {
      navigator.vibrate(vibrationPattern)
    }
  }

  return {
    isSupported,
    light,
    medium,
    heavy,
    success,
    error,
    pattern,
  }
}
