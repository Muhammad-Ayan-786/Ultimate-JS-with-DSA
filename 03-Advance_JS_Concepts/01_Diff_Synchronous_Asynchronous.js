// Synchronous Program
let a = 16;
let b = "Yellow";
let c = "Callback";

console.log(a);
console.log(b);
console.log(c);

// Asynchronous Program
console.log("Before Timeout");
setTimeout(() => {
    console.log("Inside Timeout");
}, 2000);
console.log("After Timeout");