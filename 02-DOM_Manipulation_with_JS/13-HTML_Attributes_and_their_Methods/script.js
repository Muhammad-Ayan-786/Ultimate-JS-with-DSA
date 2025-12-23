/*
====================================================
Attributes & Methods
====================================================
*/

const div = document.getElementById("firstDiv");

console.log(div.getAttribute("id")); // firstDiv
console.log(div.getAttribute("class")); // container

console.log(div.hasAttribute("style")); // false
console.log(div.hasAttribute("id")); // true

div.setAttribute("title", "First Div"); // Add Attribute
div.setAttribute("class", "first content-box container"); // Update Attribute & delete old attribute.

console.log(div.getAttribute("title")); // First Div
console.log(div.getAttribute("class")); // first content-box

div.removeAttribute("title"); // Remove Attribute

console.log(div.attributes); // NamedNodeMap {0: class, 1: id, length: 2}

/*
<----------------- NOTES : Attributes & Methods ----------------->

1 -> elem.hasAttribute(attr_name) -> Returns true if the element has the attribute
2 -> elem.getAttribute(attr_name) -> Returns the value of the attribute
3 -> elem.setAttribute(attr_name, attr_value) -> Sets the value of the attribute
4 -> elem.removeAttribute(attr_name) -> Removes the attribute
5 -> elem.attributes -> Returns a collection of all attributes
*/



/*
====================================================
Custom Attributes
====================================================
*/
const div2 = document.getElementById("secondDiv");

console.log(div2.dataset);
console.log(div2.dataset.game);
console.log(div2.dataset.player);

div2.dataset.game = "Super Mario";
console.log(div2.dataset.game);

/*
<----------------- NOTES : Custom Attributes ----------------->

You can use data-'anyName' in HMTL to create custom attributes and then access them using elem.dataset.anyName, and to list all custom attributes, just use elem.dataset

1 -> elem.dataset -> Returns a collection of all custom attributes
2 -> elem.dataset.anyName -> Returns the value of the custom attribute
*/