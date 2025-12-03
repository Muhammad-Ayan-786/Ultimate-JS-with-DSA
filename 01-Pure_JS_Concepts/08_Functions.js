// Normal Function.
function onePlusAvg(x, y) {
    return 1 + (x + y) / 2;
}

let a = 1;
let b = 2;
let c = 3;

// console.log("One is Average of a & b is", 1 + (a + b)/2);
// console.log("One is Average of b & c is", 1 + (b + c)/2);
// console.log("One is Average of a & c is", 1 + (a + c)/2);

console.log("One is Average of a & b is", onePlusAvg(a, b));
console.log("One is Average of b & c is", onePlusAvg(b, c));
console.log("One is Average of a & c is", onePlusAvg(a, c));

// Arrow Function.
const sum = (a, b) => {
    return a + b;
}

let s = (sum(5, 5));
console.log(`Sum: ${s}`);


const hello = () => {
    console.log("Hey how are you are, I'm toh fine yr.");
}

hello();