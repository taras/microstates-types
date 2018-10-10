// Type definitions for microstates 0.10.0
// Project: https://github.com/microstates/microstates.js
// Definitions by: Taras Mankovski <taras@frontside.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export as namespace Microstates;

export type Constructor<T> = new(...args: any[]) => T;

export interface Microstate {
  set(): Microstate
  set(value: any): Microstate
}

export interface NumberType extends Microstate {
  increment(): NumberType
  increment(step: Number): NumberType

  decrement(): NumberType
  decrement(step: Number): NumberType
}

export interface StringType extends Microstate {
  concat(): StringType
  concat(str: String): StringType
}

export function create<Number>(Type: typeof Number, value?: Number): NumberType 
export function create<String>(Type: typeof String, value?: String): StringType
export function create<T extends Constructor<T>>(Type: T, value?: any): T;

// export type FromValue<T> = T extends (value: infer U) => any ? U : any;

// export function from<T>(value: any): FromValue<T>