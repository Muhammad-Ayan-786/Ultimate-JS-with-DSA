/* <----------------- Search the DOM -----------------> */

// 1. getElementById( id of the element ) -> Returns the first element with the given id.
const activeHomeLink = document.getElementById("activeLink");

activeHomeLink.style.color = "var(--accent2)";
activeHomeLink.style.background = "#00000010";

console.log(activeHomeLink);

// 2. getElementsByClassName( class name of the element ) -> Returns a collection of elements with the given class name.
const firstCardTitle = document.body.getElementsByClassName("card-title")[0];
console.log(firstCardTitle);

// 3. getElementsByTagName( tag name of the element ) -> Returns a collection of elements with the given tag name.
const alldivtags = document.body.getElementsByTagName("div");
console.log(alldivtags);

// 4. querySelector( selector of the element ) -> Returns the first element that matches the given selector.
const firstLink = document.body.querySelector(".links"); // pass as CSS selector
console.log(firstLink);

// 5. querySelectorAll( selector of the element ) -> Returns a collection of elements that match the given selector.
const allLinks = document.body.querySelectorAll(".links"); // pass as CSS selector
console.log(allLinks);

// 6. getElementsByName( name of the element ) -> Returns a collection of elements with the given name attribute.
const allInputs = document.body.getElementsByTagName("input");
console.log(allInputs);

/*
==================== DOM SEARCH NOTES ====================

HTML STRUCTURE (REFERENCE)
--------------------------
<div class="card">
    <img src="...">

    <div class="info">
        <h5 id="title">Hello World</h5>
        <p class="content">This is JS.</p>
    </div>
</div>

----------------------------------------------------------

1️⃣ Selecting elements from the DOM
-----------------------------------
- `document.querySelector()` returns the FIRST matching element
- It works with CSS selectors (class, id, tag, etc.)

Example:
const firstCard = document.body.querySelector(".card");

----------------------------------------------------------

2️⃣ Searching INSIDE a specific element
---------------------------------------
Once you have an element, you can search ONLY inside it.
This is called "scoped DOM searching".

✔ These methods CAN be used on elements:
- getElementsByClassName()
- getElementsByTagName()
- querySelector()
- querySelectorAll()

❌ This method CANNOT be used on elements:
- getElementById() → works ONLY on `document`
  (because IDs are global in HTML)

----------------------------------------------------------

3️⃣ Using classic DOM methods
-----------------------------
These methods return HTMLCollections,
so you must access elements using [index].

Example:
const cardTitle = firstCard.getElementsByTagName("h5")[0];
const cardText  = firstCard.getElementsByClassName("content")[0];

----------------------------------------------------------

4️⃣ Modern & recommended approach
---------------------------------
`querySelector` is preferred because:
- Works on `document` AND elements
- Uses CSS selectors
- Cleaner and more readable

Example:
const cardTitle = firstCard.querySelector("#title");
const cardText  = firstCard.querySelector(".content");

----------------------------------------------------------

5️⃣ Quick rules to remember
---------------------------
- IDs are global → use `document.getElementById()`
- Classes & tags can be searched inside elements
- `querySelector` works everywhere
- If a method returns multiple elements → use [0], [1], etc.

==========================================================
*/