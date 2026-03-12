import { Component, InjectionKey, Plugin } from 'vue';
export interface GooeyOptions {
    link?: Component | string;
}
export declare const GOOEY_LINK_KEY: InjectionKey<Component | string>;
export declare const gooey: Plugin<GooeyOptions[]>;
