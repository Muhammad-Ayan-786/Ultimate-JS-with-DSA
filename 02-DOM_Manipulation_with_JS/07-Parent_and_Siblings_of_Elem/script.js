/*
What's $0 on console browser ?

• $0 in the console refers to the currently selected element in the DOM.
• $1 refers to the previous selected element in the DOM.
*/

/* ____________________________
Siblings and Parent of Element :

Siblings -> Elements that share a common parent are called siblings

• For example -> <head> & <body> are siblings. Siblings share the same parent. In the above example its parent is <html>.

• <body> is said to be the "next" or "right" sibling of <head>. And <head> is said to be the "previous" or "left" sibling of <body>.

• nextSibling -> Returns the next sibling node of an element.

• previousSibling -> Returns the previous sibling node of an element.


Parent node -> The element that contains the current element is called its parent

• parentNode -> If you want to access the parent node of an element, you can use the parentNode property.

• parentElement -> If you want to access the parent element of an element, you can use the parentElement property.
______________________________
*/

const a = document.body.firstChild.nextSibling;
console.log(a);

console.log(a.parentNode); // Returns the parent node of an element
console.log(a.parentElement); // Returns the parent element of an element

console.log(a.firstChild.nextSibling); // Returns the next sibling node of an element

console.log(document.documentElement.parentNode);
console.log(document.documentElement.parentElement);