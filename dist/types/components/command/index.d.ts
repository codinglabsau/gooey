import type { Ref } from "vue";
export { default as Command } from "./Command.vue";
export { default as CommandDialog } from "./CommandDialog.vue";
export { default as CommandEmpty } from "./CommandEmpty.vue";
export { default as CommandGroup } from "./CommandGroup.vue";
export { default as CommandInput } from "./CommandInput.vue";
export { default as CommandItem } from "./CommandItem.vue";
export { default as CommandList } from "./CommandList.vue";
export { default as CommandSeparator } from "./CommandSeparator.vue";
export { default as CommandShortcut } from "./CommandShortcut.vue";
export declare const useCommand: <T extends {
    allItems: Ref<Map<string, string>>;
    allGroups: Ref<Map<string, Set<string>>>;
    filterState: {
        search: string;
        filtered: {
            count: number;
            items: Map<string, number>;
            groups: Set<string>;
        };
    };
} | null | undefined = {
    allItems: Ref<Map<string, string>>;
    allGroups: Ref<Map<string, Set<string>>>;
    filterState: {
        search: string;
        filtered: {
            count: number;
            items: Map<string, number>;
            groups: Set<string>;
        };
    };
}>(fallback?: T | undefined) => T extends null ? {
    allItems: Ref<Map<string, string>>;
    allGroups: Ref<Map<string, Set<string>>>;
    filterState: {
        search: string;
        filtered: {
            count: number;
            items: Map<string, number>;
            groups: Set<string>;
        };
    };
} | null : {
    allItems: Ref<Map<string, string>>;
    allGroups: Ref<Map<string, Set<string>>>;
    filterState: {
        search: string;
        filtered: {
            count: number;
            items: Map<string, number>;
            groups: Set<string>;
        };
    };
}, provideCommandContext: (contextValue: {
    allItems: Ref<Map<string, string>>;
    allGroups: Ref<Map<string, Set<string>>>;
    filterState: {
        search: string;
        filtered: {
            count: number;
            items: Map<string, number>;
            groups: Set<string>;
        };
    };
}) => {
    allItems: Ref<Map<string, string>>;
    allGroups: Ref<Map<string, Set<string>>>;
    filterState: {
        search: string;
        filtered: {
            count: number;
            items: Map<string, number>;
            groups: Set<string>;
        };
    };
};
export declare const useCommandGroup: <T extends {
    id?: string;
} | null | undefined = {
    id?: string;
}>(fallback?: T | undefined) => T extends null ? {
    id?: string;
} | null : {
    id?: string;
}, provideCommandGroupContext: (contextValue: {
    id?: string;
}) => {
    id?: string;
};
