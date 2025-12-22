/*
====================================================
DOM BASICS & CONSOLE METHODS
====================================================
*/

/*
<------------- Selecting Elements ------------->

querySelector:
- Selects the FIRST matching element
- Returns an ELEMENT node
*/
const span = document.querySelector("span");



/*
<------------- console.log vs console.dir ------------->

console.log(element):
✔ Shows the element like HTML (tag view)

console.dir(element):
✔ Shows the element as a JS object
✔ Useful to inspect properties & methods
*/
console.log("Printing span using console.log:");
console.log(span);

console.log("Printing span using console.dir:");
console.dir(span);



/*
====================================================
NODE TYPES, tagName & nodeName
====================================================
*/

/*
DOM contains DIFFERENT types of nodes:
- Element nodes → <div>, <span>, <body>
- Text nodes    → spaces, new lines
- Comment nodes → <!-- comment -->

IMPORTANT:
HTML formatting (new lines / spaces) creates TEXT NODES
*/



/*
<------------- firstChild vs firstElementChild ------------->

firstChild:
✔ Can be ANY node (text, comment, element)

firstElementChild:
✔ ONLY element nodes
✔ Skips text nodes
*/
console.log(document.body.firstChild.nodeName);
// Usually "#text" because of newline before <span>

console.log(document.body.firstElementChild.nodeName);
// "SPAN"



/*
<------------- tagName vs nodeName ------------->

nodeName:
✔ Works on ALL nodes
✔ Text node → "#text"
✔ Element   → "SPAN"

tagName:
✔ Works ONLY on ELEMENT nodes
❌ Undefined for text nodes
*/
console.log(document.body.lastElementChild.tagName);
// "SCRIPT"

console.log(document.body.lastChild.tagName);
// undefined (because lastChild is a text node)

console.log(document.body.firstChild.tagName);
// undefined (because firstChild is a text node)



/*
🔥 RULE TO REMEMBER:
If the property name has "Element" in it,
tagName is SAFE to use.
*/



/*
====================================================
innerHTML & outerHTML
====================================================
*/

/*
innerHTML:
✔ Gets / sets HTML INSIDE the element

outerHTML:
✔ Gets / replaces the element INCLUDING itself
*/
const spanWithId = document.getElementById("firstSpan");

console.log("");
console.log(spanWithId.innerHTML);
// Content inside <span>...</span>

console.log(spanWithId.outerHTML);
// Entire <span> element



/*
<------------- Modifying HTML ------------->

⚠ innerHTML:
- Changes content INSIDE the element

⚠ outerHTML:
- REPLACES the element itself
- The original reference is LOST after this
*/
span.innerHTML =
    "<b><i>innerHTML</i></b>, <b><i>outerHTML</i></b> & <i>other Properties</i>";

span.outerHTML =
    "<span id='firstSpan'><b><i>innerHTML</i></b>, <b><i>outerHTML</i></b> & <b><i>other Properties</i></b></span>";



/*
====================================================
TEXT NODES & TEXT CONTENT
====================================================
*/

/*
Text nodes have:
- data
- nodeValue

These store the ACTUAL text (spaces, new lines)
*/
console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);



/*
textContent:
✔ Returns ALL text inside an element
✔ Ignores HTML tags
✔ Includes hidden elements
*/
console.log(document.body.textContent);



/*
====================================================
hidden PROPERTY
====================================================
*/

/*
hidden:
✔ true  → element is hidden
✔ false → element is visible
*/
const hiddenDiv = document.getElementById("hidden-Cont");
hiddenDiv.hidden = false;