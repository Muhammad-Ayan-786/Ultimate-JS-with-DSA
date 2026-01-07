/* =========================================
       COMMONJS - EXPORT FILE
========================================= */

/*
In CommonJS, we export using:
module.exports
*/

// Simple function
const sayHello = () => {
    console.log("Hello!");
};

// Function with parameter
const greetUser = (name) => {
    console.log(`Hello ${name}`);
};

// Another function
const sayGoodbye = (name) => {
    console.log(`Goodbye ${name}`);
};

/*
Exporting MULTIPLE things:
We export an OBJECT.
*/
module.exports = {
    sayHello,
    greetUser,
    sayGoodbye
};

/*
// S A M E   A S   A B O V E
module.exports = {
    hello: hello,
    Adv_Hello: Adv_Hello,
    Adv_Bye: Adv_Bye
};
*/