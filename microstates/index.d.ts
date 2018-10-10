// Type definitions for microstates 0.10.0
// Project: https://github.com/microstates/microstates.js
// Definitions by: Taras Mankovski <taras@frontside.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export as namespace Microstates;

export interface FieldType<T, V> {
  initialize(): T;
  initialize(v: V): T;

  set(): T;
  set(value: V): T;
}

export interface NumberType extends FieldType<NumberType, Number> {
  increment(): NumberType;
  increment(step: Number): NumberType;

  decrement(): NumberType;
  decrement(step: Number): NumberType;
}

export interface StringType extends FieldType<StringType, String> {
  concat(): StringType;
  concat(str: String): StringType;
}

export interface Root {}

export function create<Number>(Type: typeof Number, value?: Number): NumberType;
export function create<String>(Type: typeof String, value?: String): StringType;
export function create<T, V>(
  Type: new (...args: any[]) => T,
  value?: V
): MappedToRoot<T>;

export type AllReturnRoot<R, T> = {
  [M in keyof T]: T[M] extends Function ? (...args: any[]) => R : R
};

// export type MappedToRoot<R, T> = {
//   [M in keyof T]: T[M] extends String
//     ? AllReturnRoot<R, T[M]>
//     : MappedToRoot<R, R>
// };

// export type MappedToRoot<R, T> = {
//   [M in keyof T]: T[M] extends Function ? () => R : AllReturnRoot<R, T[M]>
// };

export type MappedToRoot<R> = {
  [M in keyof R]: R[M] extends (NumberType | StringType)
    ? AllReturnRoot<MappedToRoot<R>, R[M]>
    : (R[M] extends Function ? (...args: any[]) => MappedToRoot<R> : R[M])
};
