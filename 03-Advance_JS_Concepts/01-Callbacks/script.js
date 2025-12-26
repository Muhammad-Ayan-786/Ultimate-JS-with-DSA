/* ====================
Callbacks
==================== */
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
        console.log("Loaded Script with src:", src);
        callback(src);
    };
    document.head.appendChild(script);
}

function MorningLoad(src) {
    console.log("Sript Loaded in Morning " + src);
}

function EveningLoad(src) {
    console.log("Sript Loaded in Evening " + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", EveningLoad);

// This is called Callback based style of Asynchronous Programming.


/* ====================
Error Handling
==================== */
const getScript = (src, callback) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
        console.log("Loaded Script with src:", src);
        callback(null, src);
    };
    script.onerror = () => {
        console.log("Error in Loading Script with src:", src);
        callback(new Error("Failed to load script"), src);
    };
    document.head.appendChild(script);
}

function getCallback (error, src) {
    if (error) {
        console.log(error);
    } else {
        console.log("Script Loaded Successfully: " + src);
    }
}

// Intentional typo to demonstrate script.onerror
getScript("hhttps://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", getCallback);



/* =====================================================
DIFFERENCE BETWEEN SYNCHRONOUS AND ASYNCHRONOUS PROGRAMS
==============

// Synchronous Program
let a = 16;
let b = "Yellow";
let c = "Callback";

console.log(a);
console.log(b);
console.log(c);

// Asynchronous Program
console.log("Before Timeout");
setTimeout(() => {
    console.log("Inside Timeout");
}, 2000);
console.log("After Timeout");

====================================================== */