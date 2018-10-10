var Microstates = require('microstates');
Microstates.create(Number).initialize().increment().decrement().set().increment();
// Microstates.create(Number).initialize(10).increment(5).decrement(5).set(42).increment();
// Microstates.create(String).initialize('hello ').concat('world').set('hello world').concat();
// var Person = (function () {
//     function Person() {
//         this.name = Microstates.create(String);
//         this.age = Microstates.create(Number);
//     }
//     return Person;
// })();
// var person = Microstates.create(Person);
// var p2 = person.name.concat('Sir');
// var p3 = person.age.increment();
