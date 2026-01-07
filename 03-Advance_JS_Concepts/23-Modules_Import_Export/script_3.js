/* =====================================================
   ES MODULE EXPORTS
   ===================================================== */

/*
  👉 NAMED EXPORTS
  - You can have MANY named exports
  - Import MUST use the SAME names
*/

export const hello = (name) => {
    console.log(`Hello ${name}`);
};

export const bye = (name) => {
    console.log(`Bye ${name}`);
};



/* =====================================================
   DEFAULT EXPORT (SINGLE)
   ===================================================== */

/*
  👉 Only ONE default export allowed per file
  👉 Import name can be ANYTHING
*/

const HelloMe = () => {
    console.log("Hello Sir Ayan!");
};

export default HelloMe;



/* =====================================================
   DEFAULT EXPORT (MULTIPLE USING OBJECT)
   ===================================================== */

/*
  👉 If you want to default-export MORE THAN ONE thing
  👉 You MUST wrap them inside an OBJECT
*/

const HelloAgain = (name) => {
    console.log(`Hello again ${name}`);
};

const ByeAgain = (name) => {
    console.log(`Bye again ${name}`);
};

/*
  ❗ Uncomment ONLY if you want object default export
  ❗ Remember: only ONE default export allowed
*/

// export default { HelloAgain, ByeAgain };



/* =====================================================
   QUICK SUMMARY
   ===================================================== */

/*
| Export type           | Export syntax                     |
|----------------------|-----------------------------------|
| Named                | export const a = () => {}          |
| Default (single)     | export default function            |
| Default (object)     | export default { a, b }            |
*/

/*
| Export type    | Export code                | Import code                        |
| -------------- | -------------------------- | ---------------------------------- |
| Named          | `export const a = ...`     | `import { a } from "./file.js"`    |
| Default        | `export default something` | `import anything from "./file.js"` |
| Default object | `export default { a, b }`  | `import x from "./file.js"; x.a()` |
*/