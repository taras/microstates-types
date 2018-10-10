import * as Microstates from 'microstates';

Microstates.create(Number).initialize().increment().decrement().set().increment();
Microstates.create(Number).initialize(10).increment(5).decrement(5).set(42).increment();

Microstates.create(String).initialize('hello ').concat('world').set('hello world').concat();

class Person {
  name = Microstates.create(String)
  age = Microstates.create(Number)
}

let person = Microstates.create(Person);

let p2 = person.name.concat('Sir');
let p3 = person.age.increment();