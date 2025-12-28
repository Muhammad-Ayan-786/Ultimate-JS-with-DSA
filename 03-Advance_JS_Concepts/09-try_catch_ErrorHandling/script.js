setTimeout(() => {
    console.log("Hacking wifi .... Please wait ... ")
}, 1000)

setTimeout(() => {
    console.log("Fetching username and password .... Please wait ... ")
}, 2000)

setTimeout(() => {
    console.log("Hacking User's facebook id .... Please wait ... ")
}, 3000)

setTimeout(() => {
    console.log("Username and password of User (0935*******) fetched .... Please wait ... ")
}, 4000)


/* ==========================================
            t r y  . . .  c a t c h
          (Synchronous & Asynchronous)
========================================== */

/* ======================================================================
1️⃣ try...catch with SYNCHRONOUS code
----------------------------------------------------------------------
✔ The error WILL be caught

Reason:
- try...catch can catch errors that happen immediately (synchronous).
- `Meow` is not defined, so the error occurs right away inside `try`.
- The `catch` block handles the error successfully.
========================================================================= */

try {
    console.log(Meow); // ❌ ReferenceError (Meow is not defined)
} catch (error) {
    console.log("Error occurred: Meow is not defined");
}


/* ======================================================================
2️⃣ try...catch with ASYNCHRONOUS code (WRONG way)
----------------------------------------------------------------------
❌ The error will NOT be caught

Reason:
- `setTimeout` runs asynchronously (later).
- The `try...catch` finishes execution BEFORE `setTimeout` runs.
- When the error occurs, it is OUTSIDE the try block’s execution scope.
- Therefore, the `catch` block cannot catch this error.
========================================================================= */

try {
    setTimeout(() => {
        console.log(Me); // ❌ ReferenceError (Me is not defined)
    }, 5000);
} catch (error) {
    console.log("This will NOT run");
}


/* ======================================================================
3️⃣ try...catch with ASYNCHRONOUS code (CORRECT way)
----------------------------------------------------------------------
✔ The error WILL be caught

Reason:
- The error happens INSIDE the `setTimeout` callback.
- A separate `try...catch` is placed INSIDE the asynchronous function.
- This catches the error at the moment it actually occurs.
========================================================================= */

setTimeout(() => {
    try {
        console.log(Me); // ❌ ReferenceError (Me is not defined)
    } catch (error) {
        console.log("Error occurred inside setTimeout:", error.message);
    }
}, 6000);