/* ==========================================
DOM REFERENCES
========================================== */
const anonBtn = document.getElementById("anon-btn");
const removeAnonBtn = document.getElementById("remove-anon");
const anonLog = document.getElementById("anon-log");

const score = document.getElementById("score");
const addListenersBtn = document.getElementById("add-listeners");
const removeListenerBtn = document.getElementById("remove-listener");
const namedBtn = document.getElementById("named-btn");
const namedLog = document.getElementById("named-log");

const eventBtn = document.getElementById("event-btn");


/* ===========================================
1️⃣ Not passing the original function object
============================================= */
anonBtn.addEventListener("click", function () {
    anonLog.textContent = "Anonymous Listener 1 Fired";
});

anonBtn.addEventListener("click", function () {
    anonLog.textContent += " | Anonymous Listener 2 Fired";
});


// Does not remove the listener cuz it's not passing the same function object.
removeAnonBtn.addEventListener("click", function () {
    anonBtn.removeEventListener("click", function () {
        anonLog.textContent = "Anonymous Listener 1 Fired";
    });

    anonLog.textContent = "removeEventListener failed (new function reference)";
});


/* ==========================================
2️⃣ Passing the origional function object
========================================== */
let count = 1;

// Event Listener on "Click Me" when the page loads
namedBtn.addEventListener("click", () => {
    namedLog.textContent = `Add Listener by clicking "Add Listener" button`;
});

// Reference Function to add listeners (reference)
function firstListener() {
    score.textContent = `Click : ${count}`;
    namedLog.textContent = `Listener Fired (${count++})`;
}

// Event Listeners on "Add Listeners"
addListenersBtn.addEventListener("click", () => {
    if (count > 1) { // Can't add listeners more than once
        namedLog.textContent = "You have already added listeners";
        namedLog.textContent = "Remove listeners to use again";
        return;
    }

    namedLog.textContent = `Listeners added. You can use "Click Me".`;
    namedBtn.addEventListener("click", firstListener);
});

// Event Listeners on "Remove First Listener"
removeListenerBtn.addEventListener("click", () => {
    if (count <= 5) { // Can't remove the listener before 5 clicks
        namedLog.textContent = "Can't remove listener before 5 clicks";
        return;
    }

    namedBtn.removeEventListener("click", firstListener);
    namedLog.textContent = "Listener removed";
    score.textContent = "Click : 0";
    count = 1;
});

// removeEventListener will work here, cuz function is created in the same scope, and then passing the same function reference to removeEventListener. Hence, it will remove the listener.


/* ==========================================
3️⃣ Event Object
========================================== */
eventBtn.addEventListener("click", function (e) {
    console.log("Event Object:", e);
    console.log("Event Type:", e.type);
    console.log("Target Element:", e.target);
    console.log("Mouse Position:", e.clientX, e.clientY);
});