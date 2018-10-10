import * as Microstates from 'microstates';

Microstates.create(Number).initialize().increment().decrement().set().increment();
Microstates.create(Number).initialize(10).increment(5).decrement(5).set(42).increment();

Microstates.create(String).initialize('hello ').concat('world').set('hello world').concat();

class Person {
  firstName = Microstates.create(String)
  age = Microstates.create(Number)

  goUnderCover(name: string, age: number): Person & Microstates.Microstate<Person,any> {
    return this
      .age.set(age)
      .firstName.set(name)
  }
}

let person = Microstates.create(Person, {});

let p2 = person.firstName.concat('Sir');
let p3 = person.age.increment();

// person.firstName
// class Widget {
//   color: String
// }

// let w = new Widget()
// w.colorx = 'Green'