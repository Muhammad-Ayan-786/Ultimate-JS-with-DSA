/* <---------------------- Encapsulation in JavaScript ----------------------

Encapsulation = Bundling data + methods inside a class AND controlling access.

We use:
- Private fields (#data)
- Private methods (#method)
- Getters/Setters to safely read or update values
- Public methods for controlled interaction

Goal: Protect data from direct modification and maintain object safety.
--------------------------------------------------------------------------*/

/*
   ------------------------------------------------------------
   This file demonstrates **Encapsulation** in JavaScript.
   What you learn inside:
   - Private fields (#)
   - Private methods
   - Public methods
   - Getters & Setters
   - Constructor validation
   - Why encapsulation is useful
   ------------------------------------------------------------
*/


// ========================= STUDENT CLASS =========================
/*
   ▶ Encapsulation Idea:
     - #marks and #grade must be hidden
     - Only the class can calculate the grade internally
     - User can read marks/grade, but cannot change them directly
*/

class Student {

    #marks;   // private
    #grade;   // private
    name;     // public

    constructor(name, marks) {
        // Constructor CAN assign values to private fields
        this.name = name;
        this.#marks = marks;
        this.#updateGrade();   // private method
    }

    // ---------------- Private Method ----------------
    #updateGrade() {
        if (this.#marks >= 80) this.#grade = "A";
        else if (this.#marks >= 60) this.#grade = "B";
        else this.#grade = "C";
    }

    // ---------------- Public Methods ----------------
    getMarks() {              // normal getter method
        return this.#marks;
    }

    getGrade() {              // normal getter method
        return this.#grade;
    }

    setMarks(m) {             // normal setter method
        if (m >= 0 && m <= 100) {
            this.#marks = m;
            this.#updateGrade();
        } else {
            console.error("Invalid marks! Must be 0–100.");
        }
    }
}

// =================== STUDENT USAGE ===================
let s = new Student("Ayan", 85);

console.log(s.getMarks()); // 85
console.log(s.getGrade()); // A

s.setMarks(50);
console.log(s.getMarks()); // 50
console.log(s.getGrade()); // C

console.log("\n\n");



// ======================== PHONE CLASS =========================
/*
   ▶ Practice Quiz Based on Encapsulation
     - #Battery and #PIN must stay hidden
     - Validate battery and PIN inside constructor
     - Use private methods for validation
     - Provide one getter and one setter
*/

class Phone {

    // Private fields
    #Battery;
    #PIN;

    // Public fields
    brand;
    model;

    constructor(brand, model, battery, pin) {
        this.brand = brand;
        this.model = model;

        // Constructor calling private methods
        this.#validateBattery(battery);
        this.#validatePIN(pin);
    }


    // ----------------- Private Methods -----------------

    #validateBattery(battery) {
        /*
           IMPORTANT:
           Constructor CAN assign private values.
           But we validate first to keep the object clean.
        */

        if (battery > 100) this.#Battery = 100;
        else if (battery < 0) this.#Battery = 0;
        else this.#Battery = battery;
    }


    #validatePIN(pin) {
        if (String(pin).length !== 4) {
            console.error("Invalid PIN!");
        } else {
            this.#PIN = pin;
        }
    }


    // ---------------------- Getter ----------------------
    get batteryStatus() {
        // Getter allows READING private fields safely
        return `Battery: ${this.#Battery}%`;
    }


    // ---------------------- Setter ----------------------
    set updatePin(pin) {
        // Allow UPDATING private field with validation
        if (String(pin).length !== 4) {
            console.error("Invalid PIN!");
        } else {
            this.#PIN = pin;
            console.log("PIN updated successfully");
        }
    }
}

// ======================== PHONE USAGE =========================

const p = new Phone("Apple", "iPhone 15", 100, 9999);

console.log(p.batteryStatus);  // Battery: 100%

p.updatePin = 1234;            // Valid PIN
p.updatePin = 77;              // Invalid PIN

console.log(p.batteryStatus);  // Battery unchanged


// ======================== KEY NOTES =========================
/*
  1. Constructor CAN assign private fields (#)
     ✔ this.#PIN = pin;
     ✔ this.#Battery = battery;

  2. Private fields (#something) CANNOT be accessed outside class
     ❌ p.#PIN  → ERROR

  3. Getters:
       - Used to READ private fields safely
       - Called without parentheses
         ✔ p.batteryStatus

  4. Setters:
       - Used to UPDATE private fields safely
       - Called like assigning a value
         ✔ p.updatePin = 1234;

  5. Methods vs Getters/Setters:
       - Methods = full control (your choice)
       - Getter/Setter = clean, property-like access
*/