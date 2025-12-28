/* =====================================
Error Object
===================================== */
try {
    throw new Error("I'm a Error Object");
} catch (error) {
    console.log(error.name); // Prints the name of the error
    console.log(error.message); // Prints the message of the error
    console.log(error.stack); // Prints the stack trace
}

try {
    throw new ReferenceError("I'm a ReferenceError Object");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

try {
    throw new SyntaxError("I'm a SyntaxError Object");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

try {
    throw new TypeError("I'm a TypeError Object");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log("");

/* =====================================
Throwing Custom Errors
===================================== */
const age = 150;

try{
    if (age > 130) {
        throw new RangeError("Invalid age");
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}