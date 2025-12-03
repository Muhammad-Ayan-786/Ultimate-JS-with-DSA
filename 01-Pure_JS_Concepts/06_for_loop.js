/* <--------------- for Loop ---------------> */

/*
Syntax: for (statement1 ; statement2 ; statement3) { // Code to be executed}

-> Statement 1 is executed one time
-> Statement 2 is the condition base on which the loop runs (loop body is executed)
-> Statement 3 is executed everytime the loop body is executed.
*/

for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log(`\n`);

// Program to add first n natural numbers :
let n = 3;
let sum = 0;

for (let i = 0; i < n; i++) {
    sum += (i + 1);
    // console.log((i+1) + "+");
}

console.log("Sum of first " + n + " natural numbers is " + sum);

console.log(`\n`);

/* <--------------- for in Loop ---------------> */
const obj = {
    Harry: 90,
    Ayan: 98,
    Azmeer: 65,
    Hamar: 45,
}

for (const a in obj) {
    console.log("Marks of " + a + " are " + obj[a]);
    // a print the key, & obj[a] prints the value.
}

console.log(`\n`);

/* <--------------- for of Loop ---------------> */
for (const i of "Ayan") { // Passing val has to be iterable
    console.log(i);
}