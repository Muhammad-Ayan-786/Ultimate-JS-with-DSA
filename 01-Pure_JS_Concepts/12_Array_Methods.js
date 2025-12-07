let nums = [1, 2, 3, 34, 4];

// 1. toString() -> converts an array to a string of comma seperated values
let str1 = nums.toString(); // convert nums into string.
console.log(str1, typeof str1);

// 2. join() -> joins all the array elems using a seprator.
let str2 = nums.join("_"); // convert nums into string
console.log(str2, typeof str2);

// 3. pop() -> removes last elem from the array. (Update the origional array, & return poped elem)
let poped = nums.pop();
console.log(nums, poped);

// 4. push() -> Adds a new elem at the end of the array. (Modifies the array, & return the new arr length)
let push = nums.push(100);
console.log(nums, push);

// 5. shift() -> Remove first elem and returns it.
let shift = nums.shift();
console.log(nums, shift);

// 6. unshift() -> Adds elem to the begninning returns new array length.
let unshift = nums.unshift(5);
console.log(nums, unshift);