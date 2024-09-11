declare function useNotification(): {
    info: (message: string) => void;
    success: (message: string) => void;
    warning: (message: string) => void;
    error: (message: Object) => void;
};
export { useNotification };
