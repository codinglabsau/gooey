type ActionHandler = () => void;
type ActionObject = {
    label: string | undefined;
    handler: ActionHandler;
};
type ActionType = ActionObject | ActionHandler | string | undefined;
type AlertType = {
    title: string;
    description: string;
    action: ActionType;
    cancelAction?: ActionType;
};
declare function useConfirmDialog(): {
    confirmDialog: (config: AlertType) => void;
    title: import("vue").Ref<string, string>;
    description: import("vue").Ref<string, string>;
    isOpen: import("vue").Ref<boolean, boolean>;
    close: () => void;
    cancelButton: import("vue").Ref<{
        label: string | undefined;
        handler: ActionHandler;
    }, ActionObject | {
        label: string | undefined;
        handler: ActionHandler;
    }>;
    actionButton: import("vue").Ref<{
        label: string | undefined;
        handler: ActionHandler;
    }, ActionObject | {
        label: string | undefined;
        handler: ActionHandler;
    }>;
};
export { useConfirmDialog };
