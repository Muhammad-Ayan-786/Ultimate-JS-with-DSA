/* <---------------------- Constructor in JavaScript ----------------------> */

// A constructor is a special method inside a class.
// It runs automatically whenever we create an object using 'new'.
// We use constructors to give initial values to the object.


/* ____________ BASIC CLASS WITH CONSTRUCTOR ____________ */
class Car {
	constructor(brand, color) {
		this.brand = brand;
		this.color = color;
	}

	info() {
		console.log(`Car: ${this.brand}, Color: ${this.color}`);
	}
}

const c1 = new Car("Bugatti", "Yellow");
c1.info();



/* ____________ PARAMETERIZED CONSTRUCTOR ____________ */
class Laptop {
	constructor(brand, ram, storage) {
		this.brand = brand;
		this.ram = ram;
		this.storage = storage;
	}
}

const dell = new Laptop("Dell", "16GB", "512GB SSD");
console.log(dell);



/* ____________ DEFAULT VALUES (JavaScript style of "non-parameterized") ____________ */
class Bike {
	constructor(brand = "Unknown", color = "Black") {
		this.brand = brand;
		this.color = color;
	}
}

const b1 = new Bike(); // Uses default values
const b2 = new Bike("Yamaha", "Red");

console.log(b1);
console.log(b2);



/* ------------------------- IMPORTANT POINTS ------------------------- *
1. Constructor runs automatically.
2. 'this' refers to the current object being created.
3. Constructors initialize the object's properties.
4. A class can have ONLY ONE constructor.

--------------------------- TOPICS COVERED --------------------------
- What constructors are in JavaScript classes
- Parameterized constructors
- Default parameter values (JS does not support true non-parameterized or copy constructors)
- How JS handles object copying
- How the 'new' keyword works

---------------------- JS HAS NO COPY CONSTRUCTOR --------------------

--------------------- WHAT THE 'new' KEYWORD DOES --------------------
1. Creates an empty object → {}
2. Links the object to the class prototype
3. Calls the constructor with 'this'
4. Returns the created object

EXAMPLE:
const car = new Car("BMW", "Black");

Behind the scenes:
- an empty object is created
- this = { }
- properties assigned: this.brand = "BMW"
- the constructed object is returned and stored in 'car'

* ------------------------------------------------------------------ */