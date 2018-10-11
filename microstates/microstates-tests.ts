import * as Microstates from "microstates";

Microstates.create(Number)
  .initialize()
  .increment()
  .decrement()
  .set()
  .increment();
Microstates.create(Number)
  .initialize(10)
  .increment(5)
  .decrement(5)
  .set(42)
  .increment();

Microstates.create(String)
  .initialize("hello ")
  .concat("world")
  .set("hello world")
  .concat();

class Briefcase {
  weight = Microstates.create(Number);
}

class Person {
  firstName = Microstates.create(String);
  age = Microstates.create(Number);
  briefcase = Microstates.create(Briefcase);

  goUnderCover(this: Microstates.ThisWrap<Person>, name: string, age: number) {
    // let self: Microstates.MappedToRoot<Person> = Microstates.MappedToRoot<
    //   Person
    // >(this);
    // let foo = Microstates.wrapped(this as Person);
    // let foo = Microstates.wrapped(this)
    return this.age.set(age).firstName.set(name);
  }

  // wrapped() {
  //   // @ts-ignore
  //   return Microstates.wrapped(this)
  // }
}

let person = Microstates.create(Person, {});
let p2 = person.firstName.concat("Sir").firstName.concat("Sir");
let p3 = person.age.increment().briefcase.weight.increment();
let p4 = person.goUnderCover("hi", 42).age.increment();
