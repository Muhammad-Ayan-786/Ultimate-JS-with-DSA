/* ____________________________
Accessing Children of Element :

Children of an element :
Direst as well as deeply nested elemends of an element are called its children

Child nodes -> Elements that are direct children, for example head & body are children of <html>

Descendants nodes -> All nested elements, children, their children and so on are called descendants

Siblings -> Elements that share a common parent are called siblings

Parent node -> The element that contains the current element is called its parent

______________________________
*/

/* ___________________________
firstChild , lastChild , childNodes :

element.firstChild -> Returns the first child node of an element.
element.lastChild -> Returns the last child node of an element.
element.childNodes -> Returns a collection of all child nodes of an element.

FOLLOWING IS ALSO TRUE :

• Either elem.childNodes[0] or elem.firstChild is the first child node of elem.

• Either elem.childNodes[elem.childNodes.length - 1] or elem.lastChild is the last child node of elem.


There is also a method elem.hasChildNodes() to check whether there are any child nodes. It returns a boolean, true if elem has any child nodes, false otherwise.

____________________________
*/

console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

console.log(document.body.hasChildNodes());


// Converting NodeList to Array
const nodesOfArr = Array.from(document.body.childNodes);
console.log(nodesOfArr);

// NOTE : childNotes looks like an array. But its not actually an array but a collection of nodes. We can use Array.from(collection) to convert it into an array.