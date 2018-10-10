This directory will eventually be added to https://github.com/DefinitelyTyped/DefinitelyTyped. 


To run the test in the microstates directory you have to close microstates repository to create the following directory structure.

/someplace/microstates // source of the microstates repo
/someplcae/types // this repo

Make sure you have `tsc` installed.

Go to `types/microstates` and run `tsc`. You should get an error like this

```
microstates-tests.ts(3,28): error TS2339: Property 'initialize' does not exist on type 'NumberType'.
microstates-tests.ts(4,28): error TS2339: Property 'initialize' does not exist on type 'NumberType'.
microstates-tests.ts(6,28): error TS2339: Property 'initialize' does not exist on type 'StringType'.
microstates-tests.ts(13,33): error TS2345: Argument of type 'typeof Person' is not assignable to parameter of type 'Constructor<typeof Person>'.
  Type 'Person' is not assignable to type 'typeof Person'.
    Property 'prototype' is missing in type 'Person'.
```