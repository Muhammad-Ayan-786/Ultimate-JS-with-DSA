/* <___________________ OOPs - Object Oriented Programming ___________________> */

// Class - Blueprint for creating objects
// Object - Instance of a class

class Vehicle {
    brand = undefined; // Property to hold brand name
    color = undefined; // Property to hold color

    constructor(brand, color) { // Special method to initialize objects
        this.brand = brand; // Assigning brand
        this.color = color; // Assigning color
    }

    info = () => { // Method to display vehicle information
        console.log(`You have a ${this.brand} in ${this.color} color.`);
    }
}

const bugatti = new Vehicle("Bugatti", "Yellow"); // Creating an object of Vehicle class
bugatti.info(); // Output: You have a Bugatti in Yellow color.

const bmw = new Vehicle("BMW", "Black");
bmw.info(); // Output: You have a BMW in Black color.