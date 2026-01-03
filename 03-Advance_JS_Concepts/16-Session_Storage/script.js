/* =====================================================
   SESSION STORAGE — INTRODUCTION
   ===================================================== */

/*
  sessionStorage is similar to localStorage,
  BUT it exists only within a single browser tab.

  ✔ Data survives page refresh
  ✖ Data is lost when the tab is closed
*/

console.log("Initial sessionStorage length:", sessionStorage.length);



/* =====================================================
   setItem() — STORE DATA IN SESSION STORAGE
   ===================================================== */

/*
  Syntax:
  sessionStorage.setItem(key, value);

  Note:
  - Key & value must be strings
*/

sessionStorage.setItem("sessionUser", "Ayan");
sessionStorage.setItem("sessionRole", "Frontend Developer");

console.log("After setItem:", sessionStorage);



/* =====================================================
   getItem() — READ DATA
   ===================================================== */

/*
  Returns:
  - Stored value (string)
  - null if key does not exist
*/

const sessionUser = sessionStorage.getItem("sessionUser");
console.log("Session User:", sessionUser);



/* =====================================================
   removeItem() — DELETE A SINGLE ITEM
   ===================================================== */

sessionStorage.removeItem("sessionRole");
console.log("After removeItem:", sessionStorage);



/* =====================================================
   clear() — DELETE ALL SESSION DATA
   ===================================================== */

/*
  ⚠️ Clears everything in sessionStorage
  for the current tab only
*/

// Uncomment to test
// sessionStorage.clear();



/* =====================================================
   key(index) & length — ITERATION
   ===================================================== */

sessionStorage.setItem("theme", "dark");
sessionStorage.setItem("fontSize", "16px");

console.log("Total session items:", sessionStorage.length);

for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    console.log(`${key} : ${value}`);
}



/* =====================================================
   STORAGE EVENT — INTRODUCTION
   ===================================================== */

/*
  The storage event fires ONLY when:
  ✔ Storage is changed in another tab/window
  ✖ NOT triggered in the same tab
*/

window.onstorage = (event) => {
    console.log("Storage Event Triggered!");
    
    console.log("Key:", event.key);
    console.log("Old Value:", event.oldValue);
    console.log("New Value:", event.newValue);
    console.log("URL:", event.url);
    console.log("Storage Area:", event.storageArea);

};


/* =====================================================
   STORAGE EVENT — HOW TO TEST
   ===================================================== */

/*
  1. Open this page in TWO tabs
  2. Open DevTools in Tab #1
  3. Run this command in console:

     localStorage.setItem("test", "123");

  4. Tab #2 will receive the storage event
*/


/* =====================================================
   IMPORTANT NOTES
   ===================================================== */

/*
  ✔ sessionStorage is tab-specific
  ✔ Data survives refresh
  ✖ Data does NOT survive tab close
  ✔ Same API as localStorage
  ✔ storage event works for both storages
*/

console.log("Final sessionStorage:", sessionStorage);