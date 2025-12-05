/* <---------------------- Polymorphism in JavaScript ----------------------

Polymorphism = Same method name, different behaviors.

This file demonstrates:
- Parent class
- Child classes overriding parent methods
- Using polymorphism through an array of mixed objects

----------------------------------------------------------------------> */

class Animal {
    speak() {
        console.log("This animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() { // overriding parent method
        console.log("Dog says: Woof!");
    }
}

class Cat extends Animal {
    speak() { // overriding parent method
        console.log("Cat says: Meow!");
    }
}

const animals = [
    new Animal(),
    new Dog(),
    new Cat()
];

for (let a of animals) {
    a.speak();   // SAME method name → DIFFERENT output
}

// Output:
// This animal makes a sound.
// Dog says: Woof!
// Cat says: Meow!