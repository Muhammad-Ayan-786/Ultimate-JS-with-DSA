/* ==============================================================================
FINALLY CLAUSE
------------------------------------------------------------------------------
The `finally` block:
- Always runs, no matter what
- Runs whether an error occurs or not
- Runs even if `catch` throws another error
- Is commonly used for cleanup code (closing resources, logging, etc.)
============================================================================= */


/* ==============================================================================
1️⃣ finally with NO error handling (error occurs in try)
------------------------------------------------------------------------------
✔ `catch` runs because an error occurs
✔ `finally` runs after `catch`
============================================================================= */

try {
    const pie = 3.14;
    console.log(program); // ❌ ReferenceError
    console.log("Program ran successfully!");
} catch (error) {
    console.log(error);
} finally {
    console.log("Finally clause executed!");
}


/* ==============================================================================
2️⃣ finally inside a function (VERY IMPORTANT CASE)
------------------------------------------------------------------------------
• Even if `return` is executed inside try
• The finally block STILL runs before the function exits
============================================================================= */

function func() {
    try {
        console.log("Hey, I'm a function");
        return; // function tries to exit here
    } catch (error) {
        console.log(error);
    } finally {
        // This ALWAYS runs before the function finishes
        console.log("Finally clause executed!");
    }
}

func();


/* ==============================================================================
3️⃣ finally when catch ALSO throws an error
------------------------------------------------------------------------------
✔ Error occurs in `try`
✔ `catch` runs
❌ Another error occurs inside `catch`
✔ `finally` STILL runs
============================================================================= */

try {
    console.log(a); // ❌ ReferenceError
} catch (error) {
    console.log(error);
    console.log(b); // ❌ ReferenceError inside catch
} finally {
    console.log("Finally clause executed!");
}