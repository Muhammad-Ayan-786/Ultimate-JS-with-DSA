/* =========================================
        COMMONJS - IMPORT FILE
========================================= */

/*
require() returns whatever was exported
*/


// ---------- WAY 1: Import as OBJECT ----------
const myFunctions = require("./script_1.js"); // remember to add .js

myFunctions.sayHello();
myFunctions.greetUser("Ayan");
myFunctions.sayGoodbye("Ayan");


// ---------- WAY 2: Destructuring ----------
/*
Names MUST match exported names
*/
const { sayHello, greetUser, sayGoodbye } = require("./script_1.js"); // remember to add .js

sayHello();
greetUser("Harry");
sayGoodbye("Harry");