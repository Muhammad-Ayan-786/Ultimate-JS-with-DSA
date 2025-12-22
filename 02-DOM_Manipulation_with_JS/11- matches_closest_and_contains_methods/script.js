// Get the element with id="id1"
const id1 = document.getElementById("id1");
console.log('id1:', id1); // Logs the div with id="id1"

// The matches() method checks if the element matches the given CSS selector
console.log('id1.matches(".class"):', id1.matches(".class")); // false, does not have class 'class'
console.log('id1.matches(".box"):', id1.matches(".box"));   // true, has class 'box'

// Get the element with id="sp1"
const sp1 = document.getElementById("sp1");

// The closest() method looks for the nearest ancestor that matches the selector
console.log('sp1.closest("#sp1"):', sp1.closest("#sp1"));   // sp1 itself
console.log('sp1.closest(".box"):', sp1.closest(".box"));   // div#id1 is the closest ancestor with class 'box'

// The contains() method checks if one node contains another
console.log('id1.contains(sp1):', id1.contains(sp1)); // true, id1 contains sp1
console.log('sp1.contains(sp1):', sp1.contains(sp1)); // true, an element contains itself
console.log('sp1.contains(id1):', sp1.contains(id1)); // false, sp1 does not contain id1