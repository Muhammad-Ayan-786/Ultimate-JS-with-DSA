/* =====================================================
   COOKIES — BASIC OPERATIONS
===================================================== */

/*
  document.cookie always returns all cookies
  for the current domain as a single string.
*/
console.log(document.cookie);

/*
  Setting a cookie:
  - If the key already exists → value is UPDATED
  - If the key does not exist → a NEW cookie is added
*/

document.cookie = "name=Harry;";
document.cookie = "name=Ayan;";       // Updates the existing "name" cookie
document.cookie = "profile=Coder;";   // Adds a new cookie

console.log(document.cookie);



/* =====================================================
   encodeURIComponent — SAFE COOKIE KEYS & VALUES
===================================================== */

/*
  Cookie keys and values must follow strict rules.
  Special characters can break the cookie.
  encodeURIComponent() makes them safe.
*/

let key = 'key#/78*';
let value = '5868";35$#3^&7';

/*
  ❌ This will NOT work properly
  because the key/value contains invalid characters
*/
document.cookie = `${key}=${value}`;

/*
  ✅ Correct way — encode key and value
*/
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

/*
  Decoding example:
  Converts encoded cookie string back to readable form
*/
console.log(
    decodeURIComponent("key%23%2F78*=5868%22%3B35%24%233%5E%267")
);

console.log(document.cookie);



/* =====================================================
COOKIE OPTIONS
===================================================== */

/*
  Cookie syntax:
  key=value; option1; option2; option3...

  Important:
  - Only key=value is the actual cookie
  - The rest are configuration options
*/

document.cookie =
    "user=Anthony; path=/a; expires=Thu, 25 Dec 2026 12:00:00 UTC";

/*
  path    → Cookie is accessible only under /a
  expires → Cookie will be deleted after this date
*/

console.log(document.cookie);