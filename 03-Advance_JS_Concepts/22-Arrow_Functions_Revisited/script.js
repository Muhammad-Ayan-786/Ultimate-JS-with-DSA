/* =====================================================
            ARROW FUNCTIONS IN JAVASCRIPT
===================================================== */

/*
    Arrow functions provide a shorter syntax
    for writing functions.
*/



/* =====================================================
   BASIC ARROW FUNCTION SYNTAX
===================================================== */

/* -----------------
1️⃣ Classical way
----------------- */

const sayHello = () => {
    console.log("Hello");
};
sayHello();



/* -----------------
2️⃣ Single-line function
----------------- */

const sayHello2 = () => console.log("Hello");
sayHello2();



/* -----------------
3️⃣ Multiple statements (Block required)
----------------- */

/*
    ❌ Writing multiple statements on one line
    is NOT recommended.
*/

const sayHello3 = () => {
    console.log("Hello");
    console.log("Hi");
};
sayHello3();



/* =====================================================
   PARAMETERS IN ARROW FUNCTIONS
===================================================== */

/* -----------------
Single parameter
----------------- */

/*
    Parentheses can be removed
    if there is ONLY ONE parameter.
*/

const greetUser = name => console.log(`Hello ${name}`);
greetUser("Ayan");



/* -----------------
Multiple parameters
----------------- */

/*
    Parentheses are REQUIRED
    when there are multiple parameters.
*/

const greetFullName = (firstName, lastName) =>
    console.log(`Hello ${firstName} ${lastName}`);

greetFullName("Mohammad", "Ayan");



/* =====================================================
   DEFAULT PARAMETERS
===================================================== */

const greetGuest = (name = "Guest") =>
    console.log(`Hello ${name}`);

greetGuest();
greetGuest("Ayan");



/* =====================================================
   THIS KEYWORD & ARROW FUNCTIONS
===================================================== */

/*
    The value of `this` depends on HOW a function is called,
    not where it is written.
*/



/* =====================================================
   this INSIDE AN OBJECT METHOD
===================================================== */

const developerInfo = {
    developer: "Ayan",
    role: "JS Developer",
    experience: 2,

    showDetails: function () {
        console.log(
            `${this.developer} is a ${this.role} with ${this.experience} years of experience`
        );
        console.log(this); // points to developerInfo object
    }
};

developerInfo.showDetails();



/* =====================================================
   PROBLEM — this INSIDE A NESTED FUNCTION
===================================================== */

/*
    When a regular function is used inside another function,
    `this` points to the GLOBAL object (window).
*/

const developerIssue = {
    developer: "Ayan",
    role: "JS Developer",
    experience: 2,

    showDetails: function () {
        setTimeout(function () {
            console.log(this); // window object
            console.log(this.developer); // undefined
        }, 1000);
    }
};

developerIssue.showDetails();



/* =====================================================
   HOW TO FIX this PROBLEM
===================================================== */



/* -----------------
SOLUTION 1 — Store this in a variable
----------------- */

const developerFix1 = {
    developer: "Ayan",
    role: "JS Developer",
    experience: 2,

    showDetails: function () {
        const self = this; // 'self' is a variable which points to 'developerFix1' object (this)

        setTimeout(function () {
            console.log(
                `Solution 1 → ${self.developer} is a ${self.role}`
            );
        }, 1000);
    }
};

developerFix1.showDetails();



/* -----------------
SOLUTION 2 — Arrow Function (BEST)
----------------- */

/*
    Arrow functions do NOT have their own `this`.
    They inherit `this` from their lexical parent.
*/

const developerFix2 = {
    developer: "Ayan",
    role: "JS Developer",
    experience: 2,

    showDetails: function () {
        setTimeout(() => {
            console.log(this); // refers to developerFix2 object
            console.log(
                `Solution 2 → ${this.developer} is a ${this.role}`
            );
        }, 1000);
    }
};

developerFix2.showDetails();



/* =====================================================
   IMPORTANT RULES (REMEMBER THIS)
===================================================== */

/*
    ✔ Arrow functions do NOT have their own `this`
    ✔ Arrow functions use lexical `this`
    ✔ Regular functions create their own `this`
    ✔ Use arrow functions for callbacks
    ✔ Do NOT use arrow functions as object methods
*/


/* =====================================================
   THIS KEYWORD — QUICK NOTES
===================================================== */

/*
1️⃣ Inside an Object (Method)
        - If a function is called as a method of an object,
        'this' refers to that object.
    Example:
        const obj = { name: "Ayan", greet() { console.log(this.name); } }
        obj.greet(); // Ayan

2️⃣ Regular Function / Global
        - If a function is called alone (not as a method),
        'this' refers to the global object (window in browsers).
        - In strict mode, it will be undefined.
    Example:
        function show() { console.log(this); }
        show(); // window

3️⃣ Inside an Event
        - When used in an event handler, 'this' refers to
        the element that received the event.
    Example:
        btn.addEventListener("click", function() {
            console.log(this); // <button> element
        });

⚠️  Arrow functions do NOT have their own 'this'.
    - They take 'this' from their parent (lexical) scope.
*/