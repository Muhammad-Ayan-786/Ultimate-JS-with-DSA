/* <--------- Methods & Static Methods in JavaScript ---------> */

/*
   	- Instance methods
   	- Static methods
   	- Why arrow functions should NOT be used as class methods

   	Methods are functions defined inside a class. They define behaviors for the objects created from the class.

   	Static methods belong to the class itself, not to any object instance. They are called on the class, not on objects.

	// USE STATIC METHOD WITH CLASS NAME ONLY CUZ IT BELONGS TO THE CLASS NOT TO OBJECTS.
*/

// Regular class method (recommended)
class Student {
	constructor(name, grade) {
		this.name = name;
		this.grade = grade;
	}

	// instance method
	describe() {
		console.log(`${this.name} is in grade ${this.grade}`);
	}

	// static method (belongs to class, not objects)
	static schoolInfo() {
		console.log("This is Green Valley High School");
	}
}

const s1 = new Student("Ayan", 10);
s1.describe(); // ✔ works (it's an instance method)

// s1.schoolInfo(); // ❌ Error: s1.schoolInfo is not a function

// Static method call
Student.schoolInfo(); // ✔ works (static method)



// Example with more methods and static method
class Huawei {
    name = undefined;
    ram = undefined;
    storage = undefined;
    color = undefined;
    backlight = undefined;

    constructor(Model, RAM, Stg, Clr, BLgh) {
        this.name = Model;
        this.ram = RAM;
        this.storage = Stg;
        this.color = Clr;
        this.backlight = BLgh;
    }

    name () { // Instance Method
        console.log(`Laptop Name: ${this.name}`);
    }

    ram () { // Instance Method
        console.log(`${this.name} has ${this.ram}GB RAM.`);
    }

    storage () { // Instance Method
        console.log(`${this.name} has ${this.storage}GB storage.`);
    }

    color () { // Instance Method
        console.log(`${this.name} is available in ${this.color} color.`);
    }

    backlight () { // Instance Method
        if (this.name === "Huawei MateBook X Pro" || this.name === "Huawei MateBook D14" || this.name === "Huawei MateBook D15")
        { // HAS BACKLIGHT KEYBOARD
            console.log(`${this.name} has ${this.backlight} backlight keyboard.`);
        }
        else
        { // DOES NOT HAVE BACKLIGHT KEYBOARD
        console.log(`${this.name} does not have backlight keyboard.`);
        }
    }

    // Static Method
    static company () { // THE HUWAEI COMPANY
        console.info("All the Laptops are from the HUAWEI company.");
    }
}

const matebookD14 = new Huawei("Huawei MateBook D14", 8, 512, "Silver", "Yes")
console.log(matebookD14);

const matebookXPro = new Huawei("Huawei MateBook X Pro", 16, 1024, "Space Gray", "Yes")
console.log(matebookXPro);

const matebookB14 = new Huawei("Huawei MateBook B14", 8, 512, "Black", "No")
console.log(matebookB14);

Huawei.company(); // Calling Static Method


/*
Why NOT use arrow functions inside classes?

Wrong: 
info = () => {}

Reason:
- Arrow functions bind `this` forever (no re-binding)
- They get recreated for each object (slower)

Use arrow functions only when needed.
*/