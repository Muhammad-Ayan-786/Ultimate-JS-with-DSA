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