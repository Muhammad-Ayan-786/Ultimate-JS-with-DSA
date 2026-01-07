/* =====================================================
   ES MODULE IMPORTS
   ===================================================== */

/*
  👉 NAMED IMPORTS
  - Must be inside { }
  - Names MUST MATCH export names
*/

import { hello, bye } from "./script_3.js";

hello("Harry Bhai");
bye("Harry Bhai");



/* =====================================================
   DEFAULT IMPORT (SINGLE)
   ===================================================== */

/*
  👉 Default import
  - No { }
  - Name can be ANYTHING
*/

import AnyRandomName from "./script_3.js";
AnyRandomName();



/* =====================================================
   DEFAULT IMPORT (OBJECT WITH MULTIPLE)
   ===================================================== */

/*
  ❗ Works ONLY if export was:
     export default { HelloAgain, ByeAgain }
*/

// import myFuncs from "./script_3.js";

// myFuncs.HelloAgain("Ayan");
// myFuncs.ByeAgain("Ayan");



/* =====================================================
   DESTRUCTURING DEFAULT OBJECT
   ===================================================== */

/*
  ❗ If you REALLY want named-style access
  ❗ You must destructure AFTER importing default object
*/

// import myFuncs from "./script_3.js";

// const { HelloAgain, ByeAgain } = myFuncs;

// HelloAgain("Ayan");
// ByeAgain("Ayan");



/* =====================================================
   ❌ WRONG IMPORTS (DON'T DO THIS)
   ===================================================== */

/*
❌ This will NOT work for default export
import { HelloMe } from "./script_3.js";
*/

/*
❌ This will NOT work if exported as named
import hello from "./script_3.js";
*/

/*
Named export    → MUST use { } and SAME name
Default export  → NO { }, name can be ANYTHING
Default object  → Import once, then use dot or destructure
*/
