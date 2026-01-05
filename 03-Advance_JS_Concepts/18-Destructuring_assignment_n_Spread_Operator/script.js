/* =====================================================
   DESTRUCTURING ASSIGNMENT
   ===================================================== */

/*
  Destructuring allows us to unpack values
  from arrays or objects into variables
  in a clean and short way.
*/



/* =====================================================
   ARRAY DESTRUCTURING (POSITION-BASED)
   ===================================================== */

/*
  Array destructuring works by POSITION.
  The first variable gets the first value,
  second variable gets the second value, and so on.
*/

let arr1 = [2, 4];

/*
  Instead of writing:
  let a = arr1[0];
  let b = arr1[1];
*/
let [a, b] = arr1;

console.log(a, b); // 2 4



/*
  If the array has more values,
  extra values are ignored unless we use them.
*/
let arr2 = [3, 6, 10];
let [c, d] = arr2;

console.log(c, d); // 3 6



/*
  REST OPERATOR (...)
  - Collects remaining values into an array
*/
let arr3 = [8, 16, 24, 32];
let [e, f, ...rest1] = arr3;

console.log(e, f, rest1); // 8 16 [24, 32]



/*
  Skipping values:
  Commas without variables skip elements
*/
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
let [g, , , ...rest2] = arr4;

console.log(g, rest2); // 1 [4, 5, 6, 7, 8]



/* =====================================================
   OBJECT DESTRUCTURING (NAME-BASED)
   ===================================================== */

/*
  Object destructuring works by PROPERTY NAME,
  not by position.
*/

const obj1 = { h: 1, i: 2 };
const { h, i } = obj1;

console.log(h, i); // 1 2



/* =====================================================
   SPREAD OPERATOR (...)
   ===================================================== */

/*
  Spread operator expands values
  from arrays or objects.
*/



/* -----------------------------------------------------
   Spread with Arrays
   ----------------------------------------------------- */

let arr5 = [1, 2, 3, 4, 5];

/*
  Spreading an array into an object:
  Index becomes the key
*/
let obj2 = { ...arr5 };

console.log(obj2); // {0:1, 1:2, 2:3, 3:4, 4:5}



/*
  Spread used in function arguments
*/
function sum(a, b, c) {
    return a + b + c;
}

let nums = [3, 5, 6];
console.log(sum(...nums)); // 14



/* -----------------------------------------------------
   Spread with Objects
   ----------------------------------------------------- */

/*
  Shorthand property names:
  When key and variable name are same
*/
const x = "Javascript";
const y = "Language";

const z = { x, y };
console.log(z); // { x: "Javascript", y: "Language" }



/*
  Object cloning & updating
  (Very common in React.js)
*/
const object = {
    name: "Harry",
    company: "Company XYZ",
    address: "XYZ"
};

/*
  Value overwritten because it comes AFTER spread
*/
console.log({ ...object, name: "Ayan" });

/*
  Value NOT overwritten because spread comes AFTER
*/
console.log({ name: "Ayan", ...object });