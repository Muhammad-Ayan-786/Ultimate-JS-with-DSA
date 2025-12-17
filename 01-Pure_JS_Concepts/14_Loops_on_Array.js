const nums = [1, 2, 3, 4, 5];

// 1. for loop - Classic loop to iterate over an array
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// 2. while loop - Iterates over an array
let i = 0;
while (i < nums.length) {
    console.log(nums[i]);
    i++;
}

// 3. foreach loop - Calls a function for each array element
nums.forEach((elem) => {
    console.log(elem);
});

// 4. Array.from() - Used to create an array from any other object
let nameStr = "Harry";
let arr = Array.from(nameStr); // Converts string into array
console.log(arr);
// NOTE: Array.from() is used to convert HTML collection into array.

// 5. for...of loop - for...of loop can be used to get the value from an array
for (let elem of nums) {
    console.log(elem);
}

// 6. for...in loop - for...in loop can be used to get the index from an array
for (let index in nums) {
    console.log(index);
    // console.log(nums[index]); // Prints the elem at the specified index
}
// NOTE: for...in loop in Objects give the keys.