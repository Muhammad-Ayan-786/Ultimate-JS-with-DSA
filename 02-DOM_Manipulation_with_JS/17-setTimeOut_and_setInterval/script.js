/* ======================================================
DOM REFERENCES :
- Grabbing required DOM elements ONCE at the top
- Helps keep the code clean and avoids repetition
====================================================== */

const title = document.querySelector("#title-section h1");

const timeoutAlert = document.getElementById("timeout-alert");
const timeoutSum = document.getElementById("timeout-sum");

const counterEl = document.getElementById("counter");
const intervalMath = document.getElementById("interval-math");


/* ======================================================
setTimeout() :
- Runs a function ONCE after a delay (in milliseconds)
- Returns a unique timer ID
- The timer ID can be used with clearTimeout()
====================================================== */

/* 
1️⃣ setTimeout with DOM manipulation
Changes the heading text after 6 seconds
*/
setTimeout(() => {
    title.textContent = "setTimeout & setInterval";
}, 6000);

/*
2️⃣ setTimeout with timer ID & clearTimeout (hard-coded)
This timeout updates the DOM after 8 seconds,
but can be cancelled automatically using a hard-coded flag
*/
const shouldCancelTimeout = true; // 👈 change to false to allow timeout

const alertTimerId = setTimeout(() => {
    timeoutAlert.textContent = "⏰ Alert timeout executed!";
}, 8000);

if (shouldCancelTimeout) {
    clearTimeout(alertTimerId);
    timeoutAlert.textContent = "❌ Alert timeout was cancelled (hard-coded).";
}

/*
3️⃣ setTimeout with extra parameters
Extra arguments passed to setTimeout()
are forwarded to the callback function
*/
const sum = (a, b) => {
    timeoutSum.textContent = `Sum of ${a} and ${b} is ${a + b}`;
};

setTimeout(sum, 10000, 5, 5);


/* ======================================================
setInterval() :
- Runs a function repeatedly at fixed intervals
- Returns an interval ID
- The ID can be cleared using clearInterval()
====================================================== */

/*
4️⃣ setInterval with DOM counter
Updates a number every 1 second
Stops automatically when count reaches 10
*/
let count = 1;

const counterIntervalId = setInterval(() => {
    counterEl.textContent = count;

    if (count === 10) {
        clearInterval(counterIntervalId);
    }

    count++;
}, 1000);

/*
5️⃣ setInterval with extra parameters
Demonstrates passing arguments to setInterval()
The interval is stopped after 5 seconds
*/
const subtract = (a, b) => {
    intervalMath.textContent = `Subtraction of ${a} from ${b} is ${a - b}`;
};

const mathIntervalId = setInterval(subtract, 1000, 10, 5);

setTimeout(() => {
    clearInterval(mathIntervalId);
    intervalMath.textContent += " (stopped)";
}, 10000);