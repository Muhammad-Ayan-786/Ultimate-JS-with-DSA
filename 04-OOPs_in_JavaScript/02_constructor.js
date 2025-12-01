/* <---------------------- Constructor in JavaScript ----------------------> */

// A constructor is a special method inside a class.
// It runs automatically whenever we create an object using 'new'.
// We use constructors to give initial values to the object.

class Student {
    constructor(name, age) {
        this.name = name;   // storing name inside the object
        this.age = age;     // storing age inside the object
    }

    info() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const s1 = new Student("Ayan", 17);
const s2 = new Student("Prince", 18);

s1.info(); // Name: Ayan, Age: 17
s2.info(); // Name: Prince, Age: 18

/* IMPORTANT:
1. Constructor runs automatically.
2. 'this' refers to the current object.
3. Constructor is used to initialize object properties.
4. You can only have ONE constructor in a class.
*/