let a = prompt("Hey what's your age?"); // prompt always returns a string
a = Number.parseInt(a); // converting string to number (typecasting)

// if-else conditional expression
if (a < 0) {
    alert("This is an invalid age");
}
else if (a < 9) {
    alert("You are a kid and you cannot even think of driving.");
}
else if (a < 18 && a >= 9) {
    alert("You are a teenager and you can think of driving after 18.");
}
else {
    alert("You are can now drive as you are above 18.");
}

/*
// Ternary Operator :
Evaluates a condition and executes a block of code based on the condition.
Condition ? expression1 : expression2
*/
console.log("You can", (a < 18 ? "not drive" : "drive"));