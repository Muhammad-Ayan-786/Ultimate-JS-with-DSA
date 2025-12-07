/* <-------- Reverce Array using 2 Pointers Approach ---------> */

// Time Complexity : O(n)
// Space Complexity : O(1)

// Function Declaration
const reverseArray = (arr, start, end) => {
    while (start < end)
    {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        // [arr[start], arr[end]] = [arr[end], arr[start]]; // Can also be used

        start++, end--;
    }

    return arr;
}

// Variable Declaration, Function Call
const arr = [1, 2, 3, 4, 5];
const length = arr.length

console.log(`Original Array:`);
console.log(arr, `\n`);

const result = reverseArray(arr, 0, length - 1);

console.log(`Reverced Array:`);
console.log(result);