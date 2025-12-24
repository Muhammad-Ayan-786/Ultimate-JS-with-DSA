/* ==========================================
        B R O W S E R   E V E N T S

Some of the most common browser events are:

• Keyboard Events: ["keydown", "keyup", "keypress"]

• Form Events: ["submit", "reset", "change", "input"]

• Drag and Drop Events: ["dragstart", "drag", "dragend", "dragenter", "dragleave", "dragover", "drop"]

• DOM Events: ["DOMContentLoaded", "load", "error", "abort", "resize", "scroll"]

• Mouse Events: ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "contextmenu (right click)"]

NOTE: Adding an event handler with JavaScript overwrites the HTML inline event handler
========================================== */


/* =======================================
DOM REFERENCES :
========================================== */
const contentBox = document.querySelector(".content-box");
const countLog = document.getElementById("count-log");
const paraLog = document.getElementById("para-log");


/* =======================================
DOM CONTENT LOADED -> "DOMContentLoaded"

This event fires when:
✔ HTML is fully loaded
✔ DOM is ready to be accessed
✔ Images / CSS may still be loading
========================================== */
document.addEventListener("DOMContentLoaded", function () {
    // Reset UI when page loads
    paraLog.textContent = "Hi, I'm Console";

    // For learning purpose
    console.log("DOM fully loaded & ready");
});


/* =======================================
CLICK EVENT -> "click"

This event fires when:
✔ the user clicks on an element
========================================== */
let count = 1;

// Click anywhere inside the content box & update the click counter
contentBox.onclick = function () {
    countLog.textContent = `Clicks in the box : ${count++}`;
};


/* =======================================
Reset the console message after 5 seconds
========================================== */
setInterval(() => {
    if (paraLog.textContent === "Mouse Leave the Box") {
        paraLog.textContent = "Hi, I'm Console";
    }
}, 5000);