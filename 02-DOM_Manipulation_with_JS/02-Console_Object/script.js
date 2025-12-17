/* <------ Console Methods ------> */
console.log(console);

// 1. clear - Clears the console.
console.clear();

// 2. log - Prints the value in the console.
console.log("Hey, Ayan");

// 3. error - Prints the error in the console.
console.error("Hey this is an error !");

// 4. assert - Asserts if the condition is true.
console.assert(1 === 2);

// 5. table - Prints the table in the console.
let arr = [1, 2, 3];
console.table(arr);
let obj = {a: 1, b: 2, c: 3};
console.table(obj);

// 6. warn - Prints the warning in the console.
console.warn("Hey this is a warning !");

// 7. info - Prints the info in the console.
console.info("Hey this is an important info !");

// 8. dir - Prints the directory in the console.
console.dir(document);

// 9. time - Prints the time in the console.
console.time("Time Taken");
console.log("Hello World");
console.timeEnd("Time Taken");