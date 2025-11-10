import type { ButtonVariants } from "@/components/button";
type ActionHandler = () => void;
type ActionObject = {
    label: string | undefined;
    handler: ActionHandler;
};
type ActionType = ActionObject | ActionHandler | string | undefined;
type ConfirmDialogType = {
    title: string;
    description: string;
    variant?: ButtonVariants["variant"];
    action: ActionType;
    cancelAction?: ActionType;
};
declare function useConfirmDialog(): {
    confirmDialog: (confirmDialogConfig: ConfirmDialogType) => void;
    title: import("vue").Ref<string, string>;
    description: import("vue").Ref<string, string>;
    variant: import("vue").Ref<"default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined, "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined>;
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
