/* =============================================
Introduction to Promises
============================================= */

let promise = new Promise((resolve, reject) => {
    console.log("I'm a promise");
    resolve(56);
})

console.log("Hello 1");
setTimeout(() => {
    console.log("Hello 2");
}, 1500);
console.log("Hello 3");

console.log(promise);