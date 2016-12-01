// Generated by dts-bundle v0.6.1
// Dependencies for this module:
//   ../redux
//   ../@stejar/di

import { Reducer, Store as ReduxStorer, Unsubscribe } from "redux";
import { ServiceManager } from "@stejar/di";

export class Store<S> {
        /**
            * @type {ReduxStorer<S>}
            */
        protected store: ReduxStorer<S>;
        /**
            * @constructor
            */
        constructor();
        /**
            * @param store
            */
        bootRedux(store: ReduxStorer<S>): void;
        /**
            * @param action
            * @param payload
            * @returns {A}
            */
        dispatch<P>(action: Action<P> | string | any, payload?: P): any;
        /**
            * @returns {S}
            */
        getState(): S;
        /**
            * @param listener
            * @returns {Unsubscribe}
            */
        subscribe(listener: () => void): Unsubscribe;
        /**
            * @param nextReducer
            */
        replaceReducer(nextReducer: Reducer<S>): void;
}

export interface Action<P> {
    type: string;
    payload?: P;
}

export abstract class ReducerStore<S> implements StoreAware {
        /**
            * @type {Store}
            */
        protected _store: Store<S>;
        /**
            * @param store
            */
        setStore(store: Store<S>): void;
        /**
            * @returns {S}
            */
        getState(): S;
        /**
            * @param name
            * @param action
            * @returns {ReducerStore}
            */
        protected bind(name: string, action: Function): this;
}

export interface StoreAware {
    setStore(store: Store<any>): void;
}

export abstract class AbstractActions<S> implements StoreAware {
        protected store: Store<S>;
        getState(): S;
        /**
            * @returns {S}
            */
        readonly state: S;
        dispatch<P>(a: any, b?: P): any;
        /**
            * @param props
            * @param context
            */
        constructor();
        /**
            * @param store
            */
        setStore(store: Store<any>): void;
}

export function combineStores(serviceManager: ServiceManager): (...stores: Function[]) => {};

export class Selector {
        /**
            * @param selector
            * @param left
            * @param right
            * @returns {(state:any, props?:any)=>(any|any|{})}
            */
        static if(selector: Function, left: any, right?: any): (state: any, props?: any) => any;
        /**
            * @param args
            * @returns {(state:any, props?:any)=>{}}
            */
        static fromState(...args: any[]): (state: any, props?: any) => {};
}

