/* ___________________________________
DOM (Document Object Model) :
DOM tree Relers to the HIML bage wher all the nodes are obiests. There can be 3 main types of nodes in the' DOm tree:

1 -> Text nodes
2 -> Element nodes
3 -> Comment nodes

• The Document Object Model (DOM) is a programming interface for HTML and XML documents.

• It represents the structure of the document and provides access to the elements, attributes, and content of the document.

• It allows you to manipulate the document by adding, removing, and modifying its elements.
______________________________________
*/


/* ___________________________________
AUTO CORRECTION :

• If you use the wrong tag name, the browser will automatically correct it for you.

• If you put something after body tag, it will automatically moved into body tag.

• Another example is table tag which must contain tbody tag. If you don't add tbody tag, it will automatically add it.
______________________________________
*/


/* ___________________________________
Walking the DOM :

• You can use the document object to access all the elements in the HTML document.

<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    ...
</body>
</html>

• document is a global variable that represents the entire HTML document.

    • document.head will give everything in head tag.
    • document.title will give the title of the website as a string.
    • document.body will give everything in body tag.
    • document.documentElement will give the entire HTML document as an object.

______________________________________
*/

console.log(document);
console.log(document.head, typeof document.head);
console.log(document.title, typeof document.title);
console.log(document.body, typeof document.body);
console.log(document.documentElement, typeof document.documentElement);