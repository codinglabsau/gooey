import { type Messages } from "@/components/toast/use-toast";
declare function useNotification(): {
    info: (message: string) => void;
    success: (message: string) => void;
    warning: (message: string) => void;
    error: (messages: Messages, showErrorKeys?: boolean, showErrorValues?: boolean) => void;
};
export { useNotification };
