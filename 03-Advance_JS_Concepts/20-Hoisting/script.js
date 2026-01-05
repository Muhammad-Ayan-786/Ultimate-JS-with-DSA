/* =====================================================
HOISTING IN JAVASCRIPT
===================================================== */

/*
  Hoisting is JavaScript's behavior of moving
  DECLARATIONS to the top of their scope
  during the compilation phase.

  ⚠️ Only DECLARATIONS are hoisted,
  NOT INITIALIZATIONS.
*/



/* =====================================================
var HOISTING
===================================================== */

/*
  var is hoisted and initialized with `undefined`
*/

console.log(a); // undefined
var a;



console.log(x); // undefined
var x = 10;
console.log(x); // 10



/*
  How JavaScript actually sees the code:

  var x;
  console.log(x); // undefined
  x = 10;
  console.log(x); // 10
*/



/* =====================================================
FUNCTION DECLARATION HOISTING
===================================================== */

/*
  Function declarations are fully hoisted.
  That means we can call them before they are defined.
*/

greet();

function greet() {
    console.log("Good Morning");
}



/* =====================================================
let & const HOISTING (TEMPORAL DEAD ZONE)
===================================================== */

/*
  let and const ARE hoisted,
  but they are NOT initialized.

  From the start of the block until the declaration,
  the variable is in the Temporal Dead Zone (TDZ).
*/

// console.log(z1); // ❌ ReferenceError (TDZ)
let z1;

let z2 = 6;
console.log(z1, z2); // undefined 6



/*
  ❗ Key difference:
  - var → hoisted + initialized with undefined
  - let/const → hoisted but NOT initialized
*/



/* =====================================================
FUNCTION EXPRESSIONS (NOT HOISTED)
===================================================== */

/*
  Function expressions behave like variables.
  Hoisting depends on the keyword used.
*/


/* -----------------
   const function expression
   ----------------- */

// hello(); // ❌ ReferenceError (TDZ)

const hello = () => {
    console.log("Hello");
};



/* -----------------
   var function expression
   ----------------- */

// hii(); // ❌ TypeError (hii is not a function)

var hii = () => {
    console.log("Hii");
};



/*
  Explanation:
  - var hii is hoisted and initialized as undefined
  - calling undefined as a function causes TypeError
*/