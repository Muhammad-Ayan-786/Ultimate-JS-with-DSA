const body = document.body;

console.log("First child of body :", body.firstChild);

console.log("First element child of body :", body.firstElementChild); // retuns the first element child of body.

console.log("Last element child of body :", body.lastElementChild); // retuns the last element child of body.

console.log("Previous element sibling of body :", body.previousElementSibling); // retuns the previous element sibling of body.

console.log("Next element sibling of body :", body.nextElementSibling); // retuns the next element sibling of body.

// Child Elements node are called children.
console.log("Children of nav :", body.firstElementChild.firstElementChild.children);


const homeTargetWithColor = () => { // home target with color
    body.firstElementChild.firstElementChild.firstElementChild.style.color = "#007c7cff";
}

homeTargetWithColor();