/* <------ Arithmetic Operators ------> */
let a = 10;
let b = 4;

console.log("a + b =", a + b) // Addition
console.log("a - b =", a - b) // Subtraction
console.log("a * b =", a * b) // Multiplication
console.log("a / b =", a / b) // Division
console.log("a % b =", a % b) // Modulus
console.log("a ** b =", a ** b) // Exponentiation

// Increment and Decrement
console.log("a++ =", a++) // Post-increment
console.log("++a =", ++a) // Pre-increment
console.log("a-- =", a--) // Post-decrement
console.log("--a =", --a) // Pre-decrement

console.log(`\n`);

/* <------ Assignment Operators ------> */
let c = 1;

c += 4; // same as c = c + 4
console.log("c =", c);
c -= 2; // same as c = c - 2
console.log("c =", c);
c *= 3; // same as c = c * 3
console.log("c =", c);
c /= 2; // same as c = c / 2
console.log("c =", c);

console.log(`\n`);

/* <------ Comparison Operators ------> */
let comp1 = 7;
let comp2 = 6;

console.log("comp1 == comp2 :", comp1 == comp2); // Equal to
console.log("comp1 != comp2 :", comp1 != comp2); // Not equal to
console.log("comp1 === comp2 :", comp1 === comp2); // Strict equal to
console.log("comp1 !== comp2 :", comp1 !== comp2); // Strict not equal to
console.log("comp1 > comp2 :", comp1 > comp2); // Greater than
console.log("comp1 < comp2 :", comp1 < comp2); // Less than
console.log("comp1 >= comp2 :", comp1 >= comp2); // Greater than or equal to
console.log("comp1 <= comp2 :", comp1 <= comp2); // Less than or equal to

console.log(`\n`);

/* <------ Logical Operators ------> */
let x = 5;
let y = 6;

console.log(x < y && x == 5); // Logical AND
console.log(x > y || x == 5); // Logical OR
console.log(!(x < y)); // Logical NOT

console.log(`\n`);


/*
    7 + 8 -> 15
    operands -> 7, 8
    operator -> +
    result -> 15
*/