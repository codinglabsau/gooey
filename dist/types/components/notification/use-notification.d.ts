export type ErrorBag = Record<string, string>;
export type ErrorFormat = "key" | "value" | "both";
declare function useNotification(): {
    info: (message: string) => void;
    success: (message: string) => void;
    warning: (message: string) => void;
    error: (errors: ErrorBag, errorFormat?: ErrorFormat) => void;
};
export { useNotification };
