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

  goUnderCover(name: string, age: number) {
    return this.age.set(age); // .firstName.set(name);
  }
}

let person = Microstates.create(Person, {});
let p2 = person.firstName.concat("Sir").firstName.concat("Sir");
let p3 = person.age.increment().briefcase.weight.increment();
let p4 = person.goUnderCover("hi", 42).age.increment();

let z = person.age;
let x = person.age.increment();

let pp = new Person();

class Widget {
  color: String;

  bright() {
    return `Bright ${this.color}`;
  }
}

class Order {
  buyer: string;
  widget: Widget;
}

function testWrap(widget: Microstates.AllReturnRoot<Order, Widget>) {
  let color: Order = widget.color;

  return widget.color.buyer;
}

function testWrapAgain(widget: Microstates.MappedToRoot<Order, Widget>) {
  let color: Microstates.AllReturnRoot<Order, String> = widget.color;
  let order: Order = widget.bright();
  return widget.color.length;
}

// person.firstName

// let w = new Widget()
// w.colorx = 'Green'
