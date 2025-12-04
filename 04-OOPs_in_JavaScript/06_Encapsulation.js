class Student {
    #marks;   // private
    #grade;   // private
    name;    // public

    constructor(name, marks) {
        this.name = name;      // public
        this.#marks = marks;   // private
        this.#updateGrade();   // private method
    }

    #updateGrade() {
        if (this.#marks >= 80) this.#grade = "A";
        else if (this.#marks >= 60) this.#grade = "B";
        else this.#grade = "C";
    }

    getMarks() {
        return this.#marks;
    }

    getGrade() {
        return this.#grade;
    }

    setMarks(m) {
        if (m >= 0 && m <= 100) {
            this.#marks = m;
            this.#updateGrade();
        }
    }
}

let s = new Student("Ayan", 85);

console.log(s.getMarks()); // 85
console.log(s.getGrade()); // A

s.setMarks(50);
console.log(s.getMarks()); // 50
console.log(s.getGrade()); // C

console.log(`\n\n`);

// Practice Quiz.
class Phone {
    // Private.
    #Battery;
    #PIN

    // Public.
    brand;
    model;

    // Constructor.
    constructor(brand, model, battery, pin) {
        this.brand = brand;
        this.model = model;
        this.#validateBattery(battery);
        this.#validatePIN(pin);
    }

    // Private Methods ...
    #validateBattery (battery) {
        if (battery >= 100)
            this.#Battery = 100;
        else if (battery < 0)
            this.#Battery = 0;
        else
            this.#Battery = battery;
    }

    #validatePIN (pin) {
        if (String(pin).length != 4)
            console.error("Invalid PIN !");
        else
            this.#PIN = pin;
    }

    // Getter
    get batteryStatus () {
        return `Battery: ${this.#Battery}%`
    }

    // Setter
    set updatePin (pin) {
        if (String(pin).length != 4) {
            console.log("Invalid PIN !");
        }
        else {
            this.#PIN = pin;
            console.log("PIN updated successfully");
        }
    }
}

const p = new Phone("Apple", "iPhone 15", 100, 9999); // Object

console.log(p.batteryStatus);    // Battery: 100%
p.updatePin = 1234;              // valid
p.updatePin = 77;                // ERROR
console.log(p.batteryStatus);