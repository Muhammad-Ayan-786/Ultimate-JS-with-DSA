// Var
var a = 45;
var b = "Hello";
var c = null;
var d = undefined;

{
    var b = "World";
    console.log(b);
}

console.log(b);

// let
let x = 100;

{
    let x = 200;
    console.log(x);
}

console.log(x);

// const
const author = "Ayan";
// let author = "Ayan"; // Throws an error cuz constants cannot be changed.

console.log(author);

// const a; // Throws an error because const variables must be initialized at the time of declaration


/* ALWAYS USE let OR const */