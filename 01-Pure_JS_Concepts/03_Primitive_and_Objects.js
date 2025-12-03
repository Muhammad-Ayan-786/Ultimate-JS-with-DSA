/*
Primitive Data Types in JavaScript :

N - null
N - number
B - boolean
B - bigint
S - string
S - symbol
U - undefined
*/

let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3");
let e = "Ayan";
let f = Symbol("I am a nice symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);

console.log(typeof d);


// Non-Primitive Data Types - Objects in JavaScript :
const item = {
    "Ayan": true,
    "Khan": false,
    "Prince": 67,
    "Hero": undefined
}

console.log(item); // Output the whole object
console.log(item["Ayan"]); // Output: true
console.log(item["Prince"]); // Output: 67
console.log(typeof item); // Output: object

console.log(item["asdf"]); // Output: undefined (because "asdf" key does not exist)