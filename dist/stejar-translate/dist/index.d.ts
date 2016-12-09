// Generated by dts-bundle v0.6.1
// Dependencies for this module:
//   ../moment
//   ../@stejar/redux
//   ../react
//   ../@stejar/react
//   ../@stejar/reselect

import { LocaleSpecification } from "moment";
import { Store } from "@stejar/redux";
import { HTMLAttributes } from "react";
import { PureComponent } from "@stejar/react";
import { ReducerStore } from "@stejar/redux";
import { Selector } from "@stejar/reselect";

export interface TranslatorAdapterContract {
    /**
      * @param code
      */
    load(code: string): Promise<{
        [key: string]: string;
    }>;
}

export class TranslatorService {
        protected store: Store<any>;
        protected adapter: TranslatorAdapterContract;
        /**
            * @type {boolean}
            */
        protected debug: boolean;
        /**
            * @param store
            * @param adapter
            */
        constructor(store: Store<any>, adapter: TranslatorAdapterContract);
        /**
            * @returns {void}
            */
        enableDebug(): void;
        /**
            * @returns {void}
            */
        disableDebug(): void;
        /**
            * @param localeCode
            * @returns {boolean}
            */
        isLocaleLoaded(localeCode: string): boolean;
        /**
            * @param localeCode
            * @param config
            * @returns {TranslatorService}
            */
        registerNumbersLocale(localeCode: string, config: any): this;
        /**
            * @param localeCode
            * @param config
            * @returns {TranslatorService}
            */
        registerDateLocale(localeCode: string, config?: LocaleSpecification): this;
        /**
            * @param localeCode
            */
        changeLocale(localeCode: string): void;
        /**
            * @param localeCode
            * @returns {Promise<TResult>}
            */
        loadLocale(localeCode: string): Promise<void>;
        /**
            * @param label
            * @returns {string}
            */
        translate(label: string): string;
}

export interface TranslateProps extends HTMLAttributes<any> {
    [key: string]: any;
    [key: number]: any;
    catalogs?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    _$locale?: string;
    value?: any;
}
export class Translate extends PureComponent<TranslateProps, {}> {
    /**
      * @returns {JSX.Element}
      */
    render(): JSX.Element;
}

export interface LocalizedTitleProps extends HTMLAttributes<any> {
    [key: string]: any;
    [key: number]: any;
    translatorService?: TranslatorService;
}
export class LocalizedTitle extends PureComponent<LocalizedTitleProps, {}> {
    /**
      * @returns {JSX.Element}
      */
    render(): JSX.Element;
}

export interface LocaleStoreState {
        catalogs: {
                [locale: string]: {
                        [label: string]: string;
                };
        };
        currentLocale: string;
}
export class LocaleStore extends ReducerStore<{
        LocaleStore: LocaleStoreState;
}> {
        /**
            * @constructor
            */
        constructor();
        /**
            * @param state
            * @param payload
            * @returns {{}&U&AppConfig}
            */
        protected loadedLocale(state: LocaleStoreState, payload: LoadedLocaleAction): {} & LocaleStoreState & {
                catalogs: {} & {
                        [locale: string]: {
                                [label: string]: string;
                        };
                } & {
                        [x: string]: {
                                [label: string]: string;
                        };
                };
        };
        /**
            * @param state
            * @param payload
            * @returns {{}&U&AppConfig}
            */
        protected changedLocale(state: LocaleStoreState, payload: ChangedLocaleAction): {} & LocaleStoreState & {
                currentLocale: string;
        };
        /**
            * @returns {string}
            */
        getCurrentLocale(): string;
}

export class LoadedLocaleAction {
    locale: string;
    catalog: {
        [label: string]: string;
    };
    /**
      * @param locale
      * @param catalog
      */
    constructor(locale: string, catalog: {
        [label: string]: string;
    });
}

export class ChangedLocaleAction {
    locale: string;
    /**
      * @param locale
      */
    constructor(locale: string);
}

export class LocaleQueries {
        /**
            * @type {Reselect.Selector<TInput, string>}
            */
        static getCurrentLocale: Selector<{
                LocaleStore: LocaleStoreState;
        }, string>;
        /**
            * @type {Reselect.Selector<TInput, string>}
            */
        static hasLocaleBeenLoaded: Selector<{
                LocaleStore: LocaleStoreState;
        }, boolean>;
        /**
            * @type {Reselect.Selector<TInput, string>}
            */
        static getLocaleCatalog: Selector<{
                LocaleStore: LocaleStoreState;
        }, {
                [key: string]: string;
        }>;
        /**
            * @type {Reselect.Selector<TInput, string>}
            */
        static getLocaleCatalogs: Selector<{
                LocaleStore: LocaleStoreState;
        }, {
                [key: string]: {
                        [key: string]: string;
                };
        }>;
}

