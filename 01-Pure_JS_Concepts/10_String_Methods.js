let str = "Harry";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.slice(2, 4)); // From 2 - 4, but 4 not included
console.log(str.slice(2)); // Print everything after 2nd index

console.log(str.replace("Har", "Per")); // Replace "Har" from Harry to "Per".

let friend = "Ayan"
console.log(str.concat(" is a friend of ", friend, " ok")); // Adding multiple Strings.

let girl = "   Aisha        ";
console.log(girl.trim()); // Remove white spaces from String.


{ // Quick Quiz: Use a for loop to print a string.
    const str = "JavaScript";
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}