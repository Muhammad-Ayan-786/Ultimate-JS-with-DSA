let box = document.getElementById("box");

/* =================================================================
Insert Adjacent HTML
====================================================================

This method is used to insert HTML. The first parameter is the position, and the second parameter is the HTML.

1ST PARAMETER POSITION :
1️⃣ beforebegin - Inserts HTML before the element
2️⃣ afterbegin - Inserts HTML after the element
3️⃣ beforeend - Inserts HTML before the end of the element
4️⃣ afterend - Inserts HTML after the end of the element

2ND PARAMETER HTML :
This is the HTML that will be inserted.

================================================================= */


/* ================================================================
insertAdjacentHTML("position", "HTML") : Insert Adjacent HTML
================================================================= */

box.insertAdjacentHTML("beforebegin", "<p class='beforebegin'>beforeBegin</p>");
box.insertAdjacentHTML("afterbegin", "<p class='afterbegin'>afterBegin</p>");
box.insertAdjacentHTML("beforeend", "<p class='beforeend'>beforeEnd</p>");
box.insertAdjacentHTML("afterend", "<p class='afterend'>afterEnd</p>");


/* =================================================================
Insert Adjacent Text : insertAdjacentText("position", "text")
====================================================================

This method is used to insert PLAIN TEXT (not HTML).
Any HTML tags passed will be treated as normal text.

1ST PARAMETER POSITION :
1️⃣ beforebegin - Inserts text before the element
2️⃣ afterbegin - Inserts text at the beginning of the element
3️⃣ beforeend  - Inserts text at the end of the element
4️⃣ afterend   - Inserts text after the element

2ND PARAMETER TEXT :
This is the text that will be inserted as a text node.
HTML tags will NOT be parsed.

Example :
box.insertAdjacentText("beforebegin", "This is some text");

================================================================= */


/* =================================================================
Insert Adjacent Element : insertAdjacentElement("position", "element")
====================================================================

This method is used to insert an ACTUAL DOM ELEMENT.
The element must be created first using createElement().

1ST PARAMETER POSITION :
1️⃣ beforebegin - Inserts the element before the target element
2️⃣ afterbegin - Inserts the element as the first child
3️⃣ beforeend  - Inserts the element as the last child
4️⃣ afterend   - Inserts the element after the target element

2ND PARAMETER ELEMENT :
This must be a DOM node (Element object),
not HTML text or a string.

Example :
let element = document.createElement("p");
element.textContent = "This is a new element";
box.insertAdjacentElement("beforebegin", element);

================================================================= */


/* ================================================================
Node removal :

To remove a node, you can use the remove() method.

let node = document.getElementById("myNode");
node.remove(); // Removes the node from the DOM.
================================================================= */