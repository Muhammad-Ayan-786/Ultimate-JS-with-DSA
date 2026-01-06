/* =====================================================
                CLOSURES IN JAVASCRIPT
===================================================== */

/*
  A closure is formed when a function
  "remembers" variables from its lexical scope,
  even after the outer function has finished execution.
*/



/* =====================================================
        EXAMPLE 1 — BLOCK & FUNCTION SCOPE
===================================================== */

let greetingGlobal = "Good Day";

function greetingExample() {
    let greetingFunction = "Good Morning";

    {
        let greetingBlock = "Good Afternoon";
        console.log(`Example 1 → Block Scope: ${greetingBlock}`);
    }

    console.log(`Example 1 → Function Scope: ${greetingFunction}`);
}

greetingExample();



/* =====================================================
       EXAMPLE 2 — FUNCTION RETURNING A FUNCTION (CLOSURE)
===================================================== */

let baseGreeting = "Good Day";

function createGreeter() {
    let morningGreeting = "Good Morning";
    console.log(`Example 2 → Inside Parent: ${morningGreeting}`);

    let childGreeter = function () {
        console.log(`Example 2 → From Closure: ${morningGreeting}`);
    };

    return childGreeter;
}

let greeterClosure = createGreeter();
greeterClosure();



/* =====================================================
       EXAMPLE 3 — BASIC CLOSURE (CLASSIC EXAMPLE)
===================================================== */

function initUser() {
    let userName = "Ayan"; // Local variable

    function showUserName() {
        console.log(`Example 3 → Username: ${userName}`);
    }

    return showUserName;
}

let userClosure = initUser();
userClosure();



/* =====================================================
       EXAMPLE 4 — CLOSURE WITH UPDATED VALUE
===================================================== */

function initProfile() {
    let profileName = "Mozilla";

    function showProfile() {
        console.log(`Example 4 → Profile Name: ${profileName}`);
    }

    // Updating variable AFTER function declaration
    profileName = "Ayan";

    return showProfile;
}

let profileClosure = initProfile();
profileClosure(); // Prints "Ayan"



/*
  🔑 Important:
  Closures keep REFERENCES to variables,
  not copies of their values.
*/



/* =====================================================
       EXAMPLE 5 — NESTED FUNCTIONS (SEPARATE SCOPES)
===================================================== */

function nestedScopesExample() {
    const levelOne = () => {
        let valueOne = 1;
        console.log(`Example 5 → Level 1: ${valueOne}`);

        const levelTwo = () => {
            let valueTwo = 2;
            console.log(`Example 5 → Level 2: ${valueTwo}`);

            const levelThree = () => {
                let valueThree = 3;
                console.log(`Example 5 → Level 3: ${valueThree}`);
            };

            levelThree();
        };

        levelTwo();
    };

    return levelOne;
}

const nestedClosure1 = nestedScopesExample();
nestedClosure1();



/* =====================================================
       EXAMPLE 6 — SHARED VARIABLE ACROSS CLOSURES
===================================================== */

function sharedStateExample() {
    const outerFunction = () => {
        let sharedValue = 1;
        console.log(`Example 6 → Initial: ${sharedValue}`);

        const innerFunction = () => {
            console.log(`Example 6 → Inner Access: ${sharedValue}`);

            const deepInnerFunction = () => {
                console.log(`Example 6 → Deep Inner Access: ${sharedValue}`);
            };

            deepInnerFunction();
        };

        // Modifying shared variable
        sharedValue = 999;

        innerFunction();
    };

    return outerFunction;
}

const sharedClosure = sharedStateExample();
sharedClosure();



/* =====================================================
       INTERVIEW ANSWER — WHAT IS A CLOSURE?
===================================================== */

/*
  A closure is a function bundled together
  with its lexical environment.

  This means the function remembers
  variables from where it was created,
  even after that outer function finishes execution.
*/