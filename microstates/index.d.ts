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

type TConstructor<T> = new (...args: any[]) => T;
type TFunc<T> = (...args: any[]) => T;

export function create<Number>(Type: typeof Number, value?: Number): NumberType;
export function create<String>(Type: typeof String, value?: String): StringType;
export function create<T, V>(
  Type: TConstructor<T>,
  value?: V
): Contextualize<T>;

// for every property on T, define it as returning R
// the conditional is so that function are typed as
// functions returning R, instead of the property itself being of type R
export type Rooted<R, T> = {
  [M in keyof T]: T[M] extends Function ? TFunc<R> : R
};

export type Contextualize<R> = {
  // for every property on type R(which is root)
  [M in keyof R]: R[M] extends (NumberType | StringType)
    ? Rooted<Contextualize<R>, R[M]>
    : (R[M] extends Function
        ? (...args: InferArgs<R[M]>) => Contextualize<R>
        : R[M])
};

export type InferArgs<T> = T extends (...args: infer U) => any ? U : any;

export type ThisWrap<T> = Contextualize<T>;
