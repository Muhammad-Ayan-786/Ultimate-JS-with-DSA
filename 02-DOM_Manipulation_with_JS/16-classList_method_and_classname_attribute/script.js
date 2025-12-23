/* ========================================
CLASSLIST METHOD AND CLASSNAME ATTRIBUTE
======================================== */

const box = document.getElementById("box");

console.log(box.className); // container mydiv
console.log(box.classList); // DOMTokenList [container, mydiv]

box.classList.add("bg-class"); // add class
box.classList.remove("mydiv"); // remove class

console.log(box.className); // container bg-class

console.log(box.classList.contains("mydiv")); // check class

box.classList.toggle("bg-class"); // toggle class (will remove cuz it already exist)
box.classList.toggle("bg-class"); // toggle class (will add cuz it doesn't exist)

console.log(box.className); // container bg-class