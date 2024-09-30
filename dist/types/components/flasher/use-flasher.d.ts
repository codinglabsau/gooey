export type ErrorBag = Record<string, string>;
export type ObjectFormat = "key" | "value" | "both";
declare function useFlasher(): {
    info: (message: string) => void;
    success: (message: string) => void;
    warning: (message: string) => void;
    error: (errors: ErrorBag, objectFormat?: ObjectFormat) => void;
};
export { useFlasher };
