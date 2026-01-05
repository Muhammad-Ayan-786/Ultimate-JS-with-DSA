/* =====================================================
   JAVASCRIPT SCOPE
   (Block Scope, Function Scope, Global Scope)
===================================================== */

/*
  Scope decides WHERE a variable can be accessed.
*/



/* =====================================================
   LOCAL SCOPE — BLOCK SCOPE
===================================================== */

/*
  Block scope means:
  Variables declared inside { } may or may not
  be accessible outside the block,
  depending on the keyword used.
*/


/* -----------------
var in a block
----------------- */

/*
  var is NOT block-scoped.
  It ignores { } blocks.
*/
{
    var a = 8;
}

console.log(a); // 8 → Accessible outside the block



/* -----------------
let in a block
----------------- */

/*
  let IS block-scoped.
  It exists only inside the block.
*/
{
    let b = 8;
}

// console.log(b); // ❌ ReferenceError (b is not defined)



/* =====================================================
   LOCAL SCOPE — FUNCTION SCOPE
===================================================== */

/*
  Variables declared inside a function
  are NOT accessible outside that function.
*/


/* -----------------
var in a function
----------------- */

function funcVar() {
    var c = 8;
    console.log(c); // Accessible inside the function
}

funcVar();

// console.log(c); // ❌ ReferenceError (c is not defined)



/* -----------------
let in a function
----------------- */

/*
  let behaves the same as var inside a function
  (function-scoped).
*/
function funcLet() {
    let c = 8;
    console.log(c); // Accessible inside the function
}

funcLet();

// console.log(c); // ❌ ReferenceError (c is not defined)



/* =====================================================
    GLOBAL SCOPE
===================================================== */

/*
  Global variables are declared outside
  any block or function.
*/

let x = 100;
console.log(x); // Accessible everywhere



/* -----------------
Access inside a block
----------------- */

{
    console.log(x); // Global variable is accessible
}



/* -----------------
Access inside a function
----------------- */

function globalFunc() {
    console.log(x); // Global variable is accessible
}

globalFunc();



/* -----------------
Access again outside
----------------- */

console.log(x); // Still accessible



/*
  ⚠️ Same global-scope behavior applies to var as well,
  but using let/const is recommended.
*/