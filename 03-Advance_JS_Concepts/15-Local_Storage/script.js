/* =====================================================
   LOCAL STORAGE — INTRODUCTION
   ===================================================== */

/*
  localStorage is a Web Storage API.
  It stores data in the browser permanently
  (until manually removed or cleared).
*/

console.log("Initial localStorage length:", localStorage.length);



/* =====================================================
   setItem() — STORE DATA
   ===================================================== */

/*
  Syntax:
  localStorage.setItem(key, value);

  Important:
  - Both key and value MUST be strings
*/

localStorage.setItem("username", "Ayan");
localStorage.setItem("role", "Frontend Developer");

console.log("After setItem:", localStorage);



/* =====================================================
   getItem() — READ DATA
   ===================================================== */

/*
  Syntax:
  localStorage.getItem(key);

  Returns:
  - value (string)
  - null if key does not exist
*/

const username = localStorage.getItem("username");
console.log("Username:", username);



/* =====================================================
   removeItem() — DELETE A SINGLE ITEM
   ===================================================== */

/*
  Syntax:
  localStorage.removeItem(key);
*/

localStorage.removeItem("role");
console.log("After removeItem:", localStorage);



/* =====================================================
   clear() — DELETE EVERYTHING
   ===================================================== */

/*
  ⚠️ WARNING:
  This removes ALL localStorage data
  for the current domain
*/

// Uncomment to test
// localStorage.clear();



/* =====================================================
   key(index) & length — ITERATION
   ===================================================== */

/*
  localStorage.length → number of stored items
  localStorage.key(i) → key at given index
*/

localStorage.setItem("theme", "dark");
localStorage.setItem("fontSize", "16px");

console.log("Total items:", localStorage.length);

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key} : ${value}`);
}



/* =====================================================
   OBJECT-LIKE ACCESS (NOT RECOMMENDED)
   ===================================================== */

/*
  localStorage can behave like an object,
  but this is NOT recommended for production.
*/

localStorage.language = "JavaScript";
console.log("Language:", localStorage.language);

delete localStorage.language;



/* =====================================================
   STORING OBJECTS — JSON.stringify & JSON.parse
   ===================================================== */

/*
  localStorage can only store STRINGS.
  Objects must be converted using JSON.
*/

const user = {
    name: "Ayan",
    age: 17,
    skills: ["HTML", "CSS", "JavaScript"]
};

/*
  Convert object → JSON string
*/
localStorage.setItem("userData", JSON.stringify(user));

/*
  Retrieve string → convert back to object
*/
const storedUser = JSON.parse(localStorage.getItem("userData"));

console.log("Stored User Object:", storedUser);
console.log("User Skills:", storedUser.skills);



/* =====================================================
   IMPORTANT NOTES
   ===================================================== */

/*
  ✔ localStorage is synchronous
  ✔ Data persists after page refresh
  ✖ Do NOT store sensitive data
*/

console.log("Final localStorage:", localStorage);