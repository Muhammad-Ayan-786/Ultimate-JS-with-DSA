let arr = [91, 82, 63, 84, null, "Not Present"];

arr[0] = 34; // Changing the value of the array.
arr[6] = 97; // Adding a new value to the array.

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]); // undefined cuz elem doesn't exist.


console.log(`The length of the arr is ${arr.length}`);
console.log(arr);
console.log(typeof arr); // object

console.log(`\n`);

// Quick Quiz : Print arr with for loop.
let fruitsArr = ["Apple", "Banana", "Watermelon", "Mango"];
console.log(fruitsArr);

for (let i = 0; i < fruitsArr.length; i++) {
    console.log(fruitsArr[i]);
}