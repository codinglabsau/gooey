/**
 * Composable for providing haptic feedback on touch interactions
 * Uses the Vibration API when available
 */
export declare function useHapticFeedback(): {
    isSupported: boolean;
    light: () => void;
    medium: () => void;
    heavy: () => void;
    success: () => void;
    error: () => void;
    pattern: (vibrationPattern: number | number[]) => void;
};
