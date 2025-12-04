/*
   This file demonstrates JavaScript OOP Inheritance
   - Parent class (Vehicle)
   - Child class (Car)
   - Overriding parent methods
   - Using super() in constructor and methods
   - Parent properties inheritance
   - Notes on private fields
*/

// ------------------- Parent Class -------------------
class Vehicle {
    // Public properties
    brand;
    color;

    // Private property
    #wheels;

    constructor(brand, color, wheels) {
        this.brand = brand;   // Public property
        this.color = color;   // Public property
        this.#wheels = wheels; // Private property
    }

    // Public method
    info() {
        console.log(`This is a ${this.color} ${this.brand} with ${this.#wheels} wheels.`);
    }

    // Getter for private field
    get wheels() {
        return this.#wheels;
    }
}

// ------------------- Child Class -------------------
class Car extends Vehicle {
    doors;  // Child property

    constructor(brand, color, wheels, doors) {
        // Call parent constructor to set brand, color, wheels
        super(brand, color, wheels);

        // Child specific property
        this.doors = doors;
    }

    // ------------------- Overriding Parent Method -------------------
    info() {
        // Call parent method using super
        super.info();

        // Add extra info
        console.log(`It also has ${this.doors} doors.`);
    }

    // Child method using parent property
    carSummary() {
        console.log(`Summary: ${this.brand} car in ${this.color} color, ${this.doors} doors, ${this.wheels} wheels.`);
    }
}

// ------------------- Usage -------------------
const vehicle1 = new Vehicle("Generic Brand", "Blue", 4);
vehicle1.info(); // Output: This is a Blue Generic Brand with 4 wheels.

console.log("\n");

// Child object
const myCar = new Car("BMW", "Black", 4, 4);
myCar.info(); 
/* Output:
   This is a Black BMW with 4 wheels.
   It also has 4 doors.
*/

myCar.carSummary(); // Output: Summary: BMW car in Black color, 4 doors, 4 wheels



// ------------------- Notes -------------------

// 1. Inheritance is done using "extends"
// 2. Child inherits all public properties and methods from parent
// 3. Private fields (#) are NOT inherited directly
//    - Use getters/setters in parent to access them
// 4. super() calls the parent constructor
// 5. Overriding allows child to provide its own version of parent methods
// 6. super.methodName() can call parent method from child
// 7. You can add new properties and methods in child class
// 8. This structure allows **code reuse** and **clean organization**

// ------------------- END -------------------