type OptionsConfig = {
    colors?: {
        primary?: {
            [key: string]: string;
        };
    };
};
declare const theme: {
    (options: OptionsConfig): {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config> | undefined;
    };
    __isOptionsFunction: true;
};
export default theme;
