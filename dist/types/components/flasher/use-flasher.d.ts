import { ExternalToast } from 'vue-sonner';
export type ErrorBag = Record<string, string>;
export type ObjectFormat = "key" | "value" | "both";
declare function useFlasher(): {
    info: (message: string, data?: ExternalToast) => void;
    success: (message: string, data?: ExternalToast) => void;
    warning: (message: string, data?: ExternalToast) => void;
    error: (errors: ErrorBag, objectFormat?: ObjectFormat, data?: ExternalToast) => void;
    flash: (heading: string, data?: ExternalToast) => void;
};
export { useFlasher };
