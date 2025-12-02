/* <---------------------- Constructor in JavaScript ----------------------> */

// A constructor is a special method inside a class.
// It runs automatically whenever we create an object using 'new'.
// We use constructors to give initial values to the object.

/* IMPORTANT:
1. Constructor runs automatically.
2. 'this' refers to the current object.
3. Constructor is used to initialize object properties.
4. You can only have ONE constructor in a class.
*/

/* TOPICS COVERED:
   - Understanding constructors in JavaScript classes
   - Parameterized constructor
   - Default values (JS doesn't have real non-parameterized or copy constructors)
   - How JS handles object copying
   - What 'new' keyword actually does
*/

// BASIC CLASS WITH CONSTRUCTOR
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

// DEFAULT VALUES (JavaScript style of "non-parameterized")
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

// JS HAS NO COPY CONSTRUCTOR — but we can mimic it
class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}

	// "copy constructor" style custom method
	static copy(bookObj) {
		return new Book(bookObj.title, bookObj.author);
	}
}

const bOriginal = new Book("Atomic Habits", "James Clear");
const bCopy = Book.copy(bOriginal);

console.log(bOriginal);
console.log(bCopy);

/* WHAT THE "new" KEYWORD DOES:
   1. Creates empty object: {}
   2. Links object to prototype
   3. Calls constructor and passes 'this'
   4. Returns the created object

   Example:
   const car = new Car("BMW", "Black");

   Behind the scenes:
   - an empty object is created
   - this = { }
   - properties assigned: this.brand = "BMW"
   - returned object is stored in 'car'
*/