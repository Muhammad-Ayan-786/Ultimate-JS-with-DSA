const container = document.body.getElementsByTagName("div")[0]

/*
====================================================
Adding HTML using innerHTML
====================================================

let box = container.querySelector("#box");
box.innerHTML = box.innerHTML + "<h1>HTML Insertion Methods</h2><br><p>Some HTML Insertion Methods are discuss here.</p>";

THIS IS NOT A GOOD APPROACH. (Not Recommended).

====================================================
*/


/*
====================================================
HTML Insertion Methods
====================================================
*/

let box = container.querySelector("#box");

let h1Tag_for_box = document.createElement("h1");
h1Tag_for_box.innerHTML = "HTML Insertion Methods";
box.prepend(h1Tag_for_box);

let pTag_for_box = document.createElement("p");
pTag_for_box.innerHTML = "<b>Some HTML Insertion Methods are discussed here.</b>";
box.append(pTag_for_box);


/*
====================================================
Some more HTML Insertion Methods
====================================================
*/

// before --> Inserts HTML before the element
const start_para_outer = document.createElement("p");
start_para_outer.innerHTML = "I'm the Start of this container <span>(outer)</span>";
start_para_outer.setAttribute("class", "outer-start-para");

container.before(start_para_outer);

// after --> Inserts HTML after the element
const end_para_outer = document.createElement("p");
end_para_outer.innerHTML = "I'm the End of this container <span>(outer)</span>";
end_para_outer.setAttribute("class", "outer-end-para");

container.after(end_para_outer);

// prepend --> Prepends HTML to the beginning of the element
const start_para_inner = document.createElement("p");
start_para_inner.innerHTML = "I'm the Start of this container <span>(inner)</span>";
start_para_inner.setAttribute("class", "inner-start-para");

container.prepend(start_para_inner);

// append --> Appends HTML to the end of the element
const end_para_inner = document.createElement("p");
end_para_inner.innerHTML = "I'm the End of this container <span>(inner)</span>";
end_para_inner.setAttribute("class", "inner-end-para");

container.append(end_para_inner);


/*
====================================================
replaceWith(element) & appendChild(element)
====================================================

• replaceWith() : This method is used to replace an element with another element.

const div = createElement("div");
div.innerHTML = "I'm replace div !";
container.replaceWith(div); // Replaces container with div


• appendChild() : This method is used to append an element to the end of another element as a Child.

const div = createElement("div");
div.innerHTML = "I'm append div !";
container.appendChild(div); // Appends div as a last child of container
*/